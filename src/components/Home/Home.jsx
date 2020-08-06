import React from "react";
import { Link } from "react-router-dom";

import { Placeholder } from "rsuite";

import "./Home.scss";

export const blockName = "home-wrapper";

const Home = ({ banner }) => (
  <div className={blockName}>
    {banner ? (
      <Link to="/catalogo">
        <img src={banner} alt="imagen" />
      </Link>
    ) : (
      <Placeholder.Graph active style={{ height: "100%" }} />
    )}
  </div>
);

export default Home;
