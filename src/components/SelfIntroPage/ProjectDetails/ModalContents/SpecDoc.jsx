import React, { useEffect, useState } from 'react';
import styles from './SpecDoc.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import LoadingComp from '../../../Common/LoadingComp';
import { AnimatePresence } from 'framer-motion';

const SpecDoc = () => {
    const [imgLoadList, setImgLoadList] = useState([false, false]);
    const [showComp, setShowComp] = useState(false);

    useEffect(
        () => setShowComp(imgLoadList.every((v) => v === true)),
        [imgLoadList]
    );

    const handleLoadingDone = (idx) =>
        setImgLoadList((prevState) => {
            const newState = [...prevState];
            newState[idx] = true;
            return newState;
        });

    return (
        <AnimatePresence mode={"wait"}>
            {!showComp && <LoadingComp />}
            <div key={"specdoc-content"} className={showComp ? styles.container : styles.noShow}>
                <div className={styles.title}>Specialist Doctors</div>
                <div className={styles.periodContainer}>
                    <div className={styles.period}>
                        PERIOD <span>2021.6 - 2021.12</span>
                    </div>
                    <div className={styles.period}>
                        ROLE <span>Core Full Stack Engineer</span>
                    </div>
                </div>
                <div className={styles.imgContainerWrapper}>
                    <div className={styles.imgContainer}>
                        <div className={styles.normalPic}>
                            <img
                                src={
                                    'https://philipliart.files.wordpress.com/2022/01/specdocmanagementlogin.png?w=600'
                                }
                                alt={'spec-doc-login'}
                                onLoad={() => handleLoadingDone(0)}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.additionalInfo}>
                    <div className={styles.footerLine}>
                        <span>Landing page of management system.</span>
                    </div>
                </div>
                <div className={styles.subTitle}>Management System</div>
                <div className={styles.contentText}>
                    The management system handles information of the hospitals.
                    Operators can change hospitals' details, manage access
                    members, edit mailing lists, and etc.
                </div>
                <div className={styles.imgContainerWrapper}>
                    <div className={styles.imgContainer}>
                        <div className={styles.normalPicTwo}>
                            <img
                                src={
                                    'https://philipliart.files.wordpress.com/2022/01/specdocmanagementcpn.png?w=600'
                                }
                                alt={'spec-doc-login'}
                                onLoad={() => handleLoadingDone(1)}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.additionalInfo}>
                    <div className={styles.footerLine}>
                        <span>* This image does not contain actual data.</span>
                    </div>
                </div>
                <div className={styles.subTitle}>Campaign System</div>
                <div className={styles.contentText}>
                    The campaign system is an advertising system that could
                    control the display method and order inside the service
                    page.
                    <br />
                    The hospital is sorted with display method and other factors
                    with some kind of randomization method.
                    <br />
                    An impression and conversion recorder was implemented to
                    provide hospitals with insight into campaign performance.
                </div>
                <div className={styles.subTitle}>Hospital Search API</div>
                <div className={styles.contentText}>
                    The hospital searching API provides functions of searching
                    hospital public info for different services. The API
                    supports several fields for searching. Response data is
                    generated with regards to campaign status.
                    <span>This API is used inside service page.</span>
                </div>
                <div className={styles.subTitle}>Technical Details</div>
                <div className={styles.contentText}>
                    <div className={styles.infoText}>
                        I designed and implemented all the systems mentioned
                        above (including{' '}
                        <span>
                            UI/UX Design, Frontend, Infra Design, DevOps (AWS),
                            and Backend API{' '}
                        </span>
                        ).
                    </div>
                    <ul>
                        <li>
                            Designed and developed the system with{' '}
                            <span>Amazon Web Service</span>.
                        </li>
                        <li>
                            Utilized <span>MySQL</span> and{' '}
                            <span>DynamoDB</span> databases to fit different
                            need and usage of data, decoupling the system into
                            microservices.
                        </li>
                        <li>
                            <span>Designed the UI/UX interfaces</span> with ease
                            of use and modern appearance.
                        </li>
                        <li>
                            Carried out the management system for company
                            operators and hospitals admins using backend
                            developed with <span>Flask</span>
                            and frontend application developed with{' '}
                            <span>React.js</span>
                            application. And served frontend with{' '}
                            <span>Amplify</span> and backend inside{' '}
                            <span>ECS Fargate</span> containers.
                        </li>
                        <li>
                            Created a fast and highly available search system of
                            hospital information API based on{' '}
                            <span>Lambda</span> functions (<span>Node.js</span>)
                            and <span>ElasticSearch</span>.
                        </li>
                        <li>
                            Implemented an access number counting system based
                            on <span>AWS managed Queuing service (SQS)</span>{' '}
                            and <span>Caching service (ElastiCache)</span>.
                        </li>
                        <li>
                            Realized managing Infrastructure as Code with
                            <span>Terraform</span> and{' '}
                            <span>Serverless Framework</span>, and applied CI/CD
                            process with <span>CircleCI</span>.
                        </li>
                    </ul>
                </div>
                <div className={styles.footer}>
                    <div className={styles.footerLine}>
                        <span>
                            * Service Page NOT Designed or Developed by Me
                        </span>
                    </div>
                    <div className={styles.footerLine}>
                        Spec Doc Service Page:
                        <a href="https://www.specialist-doctor.com/">
                            <FontAwesomeIcon
                                className="social-media-icon"
                                icon={faLink}
                            />
                        </a>
                    </div>
                    <div className={styles.footerLine}>
                        Specialist Doctors Inc. HomePage:
                        <a href="https://www.specialist-doctor.com/home/">
                            <FontAwesomeIcon
                                className="social-media-icon"
                                icon={faLink}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </AnimatePresence>
    );
};

export default SpecDoc;
