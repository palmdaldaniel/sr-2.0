import Channels from "../components/channels";

import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RadioContext } from "../contexts/RadioProvider";

const Home = () => {
  const { channels } = useContext(RadioContext)
  const { pathname } = useLocation();


  // on pageload - scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="homepageWrapper">
      <Channels channels={channels} />
    </div>
  );
};

export default Home;
