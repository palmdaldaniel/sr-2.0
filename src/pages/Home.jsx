import Channels from "../components/channels";

import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RadioContext } from "../contexts/RadioProvider";
import { UserContext} from "../contexts/UserProvider";
import UserFeedback from "../components/UserFeedback";

const Home = () => {
  const { channels } = useContext(RadioContext)
  const { pathname } = useLocation();
  const { status, setStatus, user } = useContext(UserContext)
  console.log(user);

  useEffect(()=> {
    if(status === 200) {
      setTimeout(function(){
        setStatus(404)
      }, 3000)
      
    }

  },[status])


  // on pageload - scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
   
    <div className="homepageWrapper">
    { status === 200 &&
      <UserFeedback   username={user.username}/>
    }
      <Channels channels={channels} />
    </div>
  
  );
};

export default Home;
