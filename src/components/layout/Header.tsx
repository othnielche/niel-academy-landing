import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';
import { MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';

export function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50  bg-brand-background" >
      <div className=" mx-auto px-1 lg:px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/long-logo.png"
              alt="Niel Academy"
              className="h-13 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-1 absolute left-1/2 transform -translate-x-1/2">
            <Link
              to="/"
              className={`px-3 py-1 text-sm font-medium relative group transition-colors duration-300 ${
                isActive('/') 
                  ? 'text-black' 
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              Home
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transition-all duration-300 ease-in-out ${
                isActive('/') 
                  ? 'scale-x-100' 
                  : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 text-sm font-medium relative group transition-colors duration-300 ${
                isActive('/about') 
                  ? 'text-black' 
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              About
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transition-all duration-300 ease-in-out ${
                isActive('/about') 
                  ? 'scale-x-100' 
                  : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link
              to="/courses"
              className={`px-3 py-2 text-sm font-medium relative group transition-colors duration-300 ${
                isActive('/courses') 
                  ? 'text-black' 
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              Courses
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transition-all duration-300 ease-in-out ${
                isActive('/courses') 
                  ? 'scale-x-100' 
                  : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 text-sm font-medium relative group transition-colors duration-300 ${
                isActive('/contact') 
                  ? 'text-black' 
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              Contact
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transition-all duration-300 ease-in-out ${
                isActive('/contact') 
                  ? 'scale-x-100' 
                  : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link
              to="/privacy-policy"
              className={`px-3 py-2 text-sm font-medium relative group transition-colors duration-300 ${
                isActive('/privacy-policy') 
                  ? 'text-black' 
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              Privacy Policy
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transition-all duration-300 ease-in-out ${
                isActive('/privacy-policy') 
                  ? 'scale-x-100' 
                  : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
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
                  <SheetTitle className="text-left text-xl font-roboto-bold text-neutral-900">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-2">
                  <Link
                    to="/"
                    className={`px-4 py-4 text-lg font-medium rounded-lg transition-colors duration-300 font-roboto-regular ${
                      isActive('/') 
                        ? 'text-black font-roboto-semibold' 
                        : 'text-neutral-600 hover:text-black font-roboto-regular hover:bg-neutral-50'
                    }`}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className={`px-4 py-4 text-lg font-medium rounded-lg transition-colors duration-300 font-roboto-regular ${
                      isActive('/about') 
                        ? 'text-black font-roboto-semibold' 
                        : 'text-neutral-600 hover:text-black font-roboto-regular'
                    }`}
                  >
                    About
                  </Link>
                  <Link
                    to="/courses"
                    className={`px-4 py-4 text-lg font-medium rounded-lg transition-colors duration-300 font-roboto-regular ${
                      isActive('/courses') 
                        ? 'text-black font-roboto-semibold' 
                            : 'text-neutral-600 hover:text-black font-roboto-regular'
                    }`}
                  >
                    Courses
                  </Link>
                  <Link
                    to="/contact"
                    className={`px-4 py-4 text-lg font-medium rounded-lg transition-colors duration-300 ${
                      isActive('/contact') 
                        ? 'text-black font-roboto-semibold' 
                        : 'text-neutral-600 hover:text-black font-roboto-regular'
                    }`}
                  >
                    Contact
                  </Link>
                  <Link
                    to="/privacy-policy"
                    className={`px-4 py-4 text-lg font-medium rounded-lg transition-colors duration-300 ${
                      isActive('/privacy-policy') 
                        ? 'text-black font-roboto-semibold' 
                        : 'text-neutral-600 hover:text-black font-roboto-regular'
                    }`}
                  >
                    Privacy Policy
                  </Link>
                </nav>
                <div className="w-full mt-8 pt-6 border-t border-neutral-200">
                  <Button className="w-full mx-2.5 lg:mx-0 bg-black rounded-xl h-12 text-white hover:opacity-90 font-roboto-semibold">
                    Get Started
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-black rounded-xl h-10 text-white hover:opacity-90">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
