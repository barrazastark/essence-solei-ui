import React from "react";

import "./Home.scss";

export const blockName = "home-wrapper";

const Home = ({ banner }) => (
  <div className={blockName}>
    {/*<div className={`${blockName}__box`}>
      <div className={`${blockName}__left`}>
        <h1>
          Bienvenido a <span>ESSENCE SOLEIL</span>
        </h1>
        <p>Perfumes originales de todas las marcas, precios muy accesibles.</p>
        <p>Pregunta por las promociones de envio.</p>
        <Link to="/perfumes">Ver perfumes</Link>
      </div>
      <img src={banner1} alt="imagen" />
    </div>*/}
    {banner ? <img src={banner} alt="imagen" /> : <p>Cargando imagen</p>}
  </div>
);

export default Home;
