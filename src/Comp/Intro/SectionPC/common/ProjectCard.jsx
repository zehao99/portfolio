import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './ProjectCard.module.scss';

const baseVariants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.08,
        },
    },
};

const rectTransitionVariant = {
    duration: 0.15,
    ease: 'easeInOut',
    times: [0, 0.2, 0.5, 0.8, 1],
};

const rectVariants1 = {
    hidden: {
        opacity: 0,
        x: '-8em',
        y: '-3em',
        rotate: '0deg',
    },
    visible: {
        opacity: 1,
        y: '-8em',
        rotate: '15deg',
        transition: rectTransitionVariant,
    },
};

const rectVariants2 = {
    hidden: {
        opacity: 0,
        x: '-8em',
        y: '-3em',
        rotate: '90deg',
    },
    visible: {
        opacity: 1,
        x: '-3em',
        rotate: '105deg',
        transition: rectTransitionVariant,
    },
};

const rectVariants3 = {
    hidden: {
        opacity: 0,
        x: '-8em',
        y: '-3em',
        rotate: '0',
    },
    visible: {
        opacity: 1,
        y: '2em',
        rotate: '15deg',
        transition: rectTransitionVariant,
    },
};

const rectVariants4 = {
    hidden: {
        opacity: 0,
        x: '-8em',
        y: '-3em',
        rotate: '90deg',
    },
    visible: {
        opacity: 1,
        x: '-13em',
        rotate: '105deg',
        transition: rectTransitionVariant,
    },
};

const textVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: rectTransitionVariant,
    },
};

const ProjectCard = (props) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <motion.div
            className={styles.projectCardContainer}
            onClick={props.onOpenPanel}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <img src={props.imgSrc} alt={'project'} />
            <AnimatePresence exitBeforeEnter>
                {isHover && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit={'hidden'}
                        variants={baseVariants}
                        className={styles.cardCover}
                    >
                        <motion.div
                            key="rect-1"
                            className={styles.coverRectangle}
                            variants={rectVariants1}
                        />
                        <motion.div
                            key="rect-2"
                            className={styles.coverRectangle}
                            variants={rectVariants2}
                        />
                        <motion.div
                            key="rect-3"
                            className={styles.coverRectangle}
                            variants={rectVariants3}
                        />
                        <motion.div
                            key="rect-4"
                            className={styles.coverRectangle}
                            variants={rectVariants4}
                        />
                        <motion.div
                            key="text"
                            className={styles.title}
                            variants={textVariants}
                        >
                            {props.title}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default ProjectCard;
