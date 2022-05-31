import React from 'react';
import { motion } from 'framer-motion';
import styles from './CollectionShowVertical.module.scss';
import ImgLoadingComp from '../LoadingComp/ImgLoadingComp';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delay: 0.3,
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { x: -100, opacity: 0 },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            ease: 'anticipate',
            duration: 0.2,
        },
    },
};

const CollectionShowVertical = (props) => {
    return (
        <motion.div id="slidingWindow" className={styles.ContentContainer}>
            <motion.div className={styles.CollectionPageDescription}>
                <div className={styles.DescriptionPlaceholder} />
                <h1 className={styles.LandscapeTitle}>{props.title}</h1>
                {props.description}
            </motion.div>
            {props.Photos.map((e, idx) => {
                return (
                    <motion.div
                        key={e.id}
                        className={styles.PhotoContainer}
                        variants={item}
                    >
                        {e.url && e.url.length > 0 && (
                            <ImgLoadingComp url={e.url} alt="" dark={true} />
                        )}
                        {e.stories == null ? null : <p>{e.stories}</p>}
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

export default CollectionShowVertical;
