import React from "react";
import styles from "./LatestWork.module.scss";
import NavBar from "../Comp/Navbar/Navbar";
import Footer from "../Comp/Footer";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const LatestWork = (props) => {
  return (
    <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 0.1 }}>
      <div className={styles.HomePageHeader}>
        <NavBar />
      </div>
      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ delay: 0.5, duration: 0.5 }}
      ></motion.div>

      <div className={styles.HomePageBody}>
        <Footer />
      </div>
    </motion.div>
  );
};

export default LatestWork;
