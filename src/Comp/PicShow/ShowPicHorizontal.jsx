import React, { useState } from "react";
import useWindowDimensions from "../../Utilities/useWindowDimensions";
import styles from "./ShowPicHorizontal.module.scss";
import PicPreview from "./PicPreview";

const ShowPicHorizontal = (props) => {
  const { height, width } = useWindowDimensions();
  const [currentPicID, setCurrentPicID] = useState(0);

  const previousPicHandler = () => {
    setCurrentPicID((id) => {
      id = id - 1 < 0 ? props.photos.length - 1 : id - 1;
      return id;
    });
  };

  const nextPicHandler = () => {
    setCurrentPicID((id) => {
      id = id + 1 >= props.photos.length ? 0 : id + 1;
      return id;
    });
  };

  return (
    <div>
      <div className={styles.ShowPicHorizontalContainer}>
        <i className="fas fa-angle-left fa-3x" onClick={previousPicHandler}></i>
        <img src={props.photos[currentPicID].url} />
        <i className="fas fa-angle-right fa-3x" onClick={nextPicHandler}></i>
      </div>
      <div className={styles.PicPreview}>
        <PicPreview photos={props.photos} idPicked={currentPicID} />
      </div>
    </div>
  );
};

export default ShowPicHorizontal;
