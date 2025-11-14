import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold text-primary">Maheshwara.ai</span>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Services
            </Link>
            <Link to="/solutions" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Solutions
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-2 md:gap-4">
            <button className="hidden md:inline-flex btn-outline text-sm">
              Why us
            </button>
            <button className="btn-primary text-xs md:text-sm px-3 md:px-6 py-2">
              Get Free consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-0.5 bg-gray-700"></span>
            <span className="w-6 h-0.5 bg-gray-700"></span>
            <span className="w-6 h-0.5 bg-gray-700"></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <Link to="/" className="block text-gray-700 hover:text-primary transition-colors font-medium py-2">
              Home
            </Link>
            <Link to="/about" className="block text-gray-700 hover:text-primary transition-colors font-medium py-2">
              About
            </Link>
            <Link to="/services" className="block text-gray-700 hover:text-primary transition-colors font-medium py-2">
              Services
            </Link>
            <Link to="/solutions" className="block text-gray-700 hover:text-primary transition-colors font-medium py-2">
              Solutions
            </Link>
            <Link to="/contact" className="block text-gray-700 hover:text-primary transition-colors font-medium py-2">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
