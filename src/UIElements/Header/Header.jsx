import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import { isDevMode } from "utils";

export const blockName = "header-wrapper";

const Header = () => {
  return (
    <nav className={blockName}>
      {isDevMode && (
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/catalago">Catalago</Link>
          </li>
          <li>
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li>
            <Link to="/ubicacion">Ubicacion</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
