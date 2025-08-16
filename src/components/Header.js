import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link 
            to="hero" 
            smooth={true} 
            duration={500} 
            className="logo"
          >
            Portfolio
          </Link>

          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          padding: 1rem 0;
        }

        .header.scrolled {
          background: rgba(15, 23, 42, 0.95);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #f8fafc;
          cursor: pointer;
          text-decoration: none;
        }

        .nav {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          color: #cbd5e1;
          text-decoration: none;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          color: #6366f1;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: #6366f1;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-menu-toggle span {
          width: 25px;
          height: 3px;
          background: #f8fafc;
          margin: 3px 0;
          transition: 0.3s;
        }

        @media (max-width: 768px) {
          .nav {
            position: fixed;
            top: 70px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 70px);
            background: rgba(15, 23, 42, 0.95);
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: left 0.3s ease;
            gap: 2rem;
          }

          .nav-open {
            left: 0;
          }

          .mobile-menu-toggle {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
