import styles from "./css/channel.module.css";
import { useHistory, useLocation } from "react-router-dom";
import { useContext } from "react";
import { RadioContext } from "../contexts/RadioProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../contexts/UserProvider";

const Channel = ({ channel }) => {
  const history = useHistory();
  const location = useLocation();
  const { getScheduleForChannel } = useContext(RadioContext);
  const { deleteFavoriteChannel, user } = useContext(UserContext);

  const handleClick = (channelId) => {
    if (location.pathname === "/favorites") {
      getScheduleForChannel(channelId);
      return;
    }

    history.push(`/channels/${channelId}`);
  };

  return (
    <div className={styles.channel}>
      <div  className={styles.channelswrapper}>
        <div className={styles.info}>
          <div
            className={styles.imgContainer}
            onClick={() => {
              handleClick(channel.id);
            }}
          >
            <img src={channel.image} className={styles.image} alt="Logotyp" />
          </div>
          <div className={styles.headerwrapper}>
            <div className={styles.channelname}>
            <h3> {channel.name} </h3>

            </div>




{location.pathname === "/favorites" && (
    <FontAwesomeIcon
    size="lg"
    icon={faTrashAlt}
    onClick={() => deleteFavoriteChannel(channel.id, user.userid)}
    style={{cursor: 'pointer'}}
    />
    )}
          </div>
        </div>
      </div>
    </div>

        


  );
};

export default Channel;
