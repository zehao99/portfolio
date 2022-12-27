import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '../../components/Common/Navbar/Navbar';
import Footer from '../../components/Common/Footer';
import ShowPic from '../../components/LandscapePages/PicShow/ShowPic';
import styles from './LandscapePages.module.scss';
import useWindowDimensions from '../../utilities/hooks/useWindowDimensions.jsx';
import { pageVariants } from '../../styles/animations/PageAnimateParams.js';

const LandscapePages = (props) => {
    const { width, height } = useWindowDimensions();

    return (
        <motion.div
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}
            variants={pageVariants}
        >
            <div>
                <NavBar />
            </div>
            <motion.div
                animate={{ y: [10, -10, 0], opacity: [0, 1, 1] }}
                transition={{ delay: 0.3, duration: 0.3 }}
            >
                <h1
                    className={
                        height < width
                            ? styles.LandscapeTitleHorizontal
                            : styles.LandscapeTitle
                    }
                >
                    {props.title}
                </h1>
            </motion.div>
            <ShowPic photos={props.Photos} />
            <Footer />
        </motion.div>
    );
};

export default LandscapePages;
