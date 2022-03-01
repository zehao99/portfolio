import React from 'react';
import { motion } from 'framer-motion';

const Wrapper = (props) => {
    return <span style={{ whiteSpace: 'nowrap' }}>{props.children}</span>;
};

const tagMap = {
    paragraph: 'p',
    heading1: 'h1',
    heading2: 'h2',
};

const AnimatedCharacters = (props) => {
    const item = {
        hidden: {
            opacity: 0,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
        },
        visible: {
            opacity: 1,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
        },
    };

    const splitWords = props.text.split(' ');
    const words = [];

    for (const [, item] of splitWords.entries()) {
        words.push(item.split(''));
    }

    words.map((word) => {
        return word.push('\u00A0');
    });

    const Tag = tagMap[props.type];

    return (
        <Tag>
            {words.map((word, index) => {
                return (
                    <Wrapper key={index}>
                        {words[index].flat().map((element, index) => {
                            return (
                                <span
                                    style={{
                                        overflow: 'hidden',
                                        display: 'inline-block',
                                    }}
                                    key={index}
                                >
                                    <motion.span
                                        style={{ display: 'inline-block' }}
                                        variants={item}
                                    >
                                        {element}
                                    </motion.span>
                                </span>
                            );
                        })}
                    </Wrapper>
                );
            })}
        </Tag>
    );
};

export default AnimatedCharacters;