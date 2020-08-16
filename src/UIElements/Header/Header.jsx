import React, { useState } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";

import "./Header.scss";

import menu from "images/menu.svg";
import close from "images/close.svg";

export const blockName = "header-wrapper";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={cx(blockName, { open })}>
      <ul onClick={() => setOpen(!open)}>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/catalago">Catalago</Link>
        </li>
      </ul>
      <img
        onClick={() => setOpen(!open)}
        className={`${blockName}__mobile-icon`}
        src={!open ? menu : close}
        alt="Menu icon"
      />
    </nav>
  );
};

export default Header;
