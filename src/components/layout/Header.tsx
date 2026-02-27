import { Link, useLocation } from "react-router-dom";
import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { site } from "@/lib/site";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/parents", label: "For Parents" },
  { path: "/about", label: "Our Mission" },
  { path: "/contact", label: "Contact" },
] as const;

function DesktopNav() {
  const location = useLocation();

  return (
    <nav className="hidden md:flex items-center gap-1">
      {navItems.map((item) => {
        const active = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={[
              "rounded-full px-4 py-2 text-sm transition-colors",
              active ? "bg-brand-card text-neutral-900" : "text-neutral-700 hover:bg-brand-card/60",
            ].join(" ")}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

function DownloadCta({ className = "" }: { className?: string }) {
  return (
    <a
      href={site.playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white",
        "bg-black hover:opacity-95 transition-opacity",
        className,
      ].join(" ")}
    >
      Download app
    </a>
  );
}

export function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-brand-background/90 backdrop-blur supports-[backdrop-filter]:bg-brand-background/75  border-neutral-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <Link to="/" aria-label="Niel Academy home" className="shrink-0">
            <img
              src="/images/long-logo.png"
              alt="Niel Academy logo"
              className="hidden md:inline w-auto h-15"
            />
            <img
              src="/images/logo.png"
              alt="Niel Academy logo"
              className="inline md:hidden size-8"
            />
          </Link>

          <div className="hidden md:flex items-center justify-center flex-1">
            <DesktopNav />
          </div>

          <div className="hidden md:block">
            <DownloadCta />
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="h-10 w-10 p-0">
                  <MenuIcon size={20} className="text-neutral-700" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 bg-brand-background/95 backdrop-blur-md border-l border-neutral-200/80 flex flex-col"
              >
                <SheetHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src="/images/logo.png"
                        alt="Niel Academy logo"
                        className="size-7 rounded-lg"
                      />
                      <div className="leading-tight">
                        <SheetTitle className="text-base text-neutral-900">
                          Niel Academy
                        </SheetTitle>
                        <p className="text-xs text-neutral-600">
                          AI tutoring for African learners
                        </p>
                      </div>
                    </div>
                  </div>
                </SheetHeader>

                <nav className="flex flex-col gap-1 mt-2">
                  {navItems.map((item) => {
                    const active = location.pathname === item.path;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={[
                          "rounded-2xl px-4 py-3 text-base transition-colors flex items-center",
                          active
                            ? "bg-neutral-900 text-brand-background"
                            : "text-neutral-800 hover:bg-neutral-900/5",
                        ].join(" ")}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>

                <div className="pt-6 mt-6 border-t border-neutral-200/70">
                  <DownloadCta className="w-full" />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
