"use client"
import { useHelper } from '@react-three/drei';
import { useRef } from 'react';
import { CameraHelper, DirectionalLight, OrthographicCamera } from 'three'

// const createSunlightSource = () => {
//     const sunLight = new DirectionalLight(0xffffff, 3);
//     sunLight.castShadow = true;
//     sunLight.shadow.camera.far = 20;
//     // setting the quality of shadows
//     sunLight.shadow.mapSize.set(2048, 2048);
//     // setting how defined the shadow edges need to be
//     sunLight.shadow.normalBias = 0.05;
//     // setting the position of shadows
//     sunLight.position.set(-1.5, 7, 3);
//     return sunLight;
// }

export const SunlightSource = () => {
    return (
        <>

            <directionalLight  color={0xffffff} intensity={3} castShadow shadow-mapSize={[2048, 2048]}  position={[-1.5, 7, 3]}>
                <orthographicCamera  />
            </directionalLight>
        </>

    )
};