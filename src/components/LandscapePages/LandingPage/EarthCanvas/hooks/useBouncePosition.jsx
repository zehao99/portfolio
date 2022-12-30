import { useState } from 'react';
import { useFrame } from '@react-three/fiber';


const useBouncePosition = ({close, far, cycleFrames}) => {
    const [currPos, setCurrPos] = useState(close);
    const [bounceTarget, setBounceTarget] = useState(far);
    const [framesLeft, setFramesLeft] = useState(cycleFrames);

    const toggleBounceTarget = () => {
        setBounceTarget((prev) => {
            if (prev === close) {
                return far;
            } else {
                return close;
            }
        });
        setFramesLeft(cycleFrames);
    }

    useFrame(() => {
        const diff = bounceTarget - currPos;
        setFramesLeft(prev => prev - 1);
        if(framesLeft === 1) {
            toggleBounceTarget();
        }
        setCurrPos(prev => prev + (diff / framesLeft));
    })

    return currPos;
}

export default useBouncePosition;