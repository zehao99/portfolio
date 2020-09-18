import React from "react";
import styles from "./NavbarMobile.module.scss";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useCycle } from "framer-motion";
import { MenuToggle } from "./NavbarMobileToggle";
import { Navigation } from "./NavbarMobileMainNav";
import useDimensions from "../../../Utilities/useWindowDimensions";

const NavbarMobile = (props) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
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
          <NavLink to="/">
            <img
              alt=""
              src={`${process.env.PUBLIC_URL}/img/logo-light-light.png`}
            />
          </NavLink>
        </h1>
      </div>
    </div>
  );
};
export default NavbarMobile;
