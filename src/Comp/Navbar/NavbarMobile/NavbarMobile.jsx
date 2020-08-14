import React, { useState, useEffect } from "react";
import styles from "./NavbarMobile.module.scss";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useCycle } from "framer-motion";
import { MenuToggle } from "./NavbarMobileToggle";
import { Navigation } from "./NavbarMobileMainNav";
import useDimensions from "../../../Utilities/useWindowDimensions";

const NavbarMobile = (props) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { width, height } = useDimensions();

  const sidebar = {
    open: (height = 1500) => ({
      clipPath: `circle(${height * 2 + 200}px at left 40px top 40px )`,
      width: "600vw",
      height: "600vh",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: `circle(30px at left 40px top 40px )`,
      overflow: "hidden",
      width: 80,
      height: 80,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const navValues = {
    open: {
      width: "100vw",
      height: "100vh",
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      transition: {
        duration: 0.1,
      },
    },
    closed: {
      width: 80,
      height: 80,
    },
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          variants={navValues}
        >
          <motion.div className={styles.background} variants={sidebar} />
          <Navigation isOpen={isOpen} navContent={props.navContent} />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
        <h1>
          <a href="/">
            <img src={`${process.env.PUBLIC_URL}/img/logo-light-light.png`} />
          </a>
        </h1>
      </div>
    </div>
  );

  //   const [isToggle, setIsToggle] = useState(false);
  //   const ToggleHandler = () => {};

  //   return (
  //     <div className={styles.navbarContainer}>
  //       <div className={styles.navbar}>
  //   <h1>
  //     <a href="http://zehao99.github.io/">
  //       <img src={`${process.env.PUBLIC_URL}/img/logo-light.png`} />
  //     </a>
  //   </h1>
  //         <button onClick={ToggleHandler}>
  //           <svg width="23" height="23" viewBox="0 0 23 23">
  //             <Path
  //               variants={{
  //                 closed: { d: "M 2 2.5 L 20 2.5" },
  //                 open: { d: "M 3 16.5 L 17 2.5" },
  //               }}
  //             />
  //             <Path
  //               d="M 2 9.423 L 20 9.423"
  //               variants={{
  //                 closed: { opacity: 1 },
  //                 open: { opacity: 0 },
  //               }}
  //               transition={{ duration: 0.1 }}
  //             />
  //             <Path
  //               variants={{
  //                 closed: { d: "M 2 16.346 L 20 16.346" },
  //                 open: { d: "M 3 2.5 L 17 16.346" },
  //               }}
  //             />
  //           </svg>
  //         </button>
  //         <div className={styles.navbarToggleIcon} onClick={ToggleHandler}>
  //           {isToggle ? (
  //             <FontAwesomeIcon icon={faTimes} size="1x" />
  //           ) : (
  //             <FontAwesomeIcon icon={faBars} size="1x" />
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   );
};
export default NavbarMobile;
