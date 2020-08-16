import React from "react";

import "./Floating.scss";

import whatsapp from "images/whatsapp.png";
import messenger from "images/messenger.png";

export const blockName = "floating-bar-wrapper";

const FloatingBar = () => {
  return (
    <div className={blockName}>
      <a
        href="https://wa.me/6674760979"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={whatsapp} alt="Whatsapp" />
      </a>
      <a
        href="https://msng.link/o/?essenceSoleilonline=fm"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={messenger} alt="Faceboob messenger" />
      </a>
    </div>
  );
};

export default FloatingBar;
