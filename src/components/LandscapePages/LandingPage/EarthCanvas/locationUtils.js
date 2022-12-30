import { Euler, Matrix3, Matrix4, Vector3 } from 'three';

import { toRad } from '../../../../utilities/calculations.js';

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

export const getPolarCameraPosition = (lon, lat) => {
    let location = new Vector3(0, 0, 2);
    location = location.applyEuler(new Euler(-lat, 0, 0));
    location = location.applyEuler(new Euler(0, lon + UTC_TIME_RAD_OFFSET, 0));

    return { position: location, lookAt: new Vector3(0, 0, 0) };
};

export const get45DegreesCameraPosition = (
    lon,
    lat,
    height,
    lookAtRadius,
    isInit
) => {
    let lookAtLocation = new Vector3(0, 0, lookAtRadius);
    lookAtLocation = lookAtLocation.applyEuler(new Euler(-lat, 0, 0));
    lookAtLocation = lookAtLocation.applyEuler(
        new Euler(0, lon + UTC_TIME_RAD_OFFSET, 0)
    );
    let location = new Vector3(0, 0, height);
    let transferredLat;
    if (lat > 0) {
        transferredLat = -lat + toRad(10);
    } else if (isInit) {
        transferredLat = -lat;
    } else {
        transferredLat = -lat + toRad(10);
    }
    location = location.applyEuler(new Euler(transferredLat, 0, 0));
    location = location.applyEuler(new Euler(0, lon + UTC_TIME_RAD_OFFSET, 0));
    return { position: location, lookAt: lookAtLocation };
};

export const get3DPositionOnSphereWithLonLat = (lon, lat) => {
    let location = new Vector3(0, 0, 1);
    location = location.applyEuler(new Euler(-lat, 0, 0));
    location = location.applyEuler(new Euler(0, lon + UTC_TIME_RAD_OFFSET, 0));
    return location;
};

export const getLocationMarkRotation = (lon, lat) => {
    let matrix1 = new Matrix4();
    matrix1.makeRotationFromEuler(new Euler(0, lon, lat - toRad(30), 'XYZ'));
    let matrix2 = new Matrix4();
    matrix2.makeRotationFromEuler(new Euler(0, Math.PI / 6, 0));
    matrix1.multiply(matrix2);

    let baseEuler = new Euler();
    baseEuler.setFromRotationMatrix(matrix1);
    // let secondEuler = new Euler(0, 0, toRad(15));
    return baseEuler;
};

