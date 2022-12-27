import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-regular-svg-icons';
import styles from './ImgLoadingComp.module.scss';

const none = {
    display: 'none',
};

const ImgLoadingComp = (props) => {
    const [loading, setLoading] = useState(true);
    let isDark = false;
    if (props.dark === undefined) isDark = false;
    else isDark = props.dark;
    const imgLoaded = () => {
        setLoading(false);
    };
    let imgSameSize = false;
    if (props.imgSameSize !== undefined) {
        imgSameSize = props.imgSameSize;
    }
    const block = imgSameSize
        ? {
              width: props.width === undefined ? '300px' : props.width,
              height: props.height === undefined ? '200px' : props.height,
          }
        : {};
    return (
        <div className={styles.overallContainer}>
            {loading && (
                <div
                    className={
                        isDark
                            ? styles.loadingComponentContainerDark
                            : styles.loadingComponentContainerLight
                    }
                    style={{
                        width:
                            props.width === undefined ? '300px' : props.width,
                        height:
                            props.height === undefined ? '200px' : props.height,
                    }}
                >
                    <FontAwesomeIcon
                        className="loading-img-icon"
                        icon={faImages}
                        size="3x"
                    />
                </div>
            )}
            <img
                src={props.url}
                style={loading ? none : block}
                alt={props.alt === undefined ? props.url : props.alt}
                onLoad={imgLoaded}
            />
        </div>
    );
};

export default ImgLoadingComp;
