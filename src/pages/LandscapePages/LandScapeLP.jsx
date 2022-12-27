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
        lat: toRad(35.652832),
        lon: toRad(139.839478),
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
};

const LandScapeLP = () => {
    const [currCamLonLat, setCurrCamLonLat] = useState(positions.tokyo);
    const [isLoading, setIsLoading] = useState(true);
    const [notifyInLoadingCalled, setNotifyInLoadingCalled] = useState(false);
    const [selected, setSelected] = useState(null);

    const notifyLoaded = () => {
        setIsLoading(false);
    };

    const getSelectFunction = (key) => {
        return () => {
            setCurrCamLonLat({
                lon: positions[key].lon,
                lat: positions[key].lat,
            });
            setSelected(key);
        };
    };

    const deselectFunc = () => {
        setSelected(null);
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
                            <div className={styles.pageContentBody}>
                                <h1>Explore</h1>
                                <h2>The World with My Lens</h2>
                                {Object.keys(positions).map((key) => (
                                    <DestinationSelectButton
                                        key={`dest-button-${key}`}
                                        text={positions[key].text}
                                        onClick={getSelectFunction(key)}
                                        isSelected={key === selected}
                                        setDeselect={deselectFunc}
                                        destinationUrl={
                                            positions[key].destinationUrl
                                        }
                                    />
                                ))}
                            </div>
                            <Footer />
                        </>
                    )}
                </motion.div>
                <motion.div key={'earth-canvas-container'} className={styles.canvasContainer}>
                    <EarthCanvas
                        currCamLonLat={currCamLonLat}
                        notifyLoaded={notifyLoaded}
                        notifyInLoading={notifyInLoading}
                    />
                </motion.div>
            </AnimatePresence>
        </>
    );
};

export default LandScapeLP;
