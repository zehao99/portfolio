import { useEffect } from 'react';

const SuspendFinishComponent = ({ notifyLoaded, notifyInLoading }) => {
    useEffect(() => {
        if (notifyInLoading) notifyInLoading();
        return () => {
            if (notifyLoaded) notifyLoaded();
        };
    });

    return <></>;
};

export default SuspendFinishComponent;
