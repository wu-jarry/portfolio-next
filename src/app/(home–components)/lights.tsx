"use client"
import { useHelper } from '@react-three/drei';
import { useRef } from 'react';
import { CameraHelper, DirectionalLight, DirectionalLightHelper, OrthographicCamera } from 'three'
import { useShadowHelper } from '../(hooks)/use-camera-shadow-helper';

export const SunlightSource = () => {
    const light2 = useRef<DirectionalLight>(null!);
    return (
        <>
            <directionalLight shadow-normalBias={0.05} ref={light2} color={0xffffff} intensity={0} castShadow shadow-mapSize={[1024, 1024]} position={[-1.5, 16, 3]}>
                <orthographicCamera attach='shadow-camera' args={[-20, 20, 20, -20, 0.1, 25]} />
            </directionalLight>
        </>
    )
};