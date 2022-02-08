import React from 'react';
import useWindowDimensions from '../../Utilities/useWindowDimensions';
import ShowPicVertical from './ShowPicVertical';
import ShowPicHorizontal from './ShowPicHorizontal';
import styles from './ShowPic.module.scss';

const ShowPic = (props) => {
    const { height, width } = useWindowDimensions();

    return height > width ? (
        <ShowPicVertical photos={props.photos} />
    ) : height < 600 ? (
        <div className={styles.HorizontalAlert}>
            <p>Please turn your phone to portrait orientation</p>
        </div>
    ) : (
        <ShowPicHorizontal photos={props.photos} />
    );
};

export default ShowPic;
