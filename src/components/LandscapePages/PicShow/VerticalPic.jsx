import React from 'react';
import styles from './ShowPicVertical.module.scss';
import ComponentWithScrollLoad from '../../../utilities/ComponentWithScrollLoad';
import ImgLoadingComp from '../../Common/LoadingComp/ImgLoadingComp';

const VerticalPic = (props) => {
    return (
        <div key={props.id} className={styles.VerticalPicContainer}>
            <ImgLoadingComp url={props.url + '?w=700'} alt="" width="270px" />{' '}
            <p>{props.description}</p>
        </div>
    );
};
export default ComponentWithScrollLoad(VerticalPic);
