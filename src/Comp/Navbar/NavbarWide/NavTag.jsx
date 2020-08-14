import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavTag.module.scss";
const NavTag = (props) => {
  return (
    <div className={styles.NavTag}>
      <NavLink to={props.url}>
        <p>{props.name}</p>
      </NavLink>
    </div>
  );
};

export default NavTag;
