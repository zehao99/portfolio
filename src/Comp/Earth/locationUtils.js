import { Euler, Vector3 } from 'three';

const MILISECONDS_IN_A_DAY = 24 * 60 * 60 * 1000;

export const toRad = (deg) => (deg / 180) * Math.PI;

const DEFAULT_ROTATION = { lon: toRad(139.6), lat: toRad(35.8) };

const UTC_TIME_RAD_OFFSET = (12 / 24) * Math.PI;

const getCurrentSunLongLattitudeRad = () => {
    const currentTime = new Date();

    const longtitudeOfSun =
        -(
            (currentTime.getTime() % MILISECONDS_IN_A_DAY) /
            MILISECONDS_IN_A_DAY
        ) *
            2 *
            Math.PI -
        (12 / 24) * Math.PI;

    const dayInYear = () => {
        var now = new Date();
        var start = new Date(now.getFullYear(), 0, 0);
        var diff = now - start;
        var oneDay = 1000 * 60 * 60 * 24;
        return Math.floor(diff / oneDay);
    };

    const lattitudeOfSun =
        -0.39795 * Math.cos(((0.98563 * (dayInYear() - 173)) / 180) * Math.PI);

    return { lon: longtitudeOfSun, lat: lattitudeOfSun };
};

export const getCurrSunPositionVector = () => {
    const { lon, lat } = getCurrentSunLongLattitudeRad();

    const lattitudeEuler = new Euler(lat, 0, 0);

    const longtitudeEuler = new Euler(0, lon, 0);

    let sunDireciton = new Vector3(0, 0, 10);

    sunDireciton = sunDireciton.applyEuler(lattitudeEuler);

    sunDireciton = sunDireciton.applyEuler(longtitudeEuler);

    return sunDireciton;
};

export const getCameraPosition = (lon, lat) => {
    let location = new Vector3(0, 0, 2);
    location = location.applyEuler(new Euler(-lat, 0, 0));
    location = location.applyEuler(new Euler(0, lon + UTC_TIME_RAD_OFFSET, 0));
    return location;
};

export const getCameraInitialLonLat = () => {
    return DEFAULT_ROTATION;
};

export const getInitialCameraPosition = () => {
    return getCameraPosition(DEFAULT_ROTATION.lon, DEFAULT_ROTATION.lat);
};
