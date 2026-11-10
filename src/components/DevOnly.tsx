export default function DevOnly({
  children,
  hideNote = false,
}: {
  children: React.ReactNode;
  hideNote?: boolean;
}) {
  if (!import.meta.env.DEV) return null;
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
