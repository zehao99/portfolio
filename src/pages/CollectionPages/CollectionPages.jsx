import React from 'react';
import NavBar from '../../components/Common/Navbar/Navbar';
import Footer from '../../components/Common/Footer';
import { motion } from 'framer-motion';
import styles from './CollectionPages.module.scss';
import CollectionShowHorizontal from '../../components/CollectionPages/CollectionShowHorizontal';
import CollectionShowVertical from '../../components/CollectionPages/CollectionShowVertical';
import useWindowDimensions from '../../utilities/useWindowDimensions';
import { pageVariants } from '../../utilities/AnimateParams';

const CollectionPage = (props) => {
    const { width, height } = useWindowDimensions();
    return (
        <motion.div
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}
            variants={pageVariants}
            className={styles.CollectionPage}
        >
            <div className={styles.CollectionNavbar}>
                <NavBar />
            </div>
            <motion.div
                animate={{ y: [10, -10, 0], opacity: [0, 1, 1] }}
                transition={{ delay: 0.3, duration: 0.3 }}
            >
                {width >= height ? (
                    height < 600 ? (
                        <div className={styles.HorizontalAlert}>
                            <p>
                                Please turn your phone to portrait orientation
                            </p>
                        </div>
                    ) : (
                        <CollectionShowHorizontal {...props} />
                    )
                ) : (
                    <CollectionShowVertical {...props} />
                )}
            </motion.div>
            <Footer />
        </motion.div>
    );
};

export default CollectionPage;
