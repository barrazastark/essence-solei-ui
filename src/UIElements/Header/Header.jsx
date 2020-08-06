import React from "react";

import { Link } from "react-router-dom";

import "./Header.scss";

export const blockName = "header-wrapper";

const Header = () => {
  return (
    <nav className={blockName}>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        {/*<li>
          <Link to="/catalogo">Catalogo</Link>
        </li>
        <li>
          <Link to="/nosotros">Nosotros</Link>
        </li>
        <li>
          <Link to="/ubicacion">Ubicacion</Link>
        </li>*/}
      </ul>
    </nav>
  );
};

export default Header;
