import React from "react";
import { Link } from "react-router-dom";

import { Placeholder } from "rsuite";

import { PageWrapper } from "UIElements";

import soleil from "images/soleil.png";

import "./Home.scss";

export const blockName = "home-wrapper";

const stylesForPlaceHolder = { height: "100%" };

const Home = ({ banner }) => (
  <PageWrapper className={blockName}>
    {banner ? (
      <>
        <a
          href="https://cutt.ly/CATALOGO-PERFUMESAQUI"
          target="_blank"
          rel="noopener noreferrer"
          className={`${blockName}__home-image`}
        >
          <img src={banner} alt="imagen" />
        </a>
        <div className={`${blockName}__mobile-content`}>
          <img src={soleil} alt="Soleil" />
          <h1>
            <span>permite que</span> <span>tu perfume</span>{" "}
            <span>hable de ti</span>
          </h1>
          <Link to="/catalago">Ver catalago</Link>
        </div>
      </>
    ) : (
      <Placeholder.Graph active style={stylesForPlaceHolder} />
    )}
  </PageWrapper>
);

export default Home;
