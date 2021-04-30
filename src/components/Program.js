import styles from "./css/Program.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { useContext } from "react";
import { UserContext } from "../contexts/UserProvider";
import {useLocation} from 'react-router-dom'




const Program = (props) => {
  const { user, saveFavoriteProgram } = useContext(UserContext);
  const { name, description, broadcastinfo } = props.data;

  const location = useLocation();
  

  const saveFavorite  = (program, userid) => {

    if (location.pathname === "/favorites") {
      
      return;
    }

    let programToSave = {
      programname: program.name,
      programid: program.id,
      userid: userid
    }
    saveFavoriteProgram(programToSave)
    alert('Program sparat som favorit')

  }

  return (
    <div className={styles.programWrapper}>
      <div className={styles.content}>
        <h3> {name} </h3>
        <p> {description} </p>
        <p> {broadcastinfo} </p>
      </div>

      {user && (
        <div
          className={styles.icon}
        
          onClick={() => saveFavorite(props.data, user.userid)}
        >
          <FontAwesomeIcon icon={faHeart} size="2x" />
        </div>
      )}
    </div>
  );
};

export default Program;
