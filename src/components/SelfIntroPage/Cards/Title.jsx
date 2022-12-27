import React from 'react';
import { motion } from 'framer-motion';
import Colors from '../Colors';
import ComponentWithScrollLoad from '../../Utilities/ComponentWithScrollLoad.jsx';

const Title = (props) => {
    return (
        <motion.div
            initial={{ x: -100, scale: 0 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
        >
            <div className="title">
                <h3 className="subtitles">{props.text}</h3>
                <div className="underline"></div>
            </div>
            <style jsx>{`
                .title {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .title .subtitles {
                    text-align: center;
                    padding: 2rem;
                    padding-bottom: 0.3rem;
                    font-weight: 400;
                    font-size: 1.5rem;
                }
                .title .underline {
                    background: ${Colors.primaryColorComplimentary};
                    height: 5px;
                    width: 30px;
                    border-radius: 2.5px;
                    margin-bottom: 1rem;
                }
            `}</style>
        </motion.div>
    );
};

export default ComponentWithScrollLoad(Title);
