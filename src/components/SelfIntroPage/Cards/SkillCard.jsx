import React from 'react';
import { motion } from 'framer-motion';
import Colors from '../../../styles/Colors';
import ComponentWithScrollLoad from '../../../Utilities/ComponentWithScrollLoad.jsx';

const SkillCard = (props) => {
    return (
        <motion.div
            initial={{ x: -100, scale: 0 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
        >
            <div className="skillcard-container">
                <div className="skill-name">{props.skillName}</div>
                <div className="skill-info">{props.skillInfo}</div>
            </div>
            <style jsx>{`
                .skillcard-container {
                    background: ${Colors.skillCardBackgroundColor};
                    width: 80%;
                    display: grid;
                    grid-template-areas: 'name info';
                    grid-template-columns: 1fr 1fr;
                    margin: 0 auto;
                }

                .skillcard-container .skill-name {
                    grid-area: name;
                    padding: 0.75rem;
                    font-family: 'Sora', sans-serif;
                    text-align: center;
                    width: 100%;
                    color: ${Colors.lightTextColorComplimentary};
                }
                .skillcard-container .skill-info {
                    grid-area: info;
                    padding: 0.8rem;
                    text-align: center;
                    width: 100%;
                }

                @media (max-width: 800px) {
                    .skillcard-container {
                        grid-template-areas:
                            'name'
                            'info';
                        grid-template-columns: 1fr;
                    }
                    .skillcard-container .skill-info {
                        padding: 0.25rem 1rem;
                        padding-bottom: 0.75rem;
                    }
                }
            `}</style>
        </motion.div>
    );
};

export default ComponentWithScrollLoad(SkillCard);
