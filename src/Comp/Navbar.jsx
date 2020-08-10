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
          <a className={styles.btn} href="/lzh">
            About
          </a>
          <a className={styles.btn} href="https://philipli.art">
            Portfolio
          </a>
          <a className={styles.btn} href="https://calories.page">
            Calories
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
