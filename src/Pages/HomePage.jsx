import React from "react";
import Navbar from "../Comp/Navbar/Navbar";
import Footer from "../Comp/Footer";
import styles from "./HomePage.module.scss";
import useWindowDimensions from "../Utilities/useWindowDimensions";
import { motion } from "framer-motion";

const HomePage = (props) => {
  const { height, width } = useWindowDimensions();

  return (
    <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 0.2 }}>
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
            <p>Sense & Simplicity</p>
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
