import React from "react";
import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <h1>
          <a href="http://zehao99.github.io/">
            <img src={`${process.env.PUBLIC_URL}/img/logo-light.png`} />
          </a>
        </h1>
        <div className={styles.navbarLinks}>
          <NavLink to="/collections" className={styles.btn}>
            Collections
          </NavLink>
          <NavLink to="/about" className={styles.btn}>
            Portfolio
          </NavLink>
          <NavLink to="/about" className={styles.btn}>
            About
          </NavLink>
          <a className={styles.btn} href="/lzh">
            Calories
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
