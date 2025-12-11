import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: 'https://github.com/Ashar-256',
      name: 'GitHub',
    },
    {
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/mohammad-ashar-262an',
      name: 'LinkedIn',
    },
    {
      icon: <FaTwitter />,
      url: 'https://X.com/Ashar_256',
      name: 'Twitter',
    },
    {
      icon: <FaEnvelope />,
      url: 'mailto:itsashar256@gmail.com',
      name: 'Email',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-top">
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-social">
              <h4>Connect With Me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 Mohammad Ashar. All rights reserved.</p>
            <button onClick={scrollToTop} className="back-to-top">
              Back to Top ↑
            </button>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .footer {
          background: #0f172a;
          color: #cbd5e1;
          padding: 3rem 0 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-top {
          display: flex;
          justify-content: space-around;
          margin-bottom: 2rem;
        }

        .footer-info h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #f8fafc;
        }

        .footer-info p {
          color: #94a3b8;
          line-height: 1.6;
          max-width: 300px;
        }

        .footer-links h4,
        .footer-social h4 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #f8fafc;
        }

        .footer-links ul {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 0.5rem;
        }

        .footer-links a {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: #6366f1;
        }

        .social-icons {
          display: flex;
          gap: 1rem;
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: #cbd5e1;
          font-size: 1.25rem;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-icon:hover {
          background: #6366f1;
          color: white;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-bottom p {
          color: #64748b;
          margin: 0;
        }

        .back-to-top {
          background: none;
          border: none;
          color: #6366f1;
          cursor: pointer;
          font-size: 0.875rem;
          transition: color 0.3s ease;
        }

        .back-to-top:hover {
          color: #8b5cf6;
        }

        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .footer-info p {
            max-width: none;
            margin: 0 auto;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .social-icons {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
