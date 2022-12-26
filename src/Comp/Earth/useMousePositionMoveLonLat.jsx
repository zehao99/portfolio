import { useState, useEffect } from 'react';

const useMousePositionMoveLonLat = () => {
    const [mousePos, setMousePos] = useState({ lon: 0, lat: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({
                lon:
                    (((event.clientX / window.innerWidth) * 2) / 180) * Math.PI,
                lat:
                    (((event.clientY / window.innerHeight) * 2) / 180) *
                    Math.PI,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return mousePos;
};

export default useMousePositionMoveLonLat;
