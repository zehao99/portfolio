import React from 'react';
import { motion } from 'framer-motion';
import styles from './PopupForm.module.scss';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createRoot } from 'react-dom/client';

const PopupAlert = (props) => {
    return (
        <div>
            <motion.div
                className={styles.ErrorPopCard}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.1 }}
            >
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
            </motion.div>
            <div
                className={styles.ErrorContainer}
                onClick={props.onClickHandler}
            />
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
        const root = createRoot(container);

        function closeHandle() {
            root.unmount();
            document.body.removeChild(container);
            container = null;
        }

        root.render(<EnhancedComponent {...params} onClose={closeHandle} />);
    };

    return EnhancedComponent;
};

export default PopModal(PopupAlert);
