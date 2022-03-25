import React from 'react';
import { ReactComponent as WaveFrameTop } from '../../../img/waveFrameTop.svg';
import { ReactComponent as WaveFrameBottom } from '../../../img/waveFrameBottom.svg';
import styles from './SkillDetail.module.scss';
import IntroTitle from './common/IntroTitle';
import awsBadge from '../../../img/aws-badge.png';
import gcpLogo from '../../../img/gcp-logo.png';
import { motion } from 'framer-motion';

const SkillDetail = () => {
    return (
        <div className={styles.mainContainer}>
            <div
                className={styles.background}
                style={{
                    backgroundImage: `url(${
                        process.env.PUBLIC_URL + '/infoBkg.svg'
                    })`,
                }}
            >
                <div className={styles.skillAndExperienceContainer}>
                    <IntroTitle title={'Skill & Experiences'} />
                    <div className={styles.skillContent}>
                        I received my master degree at{' '}
                        <span>the University of Tokyo</span>. Now I’m working in{' '}
                        <span>Rakuten Travel</span>, mainly on server side, with
                        Java and Spring. Previously, I worked as a full-stack
                        engineer for <span>Reasonwhy Inc</span>. I like
                        designing and implementing user interfaces. So I’m
                        building websites during spare time.
                    </div>
                    <motion.div
                        className={styles.floatingSquare}
                        animate={{ x: '14em', y: '19em' }}
                    />
                </div>
                <div className={styles.toolsContainer}>
                    <div className={styles.toolsSection}>
                        <h2>Languages</h2>
                        <p>TypeScript, Java, Python, C++</p>
                    </div>
                    <div className={styles.toolsSection}>
                        <h2>Frameworks & Tools</h2>
                        <p>
                            Spring Boot, React.js, Next.js, Node.js <br />
                            PostgreSQL/MySQL, MongoDB
                        </p>
                    </div>
                    <div className={styles.toolsSection}>
                        <h2>CI/CD & Infra</h2>
                        <p>Terraform, CircleCI, Kubernetes, Istio, Spinnaker</p>
                    </div>
                    <div className={styles.toolsSection}>
                        <h2>Design & Creative</h2>
                        <p>PhotoShop, Figma, Premiere Pro</p>
                    </div>
                    <div className={styles.toolsSection}>
                        <h2>Cloud</h2>
                        <p className={styles.badgeContainer}>
                            <img src={awsBadge} alt={'AWS SAA Badge'} />{' '}
                            <img src={gcpLogo} alt={'GCP logo'} />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillDetail;
