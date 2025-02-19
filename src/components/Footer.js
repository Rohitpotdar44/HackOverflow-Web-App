import React from 'react';
import './Footer.css';
import { FaGithub, FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';

// Import logo
const logo = "https://hackoverflow3.blr1.cdn.digitaloceanspaces.com/assets/logos/3.0%20logo%202025.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/HackOverflow-1-0'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/hackoverflow3.0/'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/company/hackoverflow3-0/'
    },
    {
      name: 'Discord',
      icon: <FaDiscord />,
      url: 'https://discord.gg/your-discord'
    }
  ];

  const quickLinks = [
    { name: 'About', url: '/#about' },
    { name: 'Schedule', url: '/#schedule' },
    { name: 'Themes', url: '/#themes' },
    { name: 'Sponsors', url: '/#sponsors' },
    { name: 'Gallery', url: '/gallery' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <img src={logo} alt="HackOverflow Logo" />
          </div>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="quick-links">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p href="mailto:admin@hackoverflow.tech">
            Email: admin@hackoverflow.tech</p>
          <p>Location: Rasayani, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} HackOverflow 3.0. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
