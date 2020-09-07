import React from "react";
import NavBar from "../../Comp/Navbar/Navbar";
import Footer from "../../Comp/Footer";
import { motion } from "framer-motion";
import styles from "./CollectionPages.module.scss";
import CollectionShowHorizontal from "../../Comp/CollectionShow/CollectionShowHorizontal";
import CollectionShowVertical from "../../Comp/CollectionShow/CollectionShowVertical";
import useWindowDimensions from "../../Utilities/useWindowDimensions";

const CollectionPage = (props) => {
  const { width, height } = useWindowDimensions();
  return (
    <motion.div className={styles.CollectionPage}>
      <div className={styles.CollectionNavbar}>
        <NavBar />
      </div>
      <motion.div
        animate={{ y: [10, -10, 0], opacity: [0, 1, 1] }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        {width >= height ? (
          <CollectionShowHorizontal {...props} />
        ) : (
          <CollectionShowVertical {...props} />
        )}
      </motion.div>
      <Footer />
    </motion.div>
  );
};

export default CollectionPage;
