import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';
import Button from '../ui/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/plans', label: 'Plans' },
    { path: '/trainers', label: 'Trainers' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-orange-500 p-2 rounded-lg group-hover:bg-orange-600 transition-colors">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-800">
              Fit<span className="text-orange-500">Life</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors relative ${
                  isActive(link.path)
                    ? 'text-orange-500'
                    : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-orange-500"></span>
                )}
              </Link>
            ))}
            <Link to="/booking">
              <Button size="sm">Book Class</Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 font-medium ${
                  isActive(link.path)
                    ? 'text-orange-500'
                    : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/booking" onClick={() => setIsOpen(false)}>
              <Button fullWidth size="sm">
                Book Class
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
