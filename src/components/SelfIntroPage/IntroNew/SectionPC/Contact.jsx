import React from 'react';
import {motion} from 'framer-motion';
import styles from './Contact.module.scss';
import IntroTitle from './common/IntroTitle';

const Contact = () => {
    return (
        <motion.div className={styles.contactInfoContainer}>
            <IntroTitle title={"Contact me"} />
            <div className={styles.contactInfoText}>
                You can contact me in English, Chinese and Japanese. <br />
                Click on the <span>footer icons ↓</span> to reach out~
            </div>
        </motion.div>
    )
}

export default Contact;