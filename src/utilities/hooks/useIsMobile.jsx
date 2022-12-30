import React, { useEffect, useState } from 'react';
import useWindowDimensions from './useWindowDimensions.jsx';

export default function useIsMobile() {
    const [isMobile, setIsMobile] = useState();
    const { height, width } = useWindowDimensions();
    useEffect(() => {
        const u = navigator.userAgent;
        const isTouch = navigator.maxTouchPoints > 1;
        const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        setIsMobile(width <= 900 || isAndroid || isiOS || isTouch);
    }, [width]);
    return isMobile;
}
