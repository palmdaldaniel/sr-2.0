import styles from "./css/Program.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserProvider";

const Program = (props) => {
  // use data to get channel info

  const { user } = useContext(UserContext);

  const { name, description, broadcastinfo } = props.data;

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    if (isFavorite) {
      setIsFavorite(false);
      return;
    }

    setIsFavorite(true);
  };

  return (
    <div className={styles.programWrapper}>
      <div className={styles.content}>
        <p> {name} </p>
        <p> {description} </p>
        <p> {broadcastinfo} </p>
      </div>

      {user && (
        <div
          className={styles.icon}
          style={{ color: isFavorite ? "green" : "black" }}
          onClick={toggleFavorite}
        >
          <FontAwesomeIcon icon={faHeart} size='3x' />
        </div>
      )}
    </div>
  );
};

export default Program;
