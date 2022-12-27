import React, { useEffect, useState } from 'react';
import Navbar from '../components/Common/Navbar/Navbar';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Common/Footer';
import styles from './HomePage.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { pageVariants } from '../styles/animations/PageAnimateParams.js';
import AnimatedCharacters from '../components/Common/AnnimatedText';
import LoadingComp from '../components/Common/LoadingComp.jsx';
import Colors from '../styles/Colors.js';


const rectParentParam = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.3,
        },
    },
};

const getGatherAnimationParams = (patternIdx, transitionOptions) => {
    let moveLength = 100;
    let direction = [
        [0, -1],
        [1, 0],
        [0, 1],
        [-1, 0],
    ];
    return {
        hidden: {
            x: direction[patternIdx][0] * moveLength,
            y: direction[patternIdx][1] * moveLength,
            opacity: 0,
        },
        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
                ...transitionOptions,
            },
        },
    };
};

const IMG_01_URL =
    'https://philipliart.files.wordpress.com/2022/02/lp_img01.png?h=330';
const IMG_02_URL =
    'https://philipliart.files.wordpress.com/2022/02/lp_img02.png?h=330';

const HomePage = (props) => {
    const [isImg01Loading, setIsImg01Loading] = useState(true);
    const [isImg02Loading, setIsImg02Loading] = useState(true);

    useEffect(() => {
        const img01 = new Image();
        img01.onload = () => setIsImg01Loading(false);
        img01.src = IMG_01_URL;
        const img02 = new Image();
        img02.onload = () => setIsImg02Loading(false);
        img02.src = IMG_02_URL;
    });

    return (
        <motion.div
            className={styles.HomePage}
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}
            variants={pageVariants}
        >
            <AnimatePresence mode={'wait'}>
                {isImg01Loading || isImg02Loading ? (
                    <LoadingComp delay={0.6} backgroundColor={Colors.white} />
                ) : (
                    <motion.div key="main-comp">
                        <div className={styles.HomePageHeader}>
                            <Navbar />
                        </div>
                        <motion.div>
                            <motion.div className={styles.HomePageContent}>
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={rectParentParam}
                                    className={styles.HomePageImages}
                                >
                                    <motion.div
                                        key={'home-page-rect'}
                                        variants={getGatherAnimationParams(0)}
                                        className={styles.HomePageRect}
                                    />
                                    <motion.img
                                        key={'home-page-img01'}
                                        variants={getGatherAnimationParams(1)}
                                        className={styles.HomePageImg01}
                                        src={IMG_01_URL}
                                        alt="lp-img-01"
                                    />
                                    <motion.img
                                        key={'home-page-img02'}
                                        variants={getGatherAnimationParams(2)}
                                        className={styles.HomePageImg02}
                                        src={IMG_02_URL}
                                        alt="lp-img-02"
                                    />
                                    <motion.div
                                        key={'home-page-prompt'}
                                        variants={getGatherAnimationParams(3, {
                                            duration: 0.1,
                                            when: 'beforeChildren',
                                            staggerChildren: 0.03,
                                        })}
                                        className={styles.HomePagePrompt}
                                    >
                                        <AnimatedCharacters
                                            type={'heading1'}
                                            text={'Hi~ : )'}
                                        />
                                        <AnimatedCharacters
                                            type={'paragraph'}
                                            text={"I'm Philip"}
                                        />
                                        <AnimatedCharacters
                                            type={'paragraph'}
                                            text={
                                                'A Software Engineer | Photographer'
                                            }
                                        />
                                        <motion.div
                                            variants={getGatherAnimationParams(
                                                3,
                                                {
                                                    delay: 1.8,
                                                }
                                            )}
                                            className={styles.ButtonContainer}
                                        >
                                            <NavLink
                                                className={styles.HomePageBtn}
                                                to={'/landscape'}
                                            >
                                                Landscape
                                            </NavLink>
                                            <NavLink
                                                className={styles.HomePageBtn}
                                                to={'/collections'}
                                            >
                                                Collections
                                            </NavLink>
                                            <NavLink
                                                className={styles.HomePageBtn}
                                                to={'/about'}
                                            >
                                                About Me
                                            </NavLink>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                                <div className={styles.HomePageBody}>
                                    <Footer />
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default HomePage;
