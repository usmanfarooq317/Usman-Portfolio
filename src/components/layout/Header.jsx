import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Button } from '../ui/button.jsx';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Tools', path: '/tools' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl sm:text-2xl font-bold text-primary">
            Usman<span className="text-accent">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <Link
              to="https://github.com/usmanfarooq317"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FiGithub size={20} />
            </Link>
            <Link
              to="https://linkedin.com/in/usmanfarooq317"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FiLinkedin size={20} />
            </Link>
            <Link
              to="mailto:usmanfarooq317@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FiMail size={20} />
            </Link>
            <Button asChild size="sm">
              <Link to="/contact">Hire Me</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4 border-t border-border pt-4"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium transition-colors hover:text-primary py-2 px-1 min-h-[44px] flex items-center ${
                    isActive(item.path) ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center justify-center space-x-6 pt-4 border-t border-border mt-4">
                <Link
                  to="https://github.com/usmanfarooq317"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  <FiGithub size={24} />
                </Link>
                <Link
                  to="https://linkedin.com/in/usmanfarooq317"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  <FiLinkedin size={24} />
                </Link>
                <Link
                  to="mailto:usmanfarooq317@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  <FiMail size={24} />
                </Link>
              </div>
              <div className="pt-2">
                <Button asChild size="sm" className="w-full min-h-[44px]">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Hire Me
                  </Link>
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
