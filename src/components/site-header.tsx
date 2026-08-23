import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { List } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Inicio", to: "/" },
  { label: "Trabajo", to: "/trabajo" },
  { label: "Notas", to: "/notas" },
  { label: "Sobre mí", to: "/sobre-mi" },
] as const;

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "rounded-none px-3 py-2 font-sans text-sm font-normal tracking-wide transition-colors duration-200 ease-in border-b-2",
    isActive
      ? "border-foreground text-foreground font-medium"
      : "border-transparent text-foreground/60 hover:text-foreground hover:border-foreground/30",
  );

const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "block w-full px-4 py-4 text-left font-sans text-base font-normal transition-colors duration-200 ease-in border-l-2",
    isActive
      ? "border-foreground bg-foreground/5 text-foreground font-medium"
      : "border-transparent text-foreground/55 hover:border-foreground/30 hover:text-foreground",
  );

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "shadow-sm backdrop-blur"
          : "border-transparent bg-transparent",
      )}
      style={
        scrolled
          ? {
              borderColor: "hsl(34 16% 80% / 0.7)",
              background: "hsl(38 22% 95% / 0.96)",
            }
          : undefined
      }
    >
      <div className="section-inner flex min-h-14 items-center justify-between px-8">
        {/* Logotipo — nombre + marcador */}
        <Link
          to="/"
          className="group flex items-baseline gap-2 text-foreground"
        >
          <span className="font-serif text-base font-semibold tracking-tight text-foreground">
            Lara Feijóo
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/35 transition-opacity group-hover:text-primary/80 opacity-100">
            — portfolio
          </span>
        </Link>

        {/* Desktop nav */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-0">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.to}>
                <NavLink to={item.to} className={navLinkClass}>
                  {item.label}
                </NavLink>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <NavLink to="/cv" className={navLinkClass}>
                CV
              </NavLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile nav */}
        <div className="flex items-center gap-3 lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                aria-label="Abrir menú de navegación"
                className="text-foreground"
              >
                <List size={24} weight="regular" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[86vw] max-w-xs border-border bg-background px-0 py-8"
            >
              <div className="px-6 pb-6">
                <p className="font-serif text-sm font-medium text-foreground">
                  Lara Feijóo
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-primary/60">
                  portfolio
                </p>
              </div>
              <div className="h-px bg-border mx-6 mb-4" />
              <NavigationMenu orientation="vertical" className="w-full">
                <NavigationMenuList className="flex w-full flex-col items-stretch gap-0">
                  {navItems.map((item) => (
                    <NavigationMenuItem key={item.to} className="w-full">
                      <NavLink
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className={mobileNavLinkClass}
                      >
                        {item.label}
                      </NavLink>
                    </NavigationMenuItem>
                  ))}
                  <NavigationMenuItem className="w-full">
                    <NavLink
                      to="/cv"
                      onClick={() => setOpen(false)}
                      className={mobileNavLinkClass}
                    >
                      CV
                    </NavLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
