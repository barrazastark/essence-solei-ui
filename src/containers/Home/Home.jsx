import React, { useState } from "react";

import { Home as HomePage } from "components";

const Home = () => {
  const [banner, setBanner] = useState(null);

  import("../../images/bannerv6.png").then((img) => {
    setBanner(img.default);
  });

  return <HomePage banner={banner} />;
};

export default Home;
