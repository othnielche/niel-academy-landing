import { Link, useLocation } from "react-router-dom";
import { MenuIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { LanguageSelector, LanguageSelectorCompact } from "../ui/LanguageSelector";
import { site } from "@/lib/site";

function getNavItems(t: any) {
  return [
    { path: "/", label: t('navigation.home') },
    { path: "/demo", label: t('navigation.demo') },
    { path: "/parents", label: t('navigation.parents') },
    { path: "/about", label: t('navigation.mission') },
    { path: "/contact", label: t('navigation.contact') },
  ] as const;
}

function DesktopNav() {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  
  const navItems = getNavItems(t);

  const getCurrentPath = (itemPath: string) => {
    if (i18n.language === 'fr' && !location.pathname.startsWith('/fr')) {
      return `/fr${itemPath}`;
    } else if (i18n.language === 'en' && location.pathname.startsWith('/fr')) {
      return itemPath;
    }
    return itemPath;
  };

  return (
    <nav className="hidden md:flex items-center gap-1">
      {navItems.map((item) => {
        const itemPath = getCurrentPath(item.path);
        const active = location.pathname === itemPath || 
                     (item.path === "/" && (location.pathname === "/" || location.pathname === "/fr"));
        return (
          <Link
            key={item.path}
            to={itemPath}
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
  const { t } = useTranslation();
  
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
      {t('navigation.downloadApp')}
    </a>
  );
}

export function Header() {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navItems = getNavItems(t);

  const getCurrentPath = (itemPath: string) => {
    if (i18n.language === 'fr' && !location.pathname.startsWith('/fr')) {
      return `/fr${itemPath}`;
    } else if (i18n.language === 'en' && location.pathname.startsWith('/fr')) {
      return itemPath;
    }
    return itemPath;
  };

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

          <div className="hidden md:flex items-center gap-3">
            <LanguageSelector />
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
                className="w-[min(20rem,100vw)] bg-brand-background/95 backdrop-blur-md border-l border-neutral-200/80 flex flex-col gap-0 p-0"
              >
                <SheetHeader className="px-5 pt-5 pb-4 pr-12 border-b border-neutral-200/70">
                  <div className="flex items-center gap-3">
                    <img
                      src="/images/logo.png"
                      alt="Niel Academy logo"
                      className="size-8 shrink-0 rounded-lg"
                    />
                    <div className="min-w-0 leading-tight">
                      <SheetTitle className="text-base text-neutral-900">
                        Niel Academy
                      </SheetTitle>
                      <p className="text-xs text-neutral-600">
                        {t('footer.tagline')}
                      </p>
                    </div>
                  </div>
                </SheetHeader>

                <nav className="flex flex-1 flex-col gap-1 px-5 py-4">
                  {navItems.map((item) => {
                    const itemPath = getCurrentPath(item.path);
                    const active = location.pathname === itemPath || 
                                 (item.path === "/" && (location.pathname === "/" || location.pathname === "/fr"));
                    return (
                      <Link
                        key={item.path}
                        to={itemPath}
                        className={[
                          "rounded-2xl px-3 py-3 text-base transition-colors",
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

                <div className="mt-auto border-t border-neutral-200/70 px-5 py-5 space-y-4">
                  <LanguageSelectorCompact className="w-full justify-center" />
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
