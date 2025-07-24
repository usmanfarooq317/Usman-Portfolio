import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand & Description */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-primary">
              Usman<span className="text-accent">.</span>
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-sm mx-auto sm:mx-0">
              Passionate Backend Developer dedicated to creating innovative web solutions 
              and solving complex problems through code.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              <Link
                to="https://github.com/usmanfarooq317"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </Link>
              <Link
                to="https://linkedin.com/in/usmanfarooq317"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </Link>
              <Link
                to="mailto:usmanfarooq317@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Email"
              >
                <FiMail size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto sm:mx-0">
              <Link to="/" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors py-1">
                Home
              </Link>
              <Link to="/about" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors py-1">
                About
              </Link>
              <Link to="/projects" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors py-1">
                Projects
              </Link>
              <Link to="/tools" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors py-1">
                Tools
              </Link>
              <Link to="/experience" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors py-1">
                Experience
              </Link>
              <Link to="/contact" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors py-1">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-center sm:justify-start space-x-3 text-sm sm:text-base text-muted-foreground">
                <FiMail size={16} />
                <span className="break-all">usmanfarooq317@gmail.com</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3 text-sm sm:text-base text-muted-foreground">
                <FiPhone size={16} />
                <span>+92-330-5674469</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3 text-sm sm:text-base text-muted-foreground">
                <FiMapPin size={16} />
                <span>Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-center md:text-left">
            <p className="text-muted-foreground text-xs sm:text-sm">
              © {currentYear} Usman Farooq. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
