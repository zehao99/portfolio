import React, { useState, useEffect } from "react";
import styles from "./NavbarMobile.module.scss";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import useDimensions from "../../Utilities/useWindowDimensions";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const NavbarMobile = (props) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { width, height } = useDimensions();
  const [widthNow, setWidthNow] = useState(width);

  useEffect(() => {
    setWidthNow(width);
  }, [width]);

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at right 40px top 40px )`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: `circle(30px at right 40px top 40px )`,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <h1>
          <a href="http://zehao99.github.io/">
            <img src={`${process.env.PUBLIC_URL}/img/logo-light.png`} />
          </a>
        </h1>
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
        >
          <motion.div className={styles.background} variants={sidebar} />
          <Navigation />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
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
