import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';
import { MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';

export interface NavItem {
  path: string;
  label: string;
}

export interface LogoConfig {
  src: string;
  alt: string;
  to?: string;
  className?: string;
}

export interface CTAConfig {
  label: string;
  onClick?: () => void;
  to?: string;
  className?: string;
}

export interface HeaderProps {
  logo?: LogoConfig;
  navItems?: NavItem[];
  cta?: CTAConfig;
  className?: string;
  mobileMenuTitle?: string;
}

const defaultLogo: LogoConfig = {
  src: '/images/long-logo.png',
  alt: 'Niel Academy',
  to: '/',
  className: 'h-13 w-auto',
};

const defaultNavItems: NavItem[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
  { path: '/privacy-policy', label: 'Privacy Policy' },
];

const defaultCTA: CTAConfig = {
  label: 'Get Started',
};

interface NavLinkProps {
  item: NavItem;
  isActive: boolean;
  variant?: 'desktop' | 'mobile';
}

function NavLink({ item, isActive, variant = 'desktop' }: NavLinkProps) {
  if (variant === 'mobile') {
    return (
      <Link
        to={item.path}
        className={`px-4 py-4 text-lg font-medium rounded-lg transition-colors duration-300 font-roboto-regular ${
          isActive
            ? 'text-black font-roboto-semibold'
            : 'text-neutral-600 hover:text-black font-roboto-regular hover:bg-neutral-50'
        }`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <Link
      to={item.path}
      className={`px-3 py-2 text-sm font-medium relative group transition-colors duration-300 ${
        isActive ? 'text-black' : 'text-neutral-600 hover:text-black'
      }`}
    >
      {item.label}
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transition-all duration-300 ease-in-out ${
          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}
      ></span>
    </Link>
  );
}

function CTAButton({ cta }: { cta: CTAConfig }) {
  const buttonClassName = cta.className || 'bg-black rounded-xl h-10 text-white hover:opacity-90';
  const buttonContent = <>{cta.label}</>;

  if (cta.to) {
    return (
      <Link to={cta.to}>
        <Button className={buttonClassName}>{buttonContent}</Button>
      </Link>
    );
  }

  return (
    <Button className={buttonClassName} onClick={cta.onClick}>
      {buttonContent}
    </Button>
  );
}

export function Header({
  logo = defaultLogo,
  navItems = defaultNavItems,
  cta = defaultCTA,
  className = '',
  mobileMenuTitle = 'Menu',
}: HeaderProps) {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const logoLink = logo.to || '/';

  return (
    <header className={`sticky top-0 z-50 bg-brand-background ${className}`}>
      <div className="mx-auto px-1 lg:px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={logoLink} className="flex items-center gap-3">
            <img
              src={logo.src}
              alt={logo.alt}
              className={logo.className || 'h-13 w-auto'}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                item={item}
                isActive={isActive(item.path)}
                variant="desktop"
              />
            ))}
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden flex justify-end">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="h-12 w-12 p-2">
                  <MenuIcon size={20} className="text-neutral-600 hover:text-black" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-brand-background">
                <SheetHeader className="pb-6">
                  <SheetTitle className="text-left text-xl font-roboto-bold text-neutral-900">
                    {mobileMenuTitle}
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.path}
                      item={item}
                      isActive={isActive(item.path)}
                      variant="mobile"
                    />
                  ))}
                </nav>
                <div className="w-full mt-8 pt-6 border-t border-neutral-400">
                  <CTAButton cta={{ ...cta, className: ' mx-2.5 lg:mx-0 bg-black rounded-xl h-12 text-white hover:opacity-90 font-roboto-semibold' }} />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <CTAButton cta={cta} />
          </div>
        </div>
      </div>
    </header>
  );
}
