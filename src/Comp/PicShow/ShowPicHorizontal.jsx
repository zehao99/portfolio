import React, { useState } from "react";
import useWindowDimensions from "../../Utilities/useWindowDimensions";
import styles from "./ShowPicHorizontal.module.scss";
import PicPreview from "./PicPreview";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};
const ShowPicHorizontal = (props) => {
  const { height, width } = useWindowDimensions();
  const [[currentPicID, direction], setCurrentPicID] = useState([0, 0]);
  const previousPicHandler = () => {
    setCurrentPicID(([id, direction]) => {
      id = id - 1 < 0 ? props.photos.length - 1 : id - 1;
      return [id, -1];
    });
  };

  const nextPicHandler = () => {
    setCurrentPicID(([id, direction]) => {
      id = id + 1 >= props.photos.length ? 0 : id + 1;
      return [id, +1];
    });
  };

  return (
    <div>
      <div className={styles.ShowPicHorizontalContainer}>
        <i className="fas fa-angle-left fa-3x" onClick={previousPicHandler}></i>
        <div className={styles.PhotoContainer}>
          <div className={styles.ImgContainer}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={currentPicID}
                src={props.photos[currentPicID].url}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 200 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    previousPicHandler();
                  } else if (swipe > swipeConfidenceThreshold) {
                    nextPicHandler();
                  }
                }}
              />
            </AnimatePresence>
          </div>

          {/* <div className={styles.ImgContainer}>
            <img src={props.photos[currentPicID].url} />
          </div> */}
          <p>{props.photos[currentPicID].description}</p>
        </div>
        <i className="fas fa-angle-right fa-3x" onClick={nextPicHandler}></i>
      </div>
      <div className={styles.PicPreview}>
        <PicPreview photos={props.photos} idPicked={currentPicID} />
      </div>
    </div>
  );
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default ShowPicHorizontal;
