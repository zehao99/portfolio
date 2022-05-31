import React from 'react';
import styles from './Titles.module.scss';

const Title = () => {
    return (
        <div className={styles.TitleWrapper}>
            <div className={styles.Title}>
                <h1>Collections</h1>
                <p>It is what happens around us that matters.</p>
            </div>
            <div className={styles.GreyRectangle}> </div>
        </div>
    );
};

export default Title;
