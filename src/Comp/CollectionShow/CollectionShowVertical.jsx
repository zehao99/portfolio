import React from "react";
import { motion } from "framer-motion";
import styles from "./CollectionShowVertical.module.scss";

const CollectionShowVertical = (props) => {
  return (
    <motion.div id="slidingWindow" className={styles.ContentContainer}>
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

export default CollectionShowVertical;
