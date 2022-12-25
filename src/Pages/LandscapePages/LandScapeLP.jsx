import React from 'react';
import styles from './LandScapeLP.module.scss';
import { Suspense } from 'react';
import LoadingComp from '../../Comp/LoadingComp';
import { AnimatePresence } from 'framer-motion';
const EarthCanvas = React.lazy(() => import('../../Comp/Earth'));

const LandScapeLP = () => {
    return (
        <>
            <div className={styles.canvasContainer}>
                <AnimatePresence mode={'wait'}>
                    <Suspense fallback={<LoadingComp />}>
                        {/* <LoadingComp /> */}
                        <EarthCanvas />
                    </Suspense>
                </AnimatePresence>
            </div>
        </>
    );
};

export default LandScapeLP;
