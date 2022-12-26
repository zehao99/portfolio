import React, { useState, useEffect } from 'react';
import styles from './LandScapeLP.module.scss';
import { Suspense } from 'react';
import LoadingComp from '../../Comp/LoadingComp';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../../Comp/Navbar/Navbar';
import Footer from '../../Comp/Footer';
import { toRad } from '../../Comp/Earth/locationUtils';

const EarthCanvas = React.lazy(() => import('../../Comp/Earth'));

const positions = {
    tokyo: { lat: toRad(35.652832), lon: toRad(139.839478) },
    xinjiang: { lat: toRad(42.759166), lon: toRad(86.625833) },
    zhejiang: { lat: toRad(29.1925), lon: toRad(118.359166) },
    sanfransisco: { lat: toRad(37.6188889), lon: toRad(-122.39167) },
};

const LandScapeLP = () => {
    const [currCamLonLat, setCurrCamLonLat] = useState(positions.tokyo);
    const [isLoading, setIsLoading] = useState(true);
    const [notifyInLoadingCalled, setNotifyInLoadingCalled] = useState(false);

    const notifyLoaded = () => {
        setIsLoading(false);
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
            <div>
                <AnimatePresence mode={'wait'}>
                    <div key={'page-content'} className={styles.pageContent}>
                        {isLoading ? (
                            <LoadingComp />
                        ) : (
                            <>
                                <Navbar />
                                <div className={styles.pageContentBody}>
                                    <h1>Explore</h1>
                                    <h2>The World in My Lens</h2>
                                    <div
                                        key="xinjiang"
                                        onClick={() =>
                                            setCurrCamLonLat(positions.xinjiang)
                                        }
                                    >
                                        Xinjiang 新疆 →
                                    </div>
                                    <div
                                        key="zhejiang"
                                        onClick={() =>
                                            setCurrCamLonLat(positions.zhejiang)
                                        }
                                    >
                                        Zhejiang 浙江 →
                                    </div>
                                    <div
                                        key="japan"
                                        onClick={() =>
                                            setCurrCamLonLat(positions.tokyo)
                                        }
                                    >
                                        Japan 日本 →
                                    </div>
                                </div>
                            </>
                        )}

                        <Footer />
                    </div>

                    <div className={styles.canvasContainer}>
                        <EarthCanvas
                            currCamLonLat={currCamLonLat}
                            notifyLoaded={notifyLoaded}
                            notifyInLoading={notifyInLoading}
                        />
                    </div>
                </AnimatePresence>
            </div>
        </>
    );
};

export default LandScapeLP;
