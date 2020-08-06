import React from "react";

import "./Footer.scss";

import Facebook from "images/facebook.png";
import Instagram from "images/instagram.png";

export const blockName = "footer-wrapper";

const Footer = () => {
  return (
    <div className={blockName}>
      <a
        href="https://www.facebook.com/essenceSoleilonline"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={Facebook} alt="Facebook" />
      </a>
      <a
        href="https://www.instagram.com/essence.soleil/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={Instagram} alt="Instagram" />
      </a>
    </div>
  );
};

export default Footer;
