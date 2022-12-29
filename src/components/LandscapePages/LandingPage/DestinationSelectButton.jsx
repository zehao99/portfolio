import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './DestinationSelectButton.module.scss';
import Color from '../../../styles/Colors';

const DestinationSelectButton = ({
                                     text,
                                     destinationUrl,
                                     onClick,
                                     setDeselect,
                                     isSelected,
                                     animationVariants,
                                 }) => {
    return (
        <motion.div variants={animationVariants} className={styles.buttonContainer}>
            <AnimatePresence mode='wait' />
            {!isSelected && (
                <motion.div
                    className={styles.buttonTextContainer}
                    onClick={() => onClick()}
                    initial={{
                        x: -200,
                        opacity: 0,
                        background: 'rgba(0,0,0,0)',
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        color: Color.logoColor,
                        background: 'rgba(0,0,0,0)',
                    }}
                    whileHover={{
                        x: 5,
                        background: Color.btnHoverBackgroundColor,
                        color: Color.darkTextColor,
                        transition: { duration: 0.5 },
                    }}
                    exit={{
                        x: 200,
                        opacity: 0,
                        color: Color.darkTextColor,
                        background: Color.logoColor,
                        transition: {
                            duration: 1.0
                        }
                    }}
                >
                    {text} →
                </motion.div>
            )}
            {isSelected && (
                <motion.div
                    className={styles.buttonTextContainer}
                    initial={{
                        x: -200,
                        opacity: 0,
                        background: Color.btnHoverBackgroundColor,
                        color: Color.darkTextColor,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        background: Color.btnHoverBackgroundColor,
                        color: Color.darkTextColor,
                    }}
                    whileHover={{
                        x: 5,
                        background: Color.btnHoverBackgroundColor,
                        color: Color.darkTextColor,
                        transition: { duration: 0.5 },
                    }}
                    exit={{
                        x: 200,
                        opacity: 0,
                        color: Color.darkTextColor,
                        background: Color.logoColor,
                    }}
                >
                    <NavLink to={destinationUrl}>Visit Page</NavLink>
                    <div className={styles.closeIcon}>
                        <FontAwesomeIcon
                            icon={faXmark}
                            onClick={() => setDeselect()}
                        />
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
};

export default DestinationSelectButton;
