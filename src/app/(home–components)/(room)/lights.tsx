"use client"
import * as THREE from 'three'
import { CameraHelper, DirectionalLight, DirectionalLightHelper, HemisphereLight, Object3D, OrthographicCamera, PointLight, PointLightHelper, RectAreaLight, SpotLight, SpotLightHelper } from 'three'
import { useHelper } from '@react-three/drei';
import { dir } from 'console';
import { ComponentProps, useRef, useEffect, useState, useMemo } from 'react';
import { useShadowHelper } from '../../(hooks)/use-camera-shadow-helper';
import { useSpring, animated, config, AnimatedComponent } from '@react-spring/three'
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper';

export const SunlightSource = () => {
    const light1 = useRef<DirectionalLight>(new DirectionalLight());
    // useHelper(light1, DirectionalLightHelper, 0.2, 'hotpink');

    return (
        <directionalLight shadow-normalBias={0.05} ref={light1} color={0xffffff} intensity={0.5} castShadow shadow-mapSize={[4096, 4096]} position={[1.5, 5, 3]}>
            {/* <orthographicCamera attach='shadow-camera' args={[-20, 20, 20, -20, 0.1, 25]} /> */}
        </directionalLight>
    )
};

export const LampLightSource = (lightProps: ComponentProps<typeof animated.spotLight>) => {
    const light2 = useRef<SpotLight>(null!);
    const light2_1 = useRef<SpotLight>(null!);
    const light2_1Target = new THREE.Object3D();
    light2_1Target.position.set(0, 0, 0);
    
    // useHelper(light2, SpotLightHelper, 0.2);
    // useHelper(light2_1, SpotLightHelper, 0.2);

    return (
        <>
        <animated.spotLight 
            {...lightProps} 
            ref={light2} 
            color={0xFFE664} 
            distance={50} 
            angle={Math.PI/8} 
            position={[0, 30, 0]} 
            penumbra={1} 
            castShadow={true} 
            shadow-mapSize={[4096, 4096]} 
            shadow-normalBias={0.05}
        >
            <perspectiveCamera attach='shadow-camera' fov={90} near={0.1} far={5000} />
        </animated.spotLight>

        <animated.spotLight
            {...lightProps}
            ref={light2_1}
            color={0xFFE664}
            distance={10} 
            angle={Math.PI / 2}
            position={[0, -30, 0]}
            target={light2_1Target}
            penumbra={1}
            castShadow={true}
            shadow-mapSize={[4096, 4096]}
            shadow-normalBias={0.05}
        >
            <perspectiveCamera attach='shadow-camera' fov={90} near={0.1} far={5000} />
        </animated.spotLight>
        </>
    )

    // const light2 = useRef<PointLight>(null!);
    // // useHelper(light2, PointLightHelper, 0.2, 'hotpink');

    // return (
    //     <animated.pointLight {...lightProps} ref={light2} shadow-normalBias={0.05} color={0xFFE664} castShadow shadow-mapSize={[4096, 4096]}>
    //         <perspectiveCamera attach='shadow-camera' fov={90} near={0.1} far={1000} />
    //     </animated.pointLight>
    // )
};

export const RectAreaLightSource = ({ animationsFinished }: { animationsFinished: boolean }) => {
  const light3 = useRef<RectAreaLight>(null!);

  return (
    <>
      {animationsFinished && (
        <rectAreaLight
          ref={light3}
          color={0xFFFFFF}
          intensity={5}
          width={0.25}
          height={0.25}
          position={[0.48, 0, -0.75]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      )}
    </>
  );
};  

export const HemisphereLightSource = (lightProps: ComponentProps<typeof animated.hemisphereLight>) => {
    const light4 = useRef<HemisphereLight>(null!);
    // useHelper(light4, RectAreaLightHelper, 0.2);

    return(
        <animated.hemisphereLight ref={light4} color={0x7CB8C2} intensity={0.2}/>
    )
};

// export const ObjectSpotLightSource = (lightProps: ComponentProps<typeof animated.spotLight>) => {
//   const light5 = useRef<SpotLight>(null!);
//   // useHelper(light5, SpotLightHelper, 0.2);

//   const light5Target = new THREE.Object3D();
//   light5Target.position.set(-0.8, -0.5, 0.3);

//   return (
//     <animated.spotLight 
//       {...lightProps} 
//       ref={light5} 
//       color={'red'} 
//       distance={10} 
//       angle={Math.PI/8} 
//       position={[2, 3, 0.6]} 
//       target={light5Target}
//       castShadow={false}
//       penumbra={1} 
//       shadow-mapSize={[4096, 4096]} 
//       shadow-normalBias={0.05}
//     >
//       <perspectiveCamera attach='shadow-camera' fov={90} near={0.1} far={5000} />
//     </animated.spotLight>
//   )
// };

export const ObjectSpotLightSource = (lightProps: ComponentProps<typeof animated.spotLight>) => {
  const light5 = useRef<SpotLight>(null!);
  // const light5Target = new THREE.Object3D();
  // light5Target.position.set(-0.8, -0.5, 0.3);
  
  // useHelper(light5, SpotLightHelper, 0.2);
  
  // useEffect(() => {
  //   if(light5.current){
  //     light5.current.target = light5Target;
  //   }
  // });

  return (
      <>
      <animated.spotLight 
          {...lightProps} 
          ref={light5} 
          color={'red'} 
          distance={20}
          angle={Math.PI/29} 
          position={[20, 4, -8.5]} 
          // target={light5Target}
          penumbra={1} 
          castShadow={true} 
          shadow-mapSize={[4096, 4096]} 
          shadow-normalBias={0.05}
      >
          <perspectiveCamera attach='shadow-camera' fov={90} near={0.1} far={5000} />
      </animated.spotLight>
      </>
  )
};