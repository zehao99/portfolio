import React from 'react';
import Colors from '../../../styles/Colors';
import { motion } from 'framer-motion';
import ComponentWithScrollLoad from '../../../Utilities/ComponentWithScrollLoad.jsx';

const EduCard = (props) => {
    return (
        <motion.div
            initial={{ x: -500, scale: 0 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
        >
            <div className="educard-container">
                <h4>{props.major}</h4>
                <h5>
                    {props.time} <span className="interval"> | </span>
                    {props.school}
                </h5>
                <p className="location">{props.location}</p>
                <p>
                    <a
                        href={props.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {props.info}
                    </a>
                </p>
            </div>
            <style jsx>{`
                .educard-container {
                    position: relative;
                    background: #44546c;
                    padding: 1rem;
                    margin: 1rem auto;
                    max-width: 500px;
                    border-left: 5px solid ${Colors.primaryColorComplimentary};
                    border-radius: 3px;
                    box-shadow: 3px 3px 5px rgba(1, 1, 1, 0.3);
                }

                .educard-container::after {
                    content: '';
                    width: 10px;
                    height: 10px;
                    position: absolute;
                    top: 10px;
                    left: -12.4px;
                    background: ${Colors.primaryColor};
                    border: 5px solid ${Colors.primaryColorComplimentary};
                    border-radius: 50%;
                }

                .educard-container h4 {
                    color: ${Colors.lightTextColor};
                    margin: 0.5rem auto;
                    font-size: 1.2rem;
                }
                .educard-container h5 {
                    color: ${Colors.logoColor};
                    font-size: 1.2rem;
                    margin: 0.5rem auto;
                }
                .educard-container h5 span {
                    color: ${Colors.darkTextColor};
                    font-size: 1.2rem;
                }
                .educard-container .location {
                    font-style: italic;
                }
                .educard-container p {
                    color: ${Colors.lightTextColor};
                    margin: 0.5rem auto;
                }
                .educard-container a {
                    text-decoration: none;
                    color: ${Colors.lightTextColor};
                }
            `}</style>
        </motion.div>
    );
};
export default ComponentWithScrollLoad(EduCard);
