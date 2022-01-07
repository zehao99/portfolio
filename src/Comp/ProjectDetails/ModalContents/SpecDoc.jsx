import React from 'react';
import styles from './SpecDoc.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const SpecDoc = () => {
    return (
        <div>
            <div className={styles.container}>
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
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.additionalInfo}>
                    <div className={styles.footerLine}>
                        <span>
                            * Many pictures are not displayed due to permission.
                        </span>
                    </div>
                </div>
                <div className={styles.subTitle}>Management System</div>
                <div className={styles.contentText}>
                    The management system handles information of the hospitals.
                    Management operators and hospital employees can change
                    hospitals' details, manage access members, mailing lists,
                    and email templates.
                </div>
                <div className={styles.imgContainerWrapper}>
                    <div className={styles.imgContainer}>
                        <div className={styles.normalPicTwo}>
                            <img
                                src={
                                    'https://philipliart.files.wordpress.com/2022/01/specdocmanagementcpn.png?w=600'
                                }
                                alt={'spec-doc-login'}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.subTitle}>Campaign System</div>
                <div className={styles.contentText}>
                    The campaign system was an advertising system that could
                    control the display method and order inside the service
                    page. Hospitals hold different display methods according to
                    their contract methods].
                    <br />
                    The hospital is sorted with display method and other factors
                    with some kind of randomization method.
                    <br />
                    An impression and conversion counter was also implemented to
                    provide hospitals with insight into campaign performance.
                </div>
                <div className={styles.subTitle}>Technical Details</div>
                <div className={styles.contentText}>
                    <div className={styles.infoText}>
                        I designed and implemented all the systems mentioned
                        above (including{' '}
                        <span>
                            UI/UX Design, Frontend, DevOps (AWS), and Backend{' '}
                        </span>
                        ).
                    </div>
                    <ul>
                        <li>
                            Designed and developed a scalable system for a
                            cancer inquiry service called Findme Specialist
                            Doctors with <span>Amazon Web Service</span>. The
                            system provides cancer patients with hospital
                            information according to user search and sends
                            patient’s inquiry to those hospitals.
                        </li>
                        <li>
                            Utilized <span>MySQL</span> and{' '}
                            <span>DynamoDB</span> databases to fit different
                            need and usage of data, decoupling the system into
                            microservices.
                        </li>
                        <li>
                            Designed the UI/UX interfaces with ease of use and
                            modern appearance.
                        </li>
                        <li>
                            Carried out the management system for company
                            operators and hospitals admins using backend
                            developed with <span>Flask</span>
                            and frontend application developed with{' '}
                            <span>React.js</span>
                            application. The frontend is served with{' '}
                            <span>Amplify</span> and the backend is served
                            inside <span>ECS Fargate</span> containers.
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
                            * Service Frontend NOT Designed or Developed by Me
                        </span>
                    </div>
                    <div className={styles.footerLine}>
                        Spec Doc Service Page:
                        <a href="https://specialist.findme.life/service/cancer/prostate/ittosanken/">
                            <FontAwesomeIcon
                                className="social-media-icon"
                                icon={faLink}
                            />
                        </a>
                    </div>
                    <div className={styles.footerLine}>
                        Reasonwhy Inc. HomePage:
                        <a href="https://www.reasonwhy.jp/">
                            <FontAwesomeIcon
                                className="social-media-icon"
                                icon={faLink}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecDoc;
