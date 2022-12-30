import React from 'react';
import { motion } from 'framer-motion';

import styled from 'styled-components';
import Colors from '../../styles/Colors.js';

const FullScreenBackGroundContainer = styled(motion.div)`
    background: ${(props) => props.color};
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 500;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LoadingIconAnimator = styled(motion.div)`
    background: ${Colors.homePageLightTextColor};
    border-radius: 30px;
    width: 50px;
    height: 50px;
    transform: translateY(-70px);
`;

const LoadingComp = ({ delay, backgroundColor }) => {
    const exitParam = {
        scale: [1, 2, 5, 20, 400],
        opacity: [1, 0.8, 0.6, 0.4, 0],
        transition: {
            delay: delay ?? 0,
            duration: 0.5,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
        },
    };

    return (
        <FullScreenBackGroundContainer
            color={backgroundColor ?? Colors.skillCardBackgroundColor}
        >
            <motion.div exit={exitParam}>
                <LoadingIconAnimator
                    key="loading-icon"
                    animate={{
                        scale: [1, 1, 1, 1, 1],
                        x: [0, -100, 0, 100, 0],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ['20%', '50%', '20%', '50%', '20%'],
                        transition: {
                            duration: 2,
                            ease: 'easeInOut',
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 0.5,
                        },
                    }}
                    exit={exitParam}
                />
            </motion.div>
        </FullScreenBackGroundContainer>
    );
};

export default LoadingComp;
