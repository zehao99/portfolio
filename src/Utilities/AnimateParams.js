export const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.3,
};

export const pageVariants = {
    initial: {
        opacity: 0,
        scaleY: 0,
        y: "-10vh",
        transition: pageTransition,
    },
    animate: {
        opacity: 1,
        scaleY: 1,
        transition: pageTransition,
        y: 0,
        transitionEnd: { // temp workaround to fix trailing opacity and transform
            opacity: 1,
            scaleY: 1,
            y: 0,
        },
    },
    exit: {
        opacity: 0,
        scaleY: 0.2,
        scroll: 100,
        y: "20vh",
        transition: pageTransition
    },
};


