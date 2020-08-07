import React from "react";
import { Link } from "react-router-dom";

import { Placeholder } from "rsuite";

import { PageWrapper } from "UIElements";

import { isDevMode } from "utils";

import "./Home.scss";

export const blockName = "home-wrapper";

const Home = ({ banner }) => (
  <PageWrapper className={blockName}>
    {banner ? (
      <>
        {isDevMode ? (
          <Link to="/catalago">
            <img src={banner} alt="imagen" />
          </Link>
        ) : (
          <a
            href="https://cutt.ly/CATALOGO-PERFUMESAQUI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={banner} alt="imagen" />
          </a>
        )}
      </>
    ) : (
      <Placeholder.Graph active style={{ height: "100%" }} />
    )}
  </PageWrapper>
);

export default Home;
