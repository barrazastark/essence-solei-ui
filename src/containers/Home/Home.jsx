import React, { useState, useEffect } from "react";

import { Home as HomePage } from "components";

const Home = () => {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    import("../../images/bannerv7-min.png").then((img) => {
      setBanner(img.default);
    });
  }, []);

  return <HomePage banner={banner} />;
};

export default Home;
