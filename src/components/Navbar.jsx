import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Pricing", href: "/pricing" },
    { name: "Order", href: "/order" },
  ];

  return (
    <nav className="bg-ocean-dark/90 backdrop-blur-md border-b border-wave-blue/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-wave-blue rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">KL</span>
            </div>
            <span className="text-xl font-bold text-sand-beige">Karwar LunchBox</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sand-beige hover:text-sand-light transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            
            {user ? (
              <>
                <Link to="/dashboard" className="text-sand-beige hover:text-sand-light transition-colors font-medium">
                  Dashboard
                </Link>
                <button 
                  onClick={logout}
                  className="text-sand-beige hover:text-sand-light transition-colors font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-sand-beige hover:text-sand-light transition-colors font-medium">
                  Login
                </Link>
                <Link to="/signup" className="btn-secondary text-sm px-4 py-2">
                  Sign Up
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-sand-beige hover:text-sand-light p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ocean-dark border-t border-wave-blue/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 text-sand-beige hover:text-sand-light hover:bg-ocean-dark/50 rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="block px-3 py-2 text-sand-beige hover:text-sand-light hover:bg-ocean-dark/50 rounded-lg transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-sand-beige hover:text-sand-light hover:bg-ocean-dark/50 rounded-lg transition-colors font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 text-sand-beige hover:text-sand-light hover:bg-ocean-dark/50 rounded-lg transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block mx-3 mt-2 btn-secondary text-sm text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
