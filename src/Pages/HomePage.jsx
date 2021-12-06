import React, {useState} from "react";
import Navbar from "../Comp/Navbar/Navbar";
import {NavLink} from "react-router-dom";
import Footer from "../Comp/Footer";
import styles from "./HomePage.module.scss";
import {AnimatePresence, motion} from "framer-motion";

const HomePage = (props) => {
  const [isImgLoading, setIsImgLoading] = useState(true);

  return (
    <AnimatePresence exitBeforeEnter>

      {
        isImgLoading ?
          <div className={styles.loadingIcon}>
            <motion.div
              key="loading-icon"
              className={styles.loadingIconAnimator}
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                transition: {
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 0.5
                }
              }}
              exit={{
                scale: [1, 2, 5, 20, 400],
                opacity: [1, 0.8, 0.6, 0.4, 0],
                transition: {
                  duration: 0.5,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                }
              }}
            />
            <div style={{display: "none"}}>
              <img src={process.env.PUBLIC_URL + "/img/BackGround.jpg"}
                   alt={"background"} onLoad={() => setIsImgLoading(false)}/>
            </div>
          </div>
           : <motion.div key="main-comp" initial={{opacity: 0}} animate={{opacity: [0, 1]}} transition={{duration: 0.1}}>
            <div className={styles.bkImage}>
              <img src={process.env.PUBLIC_URL + "/img/BackGround.jpg"}
                   alt={"background"}/>
            </div>
          <div className={styles.HomePageHeader}>
            <Navbar/>
          </div>
          <motion.div
            animate={{opacity: [0, 1]}}
            transition={{delay: 0.5, duration: 0.5}}
          >
            <div className={styles.HomePageContent}>
              <div className={styles.HomePagePrompt}>
                <h1>Hi~&nbsp; : )</h1>
                <h2>Philip Li</h2>
                <p>Photography | Landscape | Life</p>
                <div className={styles.ButtonContainer}>
                  <NavLink className={styles.HomePageBtn} to={"/latestworks"}>
                    Latest Works
                  </NavLink>
                  <NavLink className={styles.HomePageBtn} to={"/about"}>
                    About Me
                  </NavLink>
                </div>
              </div>
            </div>
          </motion.div>

          <div className={styles.HomePageBody}>
            <Footer/>
          </div>
        </motion.div>
      }


    </AnimatePresence>

  );
};

export default HomePage;
