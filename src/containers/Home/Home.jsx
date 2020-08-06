import React, { useEffect, useState } from "react";

import { Home as HomePage } from "components";

const Home = () => {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    import("../../images/bannerv4.png").then((img) => {
      setBanner(img.default);
    });
  }, []);

  return <HomePage banner={banner} />;
};

export default Home;
