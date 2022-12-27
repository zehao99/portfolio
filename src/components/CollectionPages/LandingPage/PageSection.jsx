import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PageSection.module.scss';

const PageSection = (props) => {
    return (
        <div
            className={
                props.isLeft
                    ? styles.pageSectionWrapper
                    : styles.pageSelectionWrapperRight
            }
        >
            <div
                className={
                    props.isLeft
                        ? styles.goldRectangle
                        : styles.goldRectangleRight
                }
            />
            <div
                className={
                    props.isLeft
                        ? styles.pageSectionTitleWrapper
                        : styles.pageSectionTitleWrapperRight
                }
            >
                <h3>{props.pageTitle}</h3>
                <Link to={props.linkTo}>
                    {props.isLeft ? 'Details →' : '→ Details'}
                </Link>
            </div>

            <div className={styles.imgContainer}>
                <img src={props.pageImgUrl} alt={'collection-brief'} />
            </div>
        </div>
    );
};

export default PageSection;
