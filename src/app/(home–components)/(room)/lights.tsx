"use client"
import { useHelper } from '@react-three/drei';
import { dir } from 'console';
import { ComponentProps, use, useRef } from 'react';
import { CameraHelper, DirectionalLight, DirectionalLightHelper, Object3D, OrthographicCamera, PointLight, PointLightHelper } from 'three'
import { useShadowHelper } from '../../(hooks)/use-camera-shadow-helper';
import { useSpring, animated, config, AnimatedComponent } from '@react-spring/three'


export const SunlightSource = () => {
    const light2 = useRef<DirectionalLight>(new DirectionalLight());
    // useHelper(light2, DirectionalLightHelper, 0.2, 'hotpink');

    return (
        <directionalLight shadow-normalBias={0.05} ref={light2} color={0xffffff} intensity={1} shadow-mapSize={[4096, 4096]} position={[-1.5, 7, 3]}>
            {/* <orthographicCamera attach='shadow-camera' args={[-20, 20, 20, -20, 0.1, 25]} /> */}
        </directionalLight>
    )
};

export const LampLightSource = (lightProps: ComponentProps<typeof animated.pointLight>) => {
    const light1 = useRef<PointLight>(null!);
    // useHelper(light1, PointLightHelper, 0.2, 'hotpink');

    return (
        <animated.pointLight {...lightProps} ref={light1} shadow-normalBias={0.05} color={0xFFE664} castShadow shadow-mapSize={[4096, 4096]}>
            <perspectiveCamera attach='shadow-camera' fov={90} near={0.1} far={1000} />
        </animated.pointLight>
    )
};
