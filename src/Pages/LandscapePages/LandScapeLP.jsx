import React from 'react';
import styles from './LandScapeLP.module.scss';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import LoadingComp from '../../Comp/LoadingComp';
import { AnimatePresence } from 'framer-motion';
const Earth = React.lazy(() => import('../../Comp/Earth/earth'));

const LandScapeLP = (props) => {
    return (
        <>
            <div className={styles.canvasContainer}>
                <AnimatePresence mode={'wait'}>
                    <Suspense fallback={<LoadingComp />}>
                        {/* <LoadingComp /> */}
                        <Canvas>
                            <Earth />
                        </Canvas>
                    </Suspense>
                </AnimatePresence>
            </div>
        </>
    );
};

export default LandScapeLP;
