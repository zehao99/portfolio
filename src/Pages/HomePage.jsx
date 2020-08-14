import React from "react";
import Navbar from "../Comp/Navbar/Navbar";
import { NavLink } from "react-router-dom";
import Footer from "../Comp/Footer";
import styles from "./HomePage.module.scss";
import useWindowDimensions from "../Utilities/useWindowDimensions";
import { motion } from "framer-motion";

const HomePage = (props) => {
  const { height, width } = useWindowDimensions();

  return (
    <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 0.1 }}>
      <div className={styles.bkImage}></div>
      <div className={styles.bkImageBefore}></div>
      <div className={styles.HomePageHeader}>
        <Navbar />
      </div>
      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className={styles.HomePageContent}>
          <div className={styles.HomePagePrompt}>
            <h1>Hey~ Welcome!</h1>
            <h2>Philip Li</h2>
            <p>Photography | Landscape | Life</p>
            <NavLink className={styles.HomePageBtn} to={"/latestworks"}>
              Latest Works
            </NavLink>
          </div>
        </div>
      </motion.div>

      <div className={styles.HomePageBody}>
        <Footer />
      </div>
    </motion.div>
  );
};

export default HomePage;
