import React, { useEffect } from "react";
import styles from "./LatestWork.module.scss";
import NavBar from "../Comp/Navbar/Navbar";
import Footer from "../Comp/Footer";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import LatestWorkContent from "./LatestWorkPage/LatestWorkContent";
import { useScrollPercentage } from "react-scroll-percentage";

const LatestWork = (props) => {
  const [ref, percentage] = useScrollPercentage();
  useEffect(() => {
    let colorRed = (1 - percentage) * 28;
    let colorGreen = (1 - percentage) * 42;
    let colorBlue = (1 - percentage) * 63;
    document.body.style.background = `rgb(${colorRed}, ${colorGreen},${colorBlue})`;
  }, [percentage]);

  return (
    <motion.div
      ref={ref}
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.1 }}
    >
      <div>
        <NavBar />
      </div>
      <div className={styles.LatestWorkContent}>
        <motion.div
          animate={{ y: [10, -10, 0], opacity: [0, 1, 1] }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <h1 className={styles.LatestWorkTitle}>Latest Works</h1>
        </motion.div>
        <LatestWorkContent />
      </div>
      <div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default LatestWork;
