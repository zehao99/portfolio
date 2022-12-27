import React, { useEffect, useState } from 'react';
import styles from './NavbarWide.module.scss';
import { NavLink } from 'react-router-dom';
import SubNav from './SubNav';

const NavbarWide = (props) => {
    const [content, setContent] = useState(props.navContent);

    const setAllFalse = () => {
        setContent((prevState) => {
            prevState.map((e) => {
                e.show = false;
            });
            return [...prevState];
        });
    };

    useEffect(() => {
        setAllFalse();

        return () => setAllFalse();
    }, []);

    const HoverHandlerEnter = (id) => {
        setContent((prevState) => {
            prevState.map((e) => {
                if (e.id === id) {
                    e.show = true;
                }
            });
            return [...prevState];
        });
    };

    const HoverHandlerLeave = (id) => {
        setContent((prevState) => {
            prevState.map((e) => {
                if (e.id === id) {
                    e.show = false;
                }
                return 0;
            });
            return [...prevState];
        });
    };

    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbar}>
                <h1>
                    <NavLink to="/">
                        <img alt="" src={`/img/logo-light-light.png`} />
                    </NavLink>
                </h1>
                <div className={styles.navbarLinks}>
                    {content.map((e) => {
                        return (
                            <div
                                key={e.id}
                                className={styles.navbarElement}
                                onMouseEnter={HoverHandlerEnter.bind(
                                    this,
                                    e.id
                                )}
                                onMouseLeave={HoverHandlerLeave.bind(
                                    this,
                                    e.id
                                )}
                            >
                                <div className={styles.navbarLink}>
                                    {e.isExternalLink ? (
                                        <a className={styles.btn} href={e.url}>
                                            {e.id}
                                        </a>
                                    ) : (
                                        <NavLink
                                            to={e.url}
                                            className={styles.btn}
                                        >
                                            {e.id}
                                        </NavLink>
                                    )}
                                </div>
                                <SubNav
                                    show={e.show}
                                    content={e.content}
                                    isRight={e.isRight}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default NavbarWide;
