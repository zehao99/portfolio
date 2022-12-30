import React, { useEffect, useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { PerspectiveCamera, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { Euler, TextureLoader } from 'three';

import EarthDayMap from '../../../../assets/textures/8k_earth_daymap.jpg';
import EarthCloudsMap from '../../../../assets/textures/8k_earth_clouds.png';
import EarthNightMap from '../../../../assets/textures/8k_earth_nightmap.jpg';
import EarthNormalMap from '../../../../assets/textures/8k_earth_normal_map.jpg';
import EarthSpecularMap from '../../../../assets/textures/8k_earth_specular_map.jpg';
import {
    get3DPositionOnSphereWithLonLat,
    get45DegreesCameraPosition,
    getCurrSunPositionVector, getLocationMarkRotation,
    getPolarCameraPosition,
    getRotationMatrix,
} from './locationUtils';
import earthVertexShader from './shaders/earthVertexShader.glsl';
import earthFragmentShader from './shaders/earthFragmentShader.glsl';

import useMousePositionMoveLonLat from './hooks/useMousePositionMoveLonLat.jsx';

import useIsMobile from '../../../../utilities/hooks/useIsMobile.jsx';
import LocationMark from './LocationMark';

const MOVE_ANIMATION_FRAME_LENGTH = 45;

const MAX_CAMERA_HEIGHT = 4;

const MIN_CAMERA_HEIGHT = 1.5;

const Earth = (props) => {
    const [colorMap, nightColorMap, normalMap, specularMap, cloudsMap] =
        useLoader(TextureLoader, [
            EarthDayMap,
            EarthNightMap,
            EarthNormalMap,
            EarthSpecularMap,
            EarthCloudsMap,
        ]);

    const isMobileDevice = useIsMobile();

    const sunPosition = getCurrSunPositionVector();

    const mouseLonLatOffset = useMousePositionMoveLonLat();

    const [cameraPositionTarget, setCameraPositionTarget] = useState(
        props.currCamPos,
    );

    const [currentLonLatPos, setCurrentLonLatPos] = useState({
        lon: 0,
        lat: 0,
        height: MAX_CAMERA_HEIGHT,
        lookAtRadius: 0,
    });

    const [framesLeft, setFramesLeft] = useState(MOVE_ANIMATION_FRAME_LENGTH);

    const initialCameraPos = getPolarCameraPosition(
        currentLonLatPos.lon, currentLonLatPos.lat,
    );

    const [markRotation, setMarkRotation] = useState(new Euler());

    const earthRef = useRef();
    const cloudsRef = useRef();
    const cameraRef = useRef();

    const earthPosition = [0, 0, 0];

    useEffect(() => {
        if (props.currCamPos == null) return;
        setCameraPositionTarget(props.currCamPos);
        setFramesLeft(MOVE_ANIMATION_FRAME_LENGTH);
    }, [props.currCamPos]);

    const setCameraPosition = () => {
        const _currLonLatPos = { ...currentLonLatPos };
        // If animation finished, then don't move.
        if (framesLeft > 0) {
            // Calculate new longitude and lattitude.
            const lonDiff = cameraPositionTarget.lon - currentLonLatPos.lon;
            const latDiff = cameraPositionTarget.lat - currentLonLatPos.lat;
            const heightDiff = cameraPositionTarget.height - currentLonLatPos.height;
            const radiusDiff = cameraPositionTarget.lookAtRadius - currentLonLatPos.lookAtRadius;
            _currLonLatPos.lon = currentLonLatPos.lon + (lonDiff / framesLeft) * 2;
            _currLonLatPos.lat = currentLonLatPos.lat + (latDiff / framesLeft) * 2;
            _currLonLatPos.height = currentLonLatPos.height + (heightDiff / framesLeft) * 2;
            _currLonLatPos.lookAtRadius = currentLonLatPos.lookAtRadius + (radiusDiff / framesLeft);
            // Update React States.
            setCurrentLonLatPos({ ..._currLonLatPos });
            setFramesLeft((prev) => prev - 1);
        }
        // Update Camera Location.
        const { position, lookAt } = get45DegreesCameraPosition(
            isMobileDevice
                ? _currLonLatPos.lon
                : _currLonLatPos.lon + mouseLonLatOffset.lon,
            isMobileDevice
                ? _currLonLatPos.lat
                : _currLonLatPos.lat + mouseLonLatOffset.lat,
            _currLonLatPos.height,
            _currLonLatPos.lookAtRadius,
            props.isInit,
        );
        cameraRef.current.position.setX(position.x);
        cameraRef.current.position.setY(position.y);
        cameraRef.current.position.setZ(position.z);
        // Always look at target.
        cameraRef.current.lookAt(lookAt);
        const newEuler = new Euler();
        // console.log(getRotationMatrix(cameraPositionTarget.lon, cameraPositionTarget.lat));
        newEuler.setFromRotationMatrix(getRotationMatrix(cameraPositionTarget.lon, cameraPositionTarget.lat), 'XYZ', true);
        // console.log(newEuler);
        setMarkRotation(cameraRef.current.rotation);
        // console.log(cameraRef.current);
    };

    useFrame(({ clock }) => {
        setCameraPosition();
    });

    return (
        <>
            <ambientLight intensity={0.1} />
            <pointLight
                color='#f6f3ea'
                position={sunPosition}
                intensity={1.2}
            />
            <Stars
                radius={300}
                depth={60}
                count={20000}
                factor={7}
                saturation={0}
                fade={true}
            />
            {!props.isInit && <LocationMark
                position={get3DPositionOnSphereWithLonLat(cameraPositionTarget.lon, cameraPositionTarget.lat)}
                scale={0.023}
                rotation={getLocationMarkRotation(cameraPositionTarget.lon, cameraPositionTarget.lat)}

                // rotation={[
                //     props.currCamPos.lat > 0 ? 0: - Math.PI,
                //     (props.currCamPos.lat > 0 ? 1 : - 1) * cameraPositionTarget.lon + Math.PI / 7,
                //     0
                // ]}
                onPointerEnter={(e) => console.log('enter')}
            />}
            <mesh ref={cloudsRef} position={earthPosition}>
                <sphereGeometry args={[1.005, 32, 32]} />
                <meshPhongMaterial
                    map={cloudsMap}
                    opacity={1}
                    depthWrite={true}
                    transparent={true}
                    side={THREE.DoubleSide}
                    reflectivity={0.1}
                    roughness={0}
                />
            </mesh>
            <mesh ref={earthRef} position={earthPosition}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshPhongMaterial specularMap={specularMap} />
                <meshStandardMaterial
                    colorMap={normalMap}
                    metalness={1}
                    roughness={0.7}
                />
                <shaderMaterial
                    uniforms={{
                        sunDirection: {
                            value: sunPosition,
                        },
                        dayTexture: { value: colorMap },
                        nightTexture: { value: nightColorMap },
                    }}
                    vertexShader={earthVertexShader}
                    fragmentShader={earthFragmentShader}
                />
            </mesh>
            <PerspectiveCamera
                ref={cameraRef}
                makeDefault
                fov={75}
                aspect={4 / 3}
                near={0.1}
                far={100000}
                position={initialCameraPos.position}
            />
        </>
    );
};

export default Earth;
