import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">Maheshwara.ai</span>
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
          <div className="flex items-center gap-4">
            <button className="hidden md:inline-flex btn-outline text-sm">
              Why us
            </button>
            <button className="btn-primary text-sm">
              Get Free consultation
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
