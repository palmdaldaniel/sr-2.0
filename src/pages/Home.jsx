import Channels from "../components/channels";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { pathname } = useLocation();


  // on pageload - scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="homepageWrapper">
      <Channels />
    </div>
  );
};

export default Home;
