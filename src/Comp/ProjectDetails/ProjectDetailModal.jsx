import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './ProjectDetailModal.module.scss';
import Calories from './ModalContents/Calories';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SpecDoc from './ModalContents/SpecDoc';

const formKeyCompMap = {
    calories: Calories,
    specdoc: SpecDoc,
};

const ProjectDetailModal = (props) => {
    const Component = formKeyCompMap[props.formKey];

    return (
        <motion.div className={styles.modalBG} onClick={props.onClose}>
            <motion.div
                initial={{
                    scale: 0,
                    x: '-50%',
                    y: '-50%',
                    borderRadius: '50%',
                    transition: { duration: 0.3 },
                }}
                animate={{
                    scale: 1,
                    x: '-50%',
                    y: '-50%',
                    borderRadius: '30px',
                    transition: { duration: 0.3 },
                }}
                exit={{
                    scale: 0,
                    x: '-50%',
                    y: '-50%',
                    transition: { duration: 0.3 },
                }}
                onClick={(e) => e.stopPropagation()}
                className={styles.modalContainer}
            >
                <div className={styles.modalBackButtonContainer}>
                    <div className={styles.modalBackButton} onClick={props.onClose}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                        <div className={styles.modalBackText}>
                            Back to Intro
                        </div>
                    </div>
                </div>
                <div className={styles.contentContainer}>
                    <Component />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectDetailModal;
