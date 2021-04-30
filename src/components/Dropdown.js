import styles from "./css/Navbar.module.css";

import { Link } from "react-router-dom";
import { useContext} from 'react'
import { UserContext } from "../contexts/UserProvider";

const Dropdown = ({ toggleMenu }) => {

const { logoutUser, user }  = useContext(UserContext)

    const handleClick = () => {
        logoutUser()
        toggleMenu()
    }

  return (
    <div className={styles.DropdownContainer}>
      <Link to="/" onClick={toggleMenu}> Kanaler </Link>
      <Link to="/programs" onClick={toggleMenu}> Program </Link>
      <Link to="/favorites" onClick={toggleMenu}> Favoriter </Link>
      {user ?  <Link to="/" onClick={handleClick}  > Logga ut </Link> 
            : 
      <Link to="/login" onClick={toggleMenu}> Logga in</Link>
      }
    </div>
  );
};

export default Dropdown;
