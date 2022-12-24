import React from 'react';
import { motion } from 'framer-motion';
import IntroTitle from './common/IntroTitle';
import styles from './Projects.module.scss';
import ProjectCard from './common/ProjectCard';

const Projects = (props) => {
    return (
        <motion.div className={styles.projectContainer}>
            <IntroTitle title={'Projects'} />
            <motion.div className={styles.projectCardsContainer}>
                <ProjectCard
                    title={'Specialist Doctors'}
                    imgSrc={
                        'https://philipliart.files.wordpress.com/2021/12/spec-doc.jpg?h=400'
                    }
                    onOpenPanel={() => {
                        props.handleDisplayModal('specdoc');
                    }}
                />
                <ProjectCard
                    title={'Calories Search'}
                    imgSrc={
                        'https://philipliart.files.wordpress.com/2021/12/calories.png?h=400'
                    }
                    onOpenPanel={() => props.handleDisplayModal('calories')}
                />
                <ProjectCard
                    title={'Tomographic Sensor'}
                    imgSrc={
                        'https://philipliart.files.wordpress.com/2021/12/eit.jpg?h=400'
                    }
                />
            </motion.div>
        </motion.div>
    );
};

export default Projects;
