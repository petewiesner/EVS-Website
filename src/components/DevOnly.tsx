/**
 * Shows its children only in `npm run dev`. In production builds it renders
 * `fallback` instead (nothing by default), so unconfirmed content such as
 * distribution / manufacturer wording never reaches the live site.
 */
export default function DevOnly({
  children,
  hideNote = false,
  fallback = null,
}: {
  children: React.ReactNode;
  hideNote?: boolean;
  /** What production shows in place of the dev-only content. */
  fallback?: React.ReactNode;
}) {
  if (!import.meta.env.DEV) return <>{fallback}</>;
  return (
    <div>
      {children}
      {!hideNote && (
        <div className="rounded-lg border-2 border-dashed border-brand-accent bg-brand-accent/10 p-4 text-sm text-brand-ink">
          <span className="font-semibold">Only visible in development</span>
        </div>
      )}
    </div>
  );
}

/** Pick a value by environment: `dev` in `npm run dev`, `prod` on the live site. */
export const devOr = <T,>(dev: T, prod: T): T => (import.meta.env.DEV ? dev : prod);
