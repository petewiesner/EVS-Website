// Builds the site and publishes dist/ to the `build` branch (what cPanel pulls).
// dist/ is NOT tracked on main; this commits it straight onto `build` using a
// temporary git worktree, so your working folder and branch are untouched.
//
//   npm run deploy               build, commit to build, push
//   npm run deploy -- --no-push  build and commit locally only (for testing)
import { execSync } from "node:child_process"
import { cpSync, existsSync, mkdtempSync, readdirSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"

const BRANCH = "build"
const REMOTE = "origin"
const push = !process.argv.includes("--no-push")
const root = resolve(import.meta.dirname, "..")
const dist = join(root, "dist")

const run = (cmd, cwd = root) => execSync(cmd, { cwd, stdio: "inherit" })
const out = (cmd, cwd = root) => execSync(cmd, { cwd, encoding: "utf8" }).trim()

if (out("git status --porcelain")) {
  console.warn("⚠ You have uncommitted changes. Deploying what's on disk, which may differ from what's committed.\n")
}

run("npm run build")
if (!existsSync(join(dist, "index.html"))) throw new Error("Build failed: dist/index.html is missing.")

const sha = out("git rev-parse --short HEAD")
const tmp = mkdtempSync(join(tmpdir(), "evs-deploy-"))

try {
  // Start from the latest published build so history stays linear.
  const remoteExists = out(`git ls-remote --heads ${REMOTE} ${BRANCH}`) !== ""
  if (remoteExists) {
    run(`git fetch ${REMOTE} ${BRANCH}`)
    run(`git worktree add --force -B ${BRANCH} "${tmp}" ${REMOTE}/${BRANCH}`)
  } else {
    run(`git worktree add --force --orphan -b ${BRANCH} "${tmp}"`)
  }

  // Replace the branch contents with the fresh build.
  for (const entry of readdirSync(tmp)) {
    if (entry !== ".git") rmSync(join(tmp, entry), { recursive: true, force: true })
  }
  cpSync(dist, tmp, { recursive: true })

  run("git add -A", tmp)
  if (!out("git status --porcelain", tmp)) {
    console.log("\n✓ Build output is unchanged. Nothing to deploy.")
  } else {
    run(`git commit -m "Deploy ${sha}"`, tmp)
    if (push) {
      run(`git push ${REMOTE} ${BRANCH}`, tmp)
      console.log(`\n✓ Deployed ${sha} to ${REMOTE}/${BRANCH}. Pull the build branch in cPanel to go live.`)
    } else {
      console.log(`\n✓ Committed ${sha} to local ${BRANCH} (not pushed).`)
    }
  }
} finally {
  run(`git worktree remove --force "${tmp}"`)
}
