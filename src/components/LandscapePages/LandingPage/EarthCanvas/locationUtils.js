import { Euler, Vector3 } from 'three';

import {toRad} from '../../../../Utilities/calculations.js';

const MILLISECONDS_IN_A_DAY = 24 * 60 * 60 * 1000;



const DEFAULT_ROTATION = { lon: toRad(139.6), lat: toRad(35.8) };

const UTC_TIME_RAD_OFFSET = (12 / 24) * Math.PI;

const getCurrentSunLongLatitudeRad = () => {
    const currentTime = new Date();

    const longitudeOfSun =
        -(
            (currentTime.getTime() % MILLISECONDS_IN_A_DAY) /
            MILLISECONDS_IN_A_DAY
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

    const latitudeOfSun =
        -0.39795 * Math.cos(((0.98563 * (dayInYear() - 173)) / 180) * Math.PI);

    return { lon: longitudeOfSun, lat: latitudeOfSun };
};

export const getCurrSunPositionVector = () => {
    const { lon, lat } = getCurrentSunLongLatitudeRad();

    const latitudeEuler = new Euler(lat, 0, 0);

    const longitudeEuler = new Euler(0, lon, 0);

    let sunDirection = new Vector3(0, 0, 10);

    sunDirection = sunDirection.applyEuler(latitudeEuler);

    sunDirection = sunDirection.applyEuler(longitudeEuler);

    return sunDirection;
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
