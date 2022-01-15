export const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
};

export const pageVariants = {
    initial: {
        opacity: 0,
        rotateY: -90,
        transition: pageTransition,
    },
    animate: {
        opacity: 1,
        transition: pageTransition,
        rotateY: 0,
        transitionEnd: { // temp workaround to fix trailing opacity and transform
            opacity: 1,
            rotateY: 0,
        },
    },
    exit: {
        opacity: 0,
        rotateY: 90,
        transition: pageTransition
    },
};


