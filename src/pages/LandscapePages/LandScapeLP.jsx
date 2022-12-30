import React, { useEffect, useState } from 'react';
import styles from './LandScapeLP.module.scss';
import LoadingComp from '../../components/Common/LoadingComp';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../../components/Common/Navbar/Navbar';
import Footer from '../../components/Common/Footer';
import DestinationSelectButton from '../../components/LandscapePages/LandingPage/DestinationSelectButton';
import { toRad } from '../../utilities/calculations.js';

const EarthCanvas = React.lazy(() =>
    import('../../components/LandscapePages/LandingPage/EarthCanvas'),
);

const positions = {
    tokyo: {
        lat: toRad(-35.652832),
        lon: toRad(-139.839478),
        text: 'Japan 日本',
        destinationUrl: '/landscape/japan',
    },
    xinjiang: {
        lat: toRad(42.759166),
        lon: toRad(86.625833),
        text: 'Xinjiang 新疆',
        destinationUrl: '/landscape/xinjiang',
    },
    zhejiang: {
        lat: toRad(29.1925),
        lon: toRad(118.359166),
        text: 'Zhejiang 浙江',
        destinationUrl: '/landscape/zhejiang',
    },
    shanghai: {
        lat: toRad(31.231706),
        lon: toRad(121.472644),
    },
};

const MAX_CAMERA_HEIGHT = 2.5;

const MIN_CAMERA_HEIGHT = 1.75;

const animationStatusParam = {
    hidden: { opacity: 0, x: -200 },
    show: { opacity: 1, x: 0 },
};


const initCameraPos = { ...positions.shanghai, height: MAX_CAMERA_HEIGHT, lookAtRadius: 0 };

const LandScapeLP = () => {
    const [currCamPos, setCurrCamPos] = useState(initCameraPos);
    const [isInit, setIsInit] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [notifyInLoadingCalled, setNotifyInLoadingCalled] = useState(false);
    const [selected, setSelected] = useState(null);

    const notifyLoaded = () => {
        setIsLoading(false);
    };

    const getSelectFunction = (key) => {
        return () => {
            setCurrCamPos({
                lon: positions[key].lon,
                lat: positions[key].lat,
                height: MIN_CAMERA_HEIGHT,
                lookAtRadius: 0.75,
            });
            setIsInit(false);
            setSelected(key);
        };
    };

    const deselectFunc = () => {
        setSelected(null);
        setCurrCamPos({ ...initCameraPos });
        setIsInit(true);
    };

    const notifyInLoading = () => {
        setNotifyInLoadingCalled(true);
        setIsLoading(true);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!notifyInLoadingCalled) {
                setIsLoading(false);
            }
        }, 500);

        return () => {
            clearTimeout(timeout);
        };
    });

    return (
        <>
            <AnimatePresence mode={'wait'}>
                <motion.div key={'page-content'} className={styles.pageContent}>
                    {isLoading ? (
                        <LoadingComp delay={0.6} />
                    ) : (
                        <>
                            <Navbar />
                            <motion.div
                                className={styles.pageContentBody}
                                transition={{
                                    when: 'beforeChildren',
                                    delayChildren: 0.3,
                                    staggerChildren: 0.08,
                                }}
                                initial='hidden'
                                animate='show'>
                                <motion.h1 variants={animationStatusParam}>Explore</motion.h1>
                                <motion.h2 variants={animationStatusParam}>The World with My Lens</motion.h2>
                                {Object.keys(positions).map((key) => (
                                    positions[key].text && <DestinationSelectButton
                                        key={`dest-button-${key}`}
                                        text={positions[key].text}
                                        onClick={getSelectFunction(key)}
                                        isSelected={key === selected}
                                        setDeselect={deselectFunc}
                                        destinationUrl={
                                            positions[key].destinationUrl
                                        }
                                        animationVariants={animationStatusParam}
                                    />
                                ))}
                            </motion.div>
                            <Footer />
                        </>
                    )}
                </motion.div>
                <motion.div key={'earth-canvas-container'} className={styles.canvasContainer}>
                    <EarthCanvas
                        notifyLoaded={notifyLoaded}
                        notifyInLoading={notifyInLoading}
                        isInit={isInit}
                        currCamPos={currCamPos}
                    />
                </motion.div>
            </AnimatePresence>
        </>
    );
};

export default LandScapeLP;
