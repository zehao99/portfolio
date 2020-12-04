import React from "react";
import styles from "./ShowPicVertical.module.scss";
import ComponentWithScrollLoad from "../../Utilities/ComponentWithScrollLoad";

const VerticalPic = (props) => {
  return (
    <div key={props.id} className={styles.VerticalPicContainer}>
      <img src={props.url + "?w=700"} alt=""/> <p>{props.description}</p>
    </div>
  );
};
export default ComponentWithScrollLoad(VerticalPic);
