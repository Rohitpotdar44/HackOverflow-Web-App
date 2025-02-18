import React from "react";
import logo from "../assets/img/H0 3.0 assets/3.0 logo 2025.png";

import "./Footer.css";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X"; // Import XIcon

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div>
          <div className="footer-logo">
            <a href="/#home" alt="Logo">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <p>Follow us on:</p>
          <p>
            <a href="https://www.instagram.com/hackoverflow.tech/" target="_blank" rel="noreferrer">
              <Instagram className="icons instagram" fontSize="large" />
            </a>

            <a
              href="https://github.com/HackOverflow-1-0"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub className="icons twitter" fontSize="large" />
            </a>
            <a
              href="https://www.linkedin.com/company/hack-overflow/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn className="icons linkedin" fontSize="large" />
            </a>
            <a href="https://x.com/hackoverflow_" target="_blank" rel="noreferrer">
              <XIcon className="icons twitter" fontSize="large" />{" "}
              {/* Replace Twitter with XIcon */}
            </a>
          </p>
        </div>
        <div>
          <p>© 2025 HackOverflow 3.0</p>
          {/* <p>
            {" "}
            <a href="mailto:hackathon@phcet.tech">hackathon@phcet.tech</a>
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
