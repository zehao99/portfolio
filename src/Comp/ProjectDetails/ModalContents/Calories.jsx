import React from 'react';
import styles from './Contents.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Calories = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Calories Search</div>
            <div className={styles.periodContainer}>
                <div className={styles.period}>
                    YEAR <span>2020.6 - 2020.9</span>
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
                        />
                    </div>
                    <div className={styles.imgTwo}>
                        <img
                            src="https://philipliart.files.wordpress.com/2021/12/calories-search-food-detial.png?h=800"
                            alt={'calories-detail'}
                        />
                    </div>
                    <div className={styles.imgThree}>
                        <img
                            src="https://philipliart.files.wordpress.com/2021/12/calories-search-search-page.png?h=800"
                            alt={'calories-detail'}
                        />
                    </div>
                </div>
            </div>

            <div className={styles.subTitle}>Search System</div>
            <div className={styles.contentText}>
                The database was filled with food nutrition data from USDA Food
                Data Central. Users can search for the items they had and see
                the details of the item.
            </div>
            <div className={styles.subTitle}>
                Cart System and User Analytics
            </div>
            <div className={styles.contentText}>
                The user can add items into the cart and record their meals.
                After recording meals, they can watch their analytics metrics
                inside the user summary page. The metrics can be checked inside
                different periods (e.g. 1 year, 6 months, 3 months, 1 months).
            </div>
            <div className={styles.subTitle}>Technical Details</div>
            <div className={styles.contentText}>
                <ul>
                    <li>
                        Implemented the frontend using <span>Next.js</span> for
                        users to query nutrition information of any food and add
                        into meals to track daily nutrition intake. Designed a{' '}
                        <span>PostgreSQL</span> database based on data from USDA
                        Food Data Central to provide accurate food nutrition
                        data.
                    </li>
                    <li>
                        Deployed the frontend, backend and database globally
                        using <span>GKE</span> and <span>Cloud SQL</span> with{' '}
                        <span>Google Global Load Balancer</span>
                        so that users will be routed to the nearest server based
                        on distance to significantly reduce latency.
                    </li>
                    <li>
                        Utilized Service Mesh by <span>Istio</span> to deploy
                        services in <span>Kubernetes Clusters</span>, resulting
                        in fine-grained traffic management.
                    </li>
                    <li>
                        Using <span>Spinnaker</span> pipeline to deploy services
                        triggered by Docker registry to improve fault tolerance
                        and simplify CI/CD process.
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
    );
};

export default Calories;
