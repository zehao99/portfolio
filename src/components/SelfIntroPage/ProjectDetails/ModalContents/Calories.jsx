import React, { useEffect, useState } from 'react';
import styles from './Calories.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import LoadingComp from '../../../Common/LoadingComp';

const Calories = () => {
    const [imgLoadList, setImgLoadList] = useState([false, false, false]);
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
        <div>
            {showComp ? null : <LoadingComp />}
            <div className={showComp ? styles.container : styles.noShow}>
                <div className={styles.title}>Calories Search</div>
                <div className={styles.periodContainer}>
                    <div className={styles.period}>
                        PERIOD <span>2020.6 - 2020.9</span>
                    </div>
                    <div className={styles.period}>
                        MEMBER <span>Team Project (2 Members)</span>
                    </div>
                </div>
                <div className={styles.imgContainerWrapper}>
                    <div className={styles.imgContainer}>
                        <div className={styles.imgOne}>
                            <img
                                src="https://philipliart.files.wordpress.com/2021/12/calories-search-home-page.png?h=800"
                                alt={'calories-detail'}
                                onLoad={() => handleLoadingDone(0)}
                            />
                        </div>
                        <div className={styles.imgTwo}>
                            <img
                                src="https://philipliart.files.wordpress.com/2021/12/calories-search-food-detial.png?h=800"
                                alt={'calories-detail'}
                                onLoad={() => handleLoadingDone(1)}
                            />
                        </div>
                        <div className={styles.imgThree}>
                            <img
                                src="https://philipliart.files.wordpress.com/2021/12/calories-search-search-page.png?h=800"
                                alt={'calories-detail'}
                                onLoad={() => handleLoadingDone(2)}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.subTitle}>Search System</div>
                <div className={styles.contentText}>
                    The database was filled with food nutrition data from USDA
                    Food Data Central. Users can search for the items they had
                    and see the item's details.
                </div>
                <div className={styles.imgContainerWrapper}>
                    <div className={styles.imgContainer}>
                        <div className={styles.imgOne2}>
                            <img
                                src="https://philipliart.files.wordpress.com/2021/12/calories-search-cart-mobile.png?h=800"
                                alt={'calories-detail'}
                            />
                        </div>
                        <div className={styles.imgTwo2}>
                            <img
                                src="https://philipliart.files.wordpress.com/2021/12/caloriesuserbasicinfo.png?h=800"
                                alt={'calories-detail'}
                            />
                        </div>
                        <div className={styles.imgThree2}>
                            <img
                                src="https://philipliart.files.wordpress.com/2021/12/caloriesuserdayview.png?h=800"
                                alt={'calories-detail'}
                            />
                        </div>
                        <div className={styles.imgFour2}>
                            <img
                                src="https://philipliart.files.wordpress.com/2021/12/caloriesuserpiechart.png?h=800"
                                alt={'calories-detail'}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.subTitle}>
                    Cart System and User Analytics
                </div>
                <div className={styles.contentText}>
                    The user can add items into the cart and record their meals.
                    After recording meals, they can watch their analytics
                    metrics inside the user summary page. The metrics can be
                    checked inside different periods (e.g., one year, six
                    months, three months, one month).
                </div>
                <div className={styles.subTitle}>Technical Details</div>
                <div className={styles.contentText}>
                    <ul>
                        <li>
                            Implemented the frontend using <span>Next.js</span>{' '}
                            for users to query nutrition information of any food
                            and add into meals to track daily nutrition intake.
                            Designed a <span>PostgreSQL</span> database based on
                            data from USDA Food Data Central to provide accurate
                            food nutrition data.
                        </li>
                        <li>
                            Designed UI/UX for frontend client and carried out
                            full <span>responsive design</span> corresponding to
                            different devices.
                        </li>
                        <li>
                            Deployed the frontend, backend and database globally
                            using <span>GKE</span> and <span>Cloud SQL</span>{' '}
                            with <span>Google Global Load Balancer</span>
                            so that users will be routed to the nearest server
                            based on distance to significantly reduce latency.
                        </li>
                        <li>
                            Utilized Service Mesh by <span>Istio</span> to
                            deploy services in <span>Kubernetes Clusters</span>,
                            resulting in fine-grained traffic management.
                        </li>
                        <li>
                            Using <span>Spinnaker</span> pipeline to deploy
                            services triggered by Docker registry to improve
                            fault tolerance and simplify CI/CD process.
                        </li>
                    </ul>
                </div>
                <div className={styles.footer}>
                    Github Page (Frontend):
                    <a href="https://github.com/zehao99/calories_frontend">
                        <FontAwesomeIcon
                            className="social-media-icon"
                            icon={faGithub}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Calories;
