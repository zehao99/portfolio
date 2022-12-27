import React from 'react';
import styles from './IntroTitle.module.scss';


const IntroTitle = (props) => {
    return <div className={styles.introTitleContainer}>
        <h2>{props.title}</h2>
        <div className={styles.underline}/>
    </div>
}

export default IntroTitle;