import styles from "./css/Navbar.module.css";

import { Link } from "react-router-dom";

const Dropdown = ({ toggleMenu }) => {
  return (
    <div className={styles.DropdownContainer} >
      <Link to="/" onClick={toggleMenu}> Hem </Link>
      <Link to="/programs" onClick={toggleMenu}> Program </Link>
      <Link to="/login" onClick={toggleMenu}> Logga in </Link>
    </div>
  );
};

export default Dropdown;
