import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import SuspendFinishComponent from '../../../../utilities/SuspendFinishComponent';
import Earth from './earth';

const EarthCanvas = (props) => {
    return (
        <Canvas>
            <Suspense fallback={<SuspendFinishComponent {...props} />}>
                <Earth {...props} />
            </Suspense>
        </Canvas>
    );
};

export default EarthCanvas;
