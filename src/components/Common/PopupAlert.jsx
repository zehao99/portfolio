import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import styles from './PopupForm.module.scss';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMicrosoft, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PopupAlert = (props) => {
    return (
        <div>
            <div
                className={styles.ErrorContainer}
                onClick={props.onClickHandler}
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.1 }}
            >
                <div className={styles.ErrorPopCard}>
                    <h3>{props.title}</h3>
                    <div className={styles.emailLine}>
                        <FontAwesomeIcon
                            className="social-media-icon"
                            icon={faEnvelope}
                            size="2x"
                        />
                        <div className={styles.text}>
                            <a
                                href={
                                    'mailto:zehaoli99@gmail.com?subject=Inquiry%20through%20Home%20Page&body='
                                }
                            >
                                zehaoli99@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className={styles.emailButton}>
                        <a
                            href={
                                'https://mail.google.com/mail/?view=cm&fs=1&to=zehaoli99@gmail.com&su=Inquiry%20through%20Home%20Page&body='
                            }
                        >
                            <FontAwesomeIcon
                                className="social-media-icon"
                                icon={faGoogle}
                                size="2x"
                            />
                            <div className={styles.text}>Gmail</div>
                        </a>
                    </div>
                    <div className={styles.emailButton}>
                        <a
                            href={
                                'https://outlook.office.com/?path=/mail/action/compose&to=zehaoli99@gmail.com&subject=Inquiry%20through%20Home%20Page&body='
                            }
                        >
                            <FontAwesomeIcon
                                className="social-media-icon"
                                icon={faMicrosoft}
                                size="2x"
                            />
                            <div className={styles.text}>Outlook</div>
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const PopModal = (WrappedComponent) => {
    function EnhancedComponent(props) {
        return (
            <WrappedComponent
                onClickHandler={props.onClose}
                message={props.message}
                title={props.title}
            />
        );
    }

    EnhancedComponent.show = (params) => {
        let container = document.createElement('div');
        document.body.appendChild(container);

        function closeHandle() {
            ReactDOM.unmountComponentAtNode(container);
            document.body.removeChild(container);
            container = null;
        }

        ReactDOM.render(
            <EnhancedComponent {...params} onClose={closeHandle} />,
            container
        );
    };

    return EnhancedComponent;
};

export default PopModal(PopupAlert);
