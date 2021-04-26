import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import styles from "./css/Navbar.module.css";
import Dropdown from "./Dropdown";

import { useState, useRef, useEffect } from "react";


const Navbar = () => {
  const node = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
      return;
    }
    setIsOpen(true);
  };

  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        <Link to="/">
          <span> SR-2.0 </span>{" "}
        </Link>

        <div className={styles.dropdown} ref={node}>
          <div
            className={styles.hamburgermenu}
            onClick={toggleMenu}
            style={{ color: isOpen && "grey" }}
          >
            <FontAwesomeIcon icon={faBars} size="2x" className={styles.icon} />
          </div>
          {isOpen && (
            <Dropdown toggleMenu={toggleMenu} className={styles.dropdownMenu} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
