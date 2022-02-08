import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styles from './NavbarMobile.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
const variantsSub = {
    open: {
        opacity: 1,
        height: 600,
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        opacity: 0,
        height: 0,
        padding: 0,
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const variants = {
    open: {
        y: 0,
        position: 'relative',
        opacity: 1,
        margin: 20,
        height: 'auto',
        cursor: 'pointer',
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 100,
        opacity: 0,
        margin: 0,
        height: 0,
        overflow: 'hidden',
        cursor: 'default',
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

export const MenuItem = ({ elem }) => {
    const [show, setShow] = useState(elem.show);
    const style = { position: 'relative' };
    const ClickEnter = () => {
        setShow(!show);
    };
    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1, color: '#284263' }}
            whileTap={{ scale: 0.95, color: '#284263' }}
            onClick={ClickEnter}
        >
            {elem.isExternalLink ? (
                <a href={elem.url} style={style}>
                    {elem.id}
                </a>
            ) : elem.content.length === 0 ? (
                <NavLink to={elem.url} style={style}>
                    {elem.id}
                </NavLink>
            ) : (
                <div>
                    {elem.id}
                    {show ? (
                        <FontAwesomeIcon
                            style={{
                                width: '18px',
                                height: '18px',
                                margin: '5px 10px',
                            }}
                            icon={faChevronUp}
                            size="1x"
                        />
                    ) : (
                        <FontAwesomeIcon
                            style={{
                                width: '18px',
                                height: '18px',
                                margin: '5px 10px',
                            }}
                            icon={faChevronDown}
                            size="1x"
                        />
                    )}
                </div>
            )}
            {show ? (
                <motion.div
                    className={styles.subUl}
                    animate={{ opacity: [0, 1] }}
                >
                    {elem.content.map((e) => (
                        <motion.div
                            key={e.name}
                            className={styles.subLi}
                            whileHover={{ scale: 1.1, color: '#284263' }}
                        >
                            <NavLink to={e.url}>{e.name}</NavLink>
                        </motion.div>
                    ))}
                </motion.div>
            ) : null}
        </motion.li>
    );
};
