import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { nav, routes } from "@/lib/site"
import logoPlain from "@/assets/Logo-Plain.svg"

// Hash links ("/#services") are never "active"; page links highlight on their own route.
const linkClass = (to: string) => ({ isActive }: { isActive: boolean }) =>
  cn(
    "text-sm font-medium transition-colors hover:text-brand",
    isActive && !to.includes("#") ? "text-brand" : "text-muted-foreground",
  )

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to={routes.home} className="flex items-center">
          <img src={logoPlain} alt="EVS Solutions" className="h-8 w-auto" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} className={linkClass(n.to)}>
              {n.label}
            </NavLink>
          ))}
          <Link to={routes.contact} className={buttonVariants()}>
            Get in touch
          </Link>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger render={<Button variant="ghost" size="icon" aria-label="Open menu" className="lg:hidden" />}>
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="p-6">
            <SheetTitle>
              <img src={logoPlain} alt="EVS Solutions" className="h-8 w-auto" />
            </SheetTitle>
            <div className="mt-6 flex flex-col gap-4">
              {nav.map((n) => (
                <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-lg font-medium">
                  {n.label}
                </NavLink>
              ))}
              <Link to={routes.contact} onClick={() => setOpen(false)} className={cn(buttonVariants(), "mt-2")}>
                Get in touch
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
