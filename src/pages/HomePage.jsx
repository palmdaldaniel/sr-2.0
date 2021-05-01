import Channels from "../components/channels";
import styles from './css/HomePage.module.css'

import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RadioContext } from "../contexts/RadioProvider";
import { UserContext} from "../contexts/UserProvider";
import UserFeedback from "../components/UserFeedback";

const HomePage = () => {
  const { channels } = useContext(RadioContext)
  const { pathname } = useLocation();
  const { status, setStatus, user } = useContext(UserContext)

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
   
    <div className={styles.hompage}>
    { status === 200 &&
      <UserFeedback   username={user.username}/>
    }
        <h1 style={{textAlign: 'center', margin: '20px' }}> Kanaler </h1>
      <Channels channels={channels} />
    </div>
  
  );
};

export default HomePage;
