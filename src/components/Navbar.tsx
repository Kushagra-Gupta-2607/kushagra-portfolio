import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ThemeToggle from './ThemeToggle';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Education', path: '/education' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`nav-link ${location.pathname === "/projects" ? "active" : ""}`}
          >
            Projects
          </Link>
          <Link
            to="/experience"
            className={`nav-link ${location.pathname === "/experience" ? "active" : ""}`}
          >
            Experience
          </Link>
          <Link
            to="/education"
            className={`nav-link ${location.pathname === "/education" ? "active" : ""}`}
          >
            Education
          </Link>
          <Link
            to="/achievements"
            className={`nav-link ${location.pathname === "/achievements" ? "active" : ""}`}
          >
            Achievements
          </Link>
          <Link
            to="/blog"
            className={`nav-link ${location.pathname === "/blog" ? "active" : ""}`}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
          >
            Contact
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="md:hidden overflow-hidden"
      >
        <div className="container py-4 space-y-4">
          <Link
            to="/"
            className={`block nav-link ${location.pathname === "/" ? "active" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`block nav-link ${location.pathname === "/about" ? "active" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`block nav-link ${location.pathname === "/projects" ? "active" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/experience"
            className={`block nav-link ${location.pathname === "/experience" ? "active" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            Experience
          </Link>
          <Link
            to="/education"
            className={`block nav-link ${location.pathname === "/education" ? "active" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            Education
          </Link>
          <Link
            to="/achievements"
            className={`block nav-link ${location.pathname === "/achievements" ? "active" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            Achievements
          </Link>
          <Link
            to="/blog"
            className={`block nav-link ${location.pathname === "/blog" ? "active" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className={`block nav-link ${location.pathname === "/contact" ? "active" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <div className="pt-4">
            <ThemeToggle />
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar; 