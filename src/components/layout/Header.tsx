import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';

export function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50  bg-brand-background" >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/long-logo.png"
              alt="Niel Academy"
              className="h-16 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-1 absolute left-1/2 transform -translate-x-1/2">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium relative group transition-colors duration-300 ${
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
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button className="bg-black rounded-xl h-10 text-white hover:opacity-90">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
