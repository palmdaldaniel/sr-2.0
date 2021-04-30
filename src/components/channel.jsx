import styles from "./css/channel.module.css";
import { useHistory, useLocation } from "react-router-dom";
import { useContext } from "react";
import { RadioContext } from "../contexts/RadioProvider";

const Channel = ({ channel }) => {
  const history = useHistory();
  const location = useLocation();
  const { getScheduleForChannel } = useContext(RadioContext);

  const handleClick = (channelId) => {
    if (location.pathname === "/favorites") {
      getScheduleForChannel(channelId);
      return;
    }

    history.push(`/channels/${channelId}`);
  };
  return (
    <div
      className={styles.channel}
      onClick={() => {
        handleClick(channel.id);
      }}
      className={styles.channelswrapper}
    >
      <div className={styles.info}>
        <div className={styles.imgContainer}>
          <img src={channel.image} className={styles.image} alt="Logotyp" />
        </div>
        <div className={styles.headerwrapper}>
        <h3> {channel.name} </h3>
        </div>
      </div>
    </div>
  );
};

export default Channel;
