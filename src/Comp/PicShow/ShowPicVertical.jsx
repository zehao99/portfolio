import React from "react";
import styles from "./ShowPicVertical.module.scss";
import VerticalPic from "./VerticalPic";

const ShowPicVertical = (props) => {
  return (
    <div className={styles.VerticalContainer}>
      {props.photos.map((e) => (
        <VerticalPic key={e.id} {...e} />
      ))}
    </div>
  );
};

export default ShowPicVertical;
