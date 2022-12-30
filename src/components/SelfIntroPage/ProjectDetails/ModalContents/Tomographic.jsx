import styles from './Tomographic.module.scss';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import LoadingComp from '../../../Common/LoadingComp';
import { AnimatePresence } from 'framer-motion';

const Tomographic = () => {
    const [imgLoadList, setImgLoadList] = useState([false]);
    const [showComp, setShowComp] = useState(false);

    useEffect(
        () => setShowComp(imgLoadList.every((v) => v === true)),
        [imgLoadList]
    );

    const handleLoadingDone = (idx) =>
        setImgLoadList((prevState) => {
            const newState = [...prevState];
            newState[idx] = true;
            return newState;
        });

    return (
        <AnimatePresence mode={'wait'}>
            {!showComp && <LoadingComp />}
            <div
                key={'tomographic-content'}
                className={showComp ? styles.container : styles.noShow}
            >
                <div className={styles.title}>Tomographic Proximity Sensor</div>
                <div className={styles.periodContainer}>
                    <div className={styles.period}>
                        PERIOD <span>2019.10 - 2021.10</span>
                    </div>
                    <div className={styles.period}>Master Thesis Project</div>
                </div>
                <div className={styles.subTitle}>Overview</div>
                <div className={styles.contentText}>
                    The project proposes a proximity imaging sensor based on a{' '}
                    <span>tomographic approach</span> with a low-cost conductive
                    sheet. Particularly, by defining capacitance density,
                    physical proximity information is transformed into electric
                    potential.{' '}
                    <span>
                        A novel theoretical model is developed to solve the
                        capacitance density problem using the tomographic
                        approach.
                    </span>{' '}
                    Additionally, a prototype is built and tested based on the
                    model, and the system solves an inverse problem for imaging
                    the capacitance density change that indicates the object’s
                    proximity change. In the evaluation test, the prototype
                    reaches an error rate of 10.0–15.8% in horizontal
                    localization at different heights. Finally, a{' '}
                    <span>hand-tracking demonstration</span> is carried out,
                    where a position difference of 33.8–46.7 mm between the
                    proposed sensor and depth camera is achieved at 30 fps.
                </div>
                <div className={styles.subTitle}>Demo Video</div>
                <div className={styles.videoWrapper}>
                    <iframe
                        src="https://www.youtube.com/embed/HeRysKZ0BH8"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        onLoad={() => handleLoadingDone(0)}
                    ></iframe>
                </div>
                <div className={styles.footer}>
                    <div className={styles.footerLine}>
                        * The Followings are the publications regarding this
                        project.
                    </div>
                    <div className={styles.footerLine}>
                        Tomographic Proximity Imaging Using Conductive Sheet for
                        Object Tracking
                        <a href="https://doi.org/10.3390/s21082736">
                            <FontAwesomeIcon
                                className="social-media-icon"
                                icon={faLink}
                            />
                        </a>
                    </div>
                    <div className={styles.footerLine}>
                        Tomographic Approach for Proximity Imaging using
                        Conductive Sheet
                        <a href="https://doi.org/10.1109/IECON43393.2020.9254590">
                            <FontAwesomeIcon
                                className="social-media-icon"
                                icon={faLink}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </AnimatePresence>
    );
};

export default Tomographic;
