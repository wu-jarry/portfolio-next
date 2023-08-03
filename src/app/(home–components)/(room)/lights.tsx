"use client"
import { useHelper } from '@react-three/drei';
import { dir } from 'console';
import { ComponentProps, use, useRef, useEffect, useState } from 'react';
import { CameraHelper, DirectionalLight, DirectionalLightHelper, Object3D, OrthographicCamera, PointLight, PointLightHelper, RectAreaLight } from 'three'
import { useShadowHelper } from '../../(hooks)/use-camera-shadow-helper';
import { useSpring, animated, config, AnimatedComponent } from '@react-spring/three'
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper';

export const SunlightSource = () => {
    const light1 = useRef<DirectionalLight>(new DirectionalLight());
    // useHelper(light1, DirectionalLightHelper, 0.2, 'hotpink');

    return (
        <directionalLight shadow-normalBias={0.05} ref={light1} color={0xffffff} intensity={1} castShadow shadow-mapSize={[4096, 4096]} position={[1.5, 5, 3]}>
            {/* <orthographicCamera attach='shadow-camera' args={[-20, 20, 20, -20, 0.1, 25]} /> */}
        </directionalLight>
    )
};

export const LampLightSource = (lightProps: ComponentProps<typeof animated.pointLight>) => {
    const light2 = useRef<PointLight>(null!);
    // useHelper(light2, PointLightHelper, 0.2, 'hotpink');

    return (
        <animated.pointLight {...lightProps} ref={light2} shadow-normalBias={0.05} color={0xFFE664} castShadow shadow-mapSize={[4096, 4096]}>
            <perspectiveCamera attach='shadow-camera' fov={90} near={0.1} far={1000} />
        </animated.pointLight>
    )
};

export const RectAreaLightSource = (lightProps: ComponentProps<typeof animated.rectAreaLight>) => {
    const light3 = useRef<RectAreaLight>(null!);
    // useHelper(light3, RectAreaLightHelper, 0.2);
    
    const [isVisible, setIsVisible] = useState(false);
    const delay = 5000; // Delay in milliseconds before the light turns on
  
    useEffect(() => {
      // Start the timeout for the delay
      const timeoutId = setTimeout(() => {
        setIsVisible(true); // Turn on the light after the delay
      }, delay);
  
      // Clear the timeout if the component unmounts before the delay is over
      return () => clearTimeout(timeoutId);
    }, []);
  
    if (!isVisible) {
      return null; // If the light is not visible yet, don't render it
    }

    return(
        <rectAreaLight ref={light3} color={0xFFFFFF} intensity={5} width={0.5} height={0.25} position={[0.48, 0, -0.75]} rotation={[-Math.PI/2, 0, 0]}/>
    )
};