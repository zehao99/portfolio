import React, { useEffect } from "react";
import styles from "./CollectionShowHorizontal.module.scss";
import { motion } from "framer-motion";

const CollectionShowHorizontal = (props) => {
  useEffect(() => {
    const sliding = document.getElementById("slidingWindow");
    const handleScroll = (e) => {
      let v = -e.wheelDelta / 2;
      sliding.scrollLeft += v;
    };

    sliding.addEventListener("mousewheel", (e) => handleScroll(e));

    return () =>
      sliding.removeEventListener("mousewheel", (e) => handleScroll(e));
  }, []);

  const scrollHandler = (e) => {};

  return (
    <motion.div
      id="slidingWindow"
      className={styles.ContentContainer}
      onScroll={(e) => scrollHandler(e)}
    >
      <motion.div
        className={styles.CollectionPageDescription}
        initial={{ x: -100, scale: 0 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className={styles.DescriptionPlaceholder}></div>
        <h1 className={styles.LandscapeTitle}>{props.title}</h1>
        {props.description}
      </motion.div>
      {props.Photos.map((e, idx) => {
        return (
          <motion.div
            key={e.id}
            className={styles.PhotoContainer}
            initial={{ x: -100, scale: 0 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img src={e.url} alt="" />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default CollectionShowHorizontal;
