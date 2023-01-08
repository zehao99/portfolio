import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './PageSection.module.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

function useParallax(value, distance, offset) {
    return useTransform(value, [0, 1], [- distance + offset, distance + offset]);
}

const PageSection = (props) => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 100, 50);

    return (
        <div className={styles.wholePageWrapper}>
            <motion.div
                className={
                    props.isLeft
                        ? styles.pageSectionWrapper
                        : styles.pageSelectionWrapperRight
                }
            >
                <motion.div
                    style={{ y }}
                    className={
                        props.isLeft
                            ? styles.goldRectangle
                            : styles.goldRectangleRight
                    }
                />
                <motion.div
                    style={{ y }}
                    className={
                        props.isLeft
                            ? styles.pageSectionTitleWrapper
                            : styles.pageSectionTitleWrapperRight
                    }
                >
                    <motion.h3>{props.pageTitle}</motion.h3>
                    <Link to={props.linkTo}>
                        {props.isLeft ? 'Details →' : '→ Details'}
                    </Link>
                </motion.div>

                <div ref={ref} className={styles.imgContainer}>
                    <img src={props.pageImgUrl} alt={'collection-brief'} />
                </div>
            </motion.div>
        </div>
    );
};

export default PageSection;
