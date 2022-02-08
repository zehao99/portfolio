import React, { useEffect } from 'react';
import styles from './CollectionShowHorizontal.module.scss';
import { motion } from 'framer-motion';
import ImgLoadingComp from '../LoadingComp/ImgLoadingComp';

const CollectionShowHorizontal = (props) => {
    useEffect(() => {
        const sliding = document.getElementById('slidingWindow');
        const handleScroll = (e) => {
            e.preventDefault();
            let v = -e.wheelDelta;
            sliding.scrollLeft += v;
        };

        sliding.addEventListener('mousewheel', (e) => handleScroll(e));

        return () =>
            sliding.removeEventListener('mousewheel', (e) => handleScroll(e));
    }, []);

    const scrollHandler = (e) => {};

    return (
        <motion.div
            id="slidingWindow"
            className={styles.ContentContainer}
            onScroll={(e) => scrollHandler(e)}
        >
            <motion.div
                className={styles.CollectionPageDescription}
                initial={{ x: -100, scale: 0 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 0.4 }}
            >
                <div className={styles.DescriptionPlaceholder}></div>
                <h1 className={styles.LandscapeTitle}>{props.title}</h1>
                {props.description}
            </motion.div>
            {props.Photos.map((e, idx) => {
                return e.stories !== null && e.stories !== undefined ? (
                    <motion.div
                        key={e.id}
                        className={styles.storiesContainer}
                        initial={{ x: -100, scale: 0 }}
                        animate={{ x: 0, scale: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className={styles.storiesPlaceHolder}></div>
                        <div className={styles.storiesText}>
                            <p>{e.stories}</p>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key={e.id}
                        className={styles.PhotoContainer}
                        initial={{ x: -100, scale: 0 }}
                        animate={{ x: 0, scale: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className={styles.picContainer}>
                            <ImgLoadingComp
                                url={e.url}
                                alt=""
                                height="300px"
                                width="500px"
                                dark={true}
                            />
                        </div>
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

export default CollectionShowHorizontal;
