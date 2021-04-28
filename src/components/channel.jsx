import styles from "./css/channel.module.css";
import { useHistory, useLocation } from "react-router-dom";

const Channel = ({ channel }) => {
  const history = useHistory();
  const location = useLocation()

  const handleClick = (channelId) => {

    // här ska jag gör något annat 
    if(location.pathname === '/favorites') return

    history.push(`/channels/${channelId}`);
  };

  return (
    <div
      className={styles.channel}
      onClick={() => {
        handleClick(channel.id);
      }}
    >
      <div className={styles.imgContainer}>
        <img src={channel.image} className={styles.image}></img>
      </div>
      <h1> {channel.name} </h1>
      <p> {channel.tagline} </p>
    </div>
  );
};

export default Channel;
