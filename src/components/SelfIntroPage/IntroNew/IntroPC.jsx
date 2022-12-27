import React from 'react';
import Overview from './SectionPC/Overview';
import { motion } from 'framer-motion';
import styles from './IntroPC.module.scss';
import SkillDetail from './SectionPC/SkillDetail';
import Projects from './SectionPC/Projects';
import Contact from './SectionPC/Contact';

const IntroPC = (props) => {
    return (
        <motion.div className={styles.pageContainer}>
            <Overview />
            <SkillDetail />
            <Projects handleDisplayModal={props.handleDisplayModal} />
            <Contact />
        </motion.div>
    );
};

export default IntroPC;
