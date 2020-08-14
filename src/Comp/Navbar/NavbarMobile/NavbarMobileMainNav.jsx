import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItemMobile";
import styles from "./NavbarMobile.module.scss";

const variants = {
  open: {
    opacity: 1,
    height: 600,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    opacity: 0,
    height: 0,
    padding: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = (props) => (
  <motion.ul className={styles.mainUl} variants={variants}>
    {props.navContent.map((e) => (
      <MenuItem elem={e} key={e.id} />
    ))}
  </motion.ul>
);
