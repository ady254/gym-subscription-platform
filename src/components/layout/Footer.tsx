import { Link } from 'react-router-dom';
import { Dumbbell, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">
                Fit<span className="text-orange-500">Life</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Transform your body, transform your life. Join India's fastest-growing fitness community.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/plans" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Membership Plans
                </Link>
              </li>
              <li>
                <Link to="/trainers" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Our Trainers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Strength Training</li>
              <li className="text-gray-400">HIIT</li>
              <li className="text-gray-400">Yoga</li>
              <li className="text-gray-400">CrossFit</li>
              <li className="text-gray-400">Zumba</li>
              <li className="text-gray-400">MMA</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 text-orange-500 mt-0.5" />
                <span>123 Fitness Street, Bangalore, Karnataka 560001</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-5 h-5 text-orange-500" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-5 h-5 text-orange-500" />
                <span>info@fitlife.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 FitLife. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
