import { Canvas } from '@react-three/fiber';
import Earth from './earth';

const EarthCanvas = (props) => {
    return (
        <Canvas>
            <Earth {...props} />
        </Canvas>
    );
};

export default EarthCanvas;
