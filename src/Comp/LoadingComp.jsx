import React from 'react';
import { motion } from 'framer-motion';
import styles from './LoadingComp.module.scss';

const exitParam = {
    scale: [1, 2, 5, 20, 400],
    opacity: [1, 0.8, 0.6, 0.4, 0],
    transition: {
        duration: 0.5,
        ease: 'easeInOut',
        times: [0, 0.2, 0.5, 0.8, 1],
    },
};

const LoadingComp = () => {
    return (
        <motion.div className={styles.bkBlue} exit={exitParam}>
            <motion.div className={styles.loadingIcon} exit={exitParam}>
                <motion.div
                    key="loading-icon"
                    className={styles.loadingIconAnimator}
                    animate={{
                        scale: [1, 1, 1, 1, 1],
                        x: [0, -100, 0, 100, 0],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ['20%', '50%', '20%', '50%', '20%'],
                        transition: {
                            duration: 2,
                            ease: 'easeInOut',
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 0.5,
                        },
                    }}
                    exit={exitParam}
                />
            </motion.div>
        </motion.div>
    );
};

export default LoadingComp;
