import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-orange-500">⚡DuoScript</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a href="#features" className="text-gray-700 hover:text-orange-500">
              Features
            </a>
            <a href="#docs" className="text-gray-700 hover:text-orange-500">
              Docs
            </a>
            <a href="#community" className="text-gray-700 hover:text-orange-500">
              Community
            </a>
            
            <a 
              href="https://github.com/delbiya/DuoScript"
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
            >
              GitHub
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-orange-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#features"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-orange-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#docs"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-orange-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Docs
            </a>
            <a
              href="#community"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-orange-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </a>
            <Link
              to="/playground"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 hover:bg-orange-100"
              onClick={() => setIsMenuOpen(false)}
            >
              <Code className="h-4 w-4" />
              <span>Playground</span>
            </Link>
            <a
              href="https://github.com/delbiya/DuoScript"
              className="block px-3 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600"
              onClick={() => setIsMenuOpen(false)}
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;