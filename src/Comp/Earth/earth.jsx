import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { PerspectiveCamera, Stars } from '@react-three/drei';
import * as THREE from 'three';

import EarthDayMap from '../../assets/textures/8k_earth_daymap.jpg';
import EarthCloudsMap from '../../assets/textures/8k_earth_clouds.png';
import EarthNightMap from '../../assets/textures/8k_earth_nightmap.jpg';
import EarthNormalMap from '../../assets/textures/8k_earth_normal_map.jpg';
import EarthSpecularMap from '../../assets/textures/8k_earth_specular_map.jpg';
import { TextureLoader, Vector3 } from 'three';
import { getCurrSunPositionVector, getCameraPosition } from './locationUtils';

import { vs, fs } from './CustomShader';

import useMousePositionMoveLonLat from './useMousePositionMoveLonLat';

const MOVE_ANIMATION_FRAME_LENGTH = 45;

const Earth = (props) => {
    const [colorMap, nightColorMap, normalMap, specularMap, cloudsMap] =
        useLoader(TextureLoader, [
            EarthDayMap,
            EarthNightMap,
            EarthNormalMap,
            EarthSpecularMap,
            EarthCloudsMap,
        ]);

    const sunPosition = getCurrSunPositionVector();

    const mouseLonLatOffset = useMousePositionMoveLonLat();

    const [cameraPositionTarget, setCameraPositionTarget] = useState(
        props.currCamLonLat
    );

    const [currentLonLat, setCurrentLonLat] = useState({ lon: 0, lat: 0 });

    const [framesLeft, setFramesLeft] = useState(MOVE_ANIMATION_FRAME_LENGTH);

    const initialCameratPos = getCameraPosition(
        currentLonLat.lon,
        currentLonLat.lat
    );

    const earthRef = useRef();
    const cloudsRef = useRef();
    const cameraRef = useRef();

    const earthPosition = [0, 0, 0];

    useEffect(() => {
        setCameraPositionTarget(props.currCamLonLat);
        setFramesLeft(MOVE_ANIMATION_FRAME_LENGTH);
    }, [props.currCamLonLat]);

    const setCameraPosition = () => {
        const _currLonLat = { ...currentLonLat };
        // If animation finished, then don't move.
        if (framesLeft > 0) {
            // Calculate new longitude and lattitude.
            const londiff = cameraPositionTarget.lon - currentLonLat.lon;
            const latdiff = cameraPositionTarget.lat - currentLonLat.lat;
            _currLonLat.lon = currentLonLat.lon + (londiff / framesLeft) * 2;
            _currLonLat.lat = currentLonLat.lat + (latdiff / framesLeft) * 2;
            // Update React States.
            setCurrentLonLat({ ..._currLonLat });
            setFramesLeft((prev) => prev - 1);
        }
        // Update Camera Location.
        const newVec = getCameraPosition(
            _currLonLat.lon + mouseLonLatOffset.lon,
            _currLonLat.lat + mouseLonLatOffset.lat
        );
        cameraRef.current.position.setX(newVec.x);
        cameraRef.current.position.setY(newVec.y);
        cameraRef.current.position.setZ(newVec.z);
        // Always look at the Original Point.
        cameraRef.current.lookAt(new Vector3(0, 0, 0));
    };

    useFrame(({ clock }) => {
        setCameraPosition();
    });

    return (
        <>
            <ambientLight intensity={0.1} />
            <pointLight
                color="#f6f3ea"
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
            <mesh ref={cloudsRef} position={earthPosition}>
                <sphereGeometry args={[1.005, 32, 32]} />
                <meshPhongMaterial
                    map={cloudsMap}
                    opacity={1}
                    depthWrite={true}
                    transparent={true}
                    side={THREE.DoubleSide}
                    reflectivity={0.5}
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
                    vertexShader={vs}
                    fragmentShader={fs}
                />
            </mesh>
            <PerspectiveCamera
                ref={cameraRef}
                makeDefault
                fov={70}
                aspect={4 / 3}
                near={0.1}
                far={100000}
                position={initialCameratPos}
            />
        </>
    );
};

export default Earth;
