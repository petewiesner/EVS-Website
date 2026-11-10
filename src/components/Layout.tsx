import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

// Scroll to the #hash target after navigation, otherwise to the top of the new page.
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])
  return null
}

export function Layout() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <ScrollManager />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
