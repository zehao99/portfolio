import React from "react";
import { motion } from "framer-motion";
import styles from "./PhotoComp.module.scss";

const imgWithClick = { cursor: "pointer" };

const Photo = ({ index, onClick, photo, margin, direction, top, left }) => {
  const imgStyle = { margin: margin };
  if (direction === "column") {
    imgStyle.position = "absolute";
    imgStyle.left = left;
    imgStyle.top = top;
  }

  const handleClick = (event) => {
    onClick(event, { photo, index });
  };

  return (
    <motion.img
      animate={{ scale: [0, 1.05, 1] }}
      className={styles.ImageGalleryPhotos}
      whileHover={{
        scale: 1.2,
        boxShadow: "black 0.8rem 1.2rem 1rem",
        zIndex: 2,
      }}
      transition={{ duration: 0.3 }}
      style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
      {...photo}
      onClick={onClick ? handleClick : null}
      alt="img"
    />
  );
};

export default Photo;
