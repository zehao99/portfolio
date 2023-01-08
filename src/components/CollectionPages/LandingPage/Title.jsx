import React from 'react';
import styles from './Titles.module.scss';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Title = () => {
    return (
        <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition = {{duration: 2}}
                    className={styles.wholePageContainer}>
            <div className={styles.TitleWrapper}>
                <div className={styles.Title}>
                    <h1>Collections</h1>
                    <p>It is what happens around us that matters.</p>
                </div>
                <div className={styles.GreyRectangle}></div>
            </div>
            <motion.div className={styles.iconContainer} animate={{
                y: [0, 20, 0],
                transition: {
                    duration: 1,
                    ease: 'easeInOut',
                    times: [0, 0.5, 1],
                    repeat: Infinity,
                },
            }}>
                <p>
                    Scroll Down
                </p>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    size='2x'
                />
            </motion.div>
        </motion.div>

    );
};

export default Title;
