import React from 'react';
import { motion } from 'framer-motion';
import styles from './Overview.module.scss';

const Overview = (props) => {
    return (
        <motion.div transition={{mode: "beforeChildren", staggerChildren: 1, delayChildren: 1}}>
            <motion.div className={styles.mainContainer}>
                <div className={styles.textContainer}>
                    <div className={styles.titleContainer}>
                        <p className={styles.caption}>Hi ~ 😄, This is</p>
                        <h1>Zehao Li</h1>
                    </div>
                    <div className={styles.detailContainer}>
                        <div className={styles.details}>
                            I’m a software engineer currently working at Rakuten
                            Group, based in Tokyo, Japan. Photography is my
                            hobby, hope you enjoy my works.
                        </div>
                    </div>
                </div>
                <motion.div
                    className={styles.imgContainer}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <img
                        src="https://philipliart.files.wordpress.com/2022/03/memoji_zehao.png"
                        alt="Memoji"
                    />
                </motion.div>
                <div className={styles.backgroundRect} />
            </motion.div>
            <motion.div
                className={styles.floatingSquare}
                initial={{x: '10em', y: '-7em', opacity: 0}}
                animate={{ x: '30em', y: '-9em', opacity: 1 }}
            />
            <motion.div
                className={styles.floatingSquare}
                animate={{ x: '60em', y: '-28em' }}
            />
        </motion.div>
    );
};

export default Overview;
