import React from "react";
import { motion } from "framer-motion";
import NavBar from "../../Comp/Navbar/Navbar";
import Footer from "../../Comp/Footer";
import ShowPic from "../../Comp/PicShow/ShowPic";
import styles from "./LandscapePages.module.scss";

const LandscapePages = (props) => {
  return (
    <motion.div>
      <div>
        <NavBar />
      </div>
      <motion.div
        animate={{ y: [10, -10, 0], opacity: [0, 1, 1] }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        <h1 className={styles.LandscapeTitle}>{props.title}</h1>
      </motion.div>
      <ShowPic photos={props.Photos} />
      <Footer />
    </motion.div>
  );
};

export default LandscapePages;
