import styles from "./css/Program.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserProvider";
import { FavoriteContext } from "../contexts/FavoriteProvider";

const Program = (props) => {
  // use data to get channel info

  const { user } = useContext(UserContext);
  const { saveFavoriteProgram } = useContext(FavoriteContext);

  const { name, description, broadcastinfo } = props.data;

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    if (isFavorite) {
      setIsFavorite(false);
      return;
    }

    setIsFavorite(true);
  };

  const saveFavorite  = (program, id) => {
    let programToSave = {
      programname: program.name,
      programid: program.id,
      userid: id
    }
    saveFavoriteProgram(programToSave)

  }

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
          onClick={() => saveFavorite(props.data, user.id)}
        >
          <FontAwesomeIcon icon={faHeart} size="3x" />
        </div>
      )}
    </div>
  );
};

export default Program;
