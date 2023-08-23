"use client"
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, OrthographicCamera as OrthographicCameraComponent, Text, Svg, Html } from '@react-three/drei'
import { RoomModel } from './(room)/room3'
import React, { MouseEventHandler, useCallback, useEffect, useRef, useState } from 'react'
import { useContainerDimensions } from '@/app/(hooks)/use-resize-observer'
import { AmbientLight, Camera, DirectionalLight, Euler, OrthographicCamera, Raycaster, RectAreaLight, Vector3 } from 'three'
import { SunlightSource, LampLightSource, RectAreaLightSource, HemisphereLightSource } from '@/app/(home–components)/(room)/lights'
import { SetFloor } from '@/app/(home–components)/floor'
import { useSpring, config } from '@react-spring/three'
import { animated, AnimatedComponent } from '@react-spring/three'
import { lerp } from 'three/src/math/MathUtils'

const calcRotation = (clientX: number) => ((clientX - window.innerWidth / 2) * 0.2) / window.innerWidth;
const interpolateRotation = (rotateY: number) => [0, rotateY, 0] as const;

interface CameraMoveAnimationProps {
  monitorClicked: boolean;
  mailboxClicked: boolean;
  bottleClicked: boolean;
}

const CameraMoveAnimation: React.FC<CameraMoveAnimationProps> = ({ monitorClicked, mailboxClicked, bottleClicked }) => {
  const { camera } = useThree();
  const defaultZoom = 250;
  const defaultPosition = new Vector3(2, 1.88, 2);
  const defaultLookAt = new Vector3(0, 0.2, -0.1)

  const monitorZoom = 1800;
  const monitorPosition = new Vector3(9, 2, 0.2);
  const monitorLookAt = new Vector3(0, 0, 0.3);

  const mailboxZoom = 950;
  const mailboxPosition = new Vector3(10, 8, 30);
  const mailboxLookAt = new Vector3(0, -0.6, 0);

  const bottleZoom = 1500;
  const bottlePosition = new Vector3(15, 10, 30);
  const bottleLookAt = new Vector3(0, 0.5, 0);


  useFrame(() => {
    if (monitorClicked) {
      camera.zoom = lerp(camera.zoom, monitorZoom, 0.05); // Adjust the second parameter for speed
      camera.position.lerp(monitorPosition, 0.05); // Adjust the second parameter for speed
      camera.lookAt(monitorLookAt);
      camera.updateProjectionMatrix();
    }
    else if (mailboxClicked) {
      camera.zoom = lerp(camera.zoom, mailboxZoom, 0.05); // Adjust the second parameter for speed
      camera.position.lerp(mailboxPosition, 0.05); // Adjust the second parameter for speed
      camera.lookAt(mailboxLookAt);
      camera.updateProjectionMatrix();
    }
    else if (bottleClicked) {
      camera.zoom = lerp(camera.zoom, bottleZoom, 0.05); // Adjust the second parameter for speed
      camera.position.lerp(bottlePosition, 0.05); // Adjust the second parameter for speed
      camera.lookAt(bottleLookAt);
      camera.updateProjectionMatrix();
    }
    else {
      const targetQuaternion = new THREE.Quaternion().setFromEuler(new Euler(-Math.PI/6, Math.PI/4, 0, 'YXZ'));
      
      camera.zoom = lerp(camera.zoom, defaultZoom, 0.3); // Adjust the second parameter for speed
      camera.position.lerp(defaultPosition, 0.3); // Adjust the second parameter for speed
      camera.quaternion.slerp(targetQuaternion, 0.3);
      camera.lookAt(defaultLookAt);
      camera.updateProjectionMatrix();
    }
  });

  return null;
};

export const MainCanvas = () => {
  const [objectClicked, setObjectClicked] = useState(false);
  const [monitorClicked, setMonitorClicked] = useState(false);
  const [mailboxClicked, setMailboxClicked] = useState(false);
  const [bottleClicked, setBottleClicked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { aspectRatio } = useContainerDimensions(containerRef);
  const orbitControlsRef = useRef<any>();
  // console.log("Camera position", orbitControlsRef.current?.object.position);
  // console.log("Camera rotation", orbitControlsRef.current?.object.rotation);
  // console.log('Camera zoom', orbitControlsRef.current?.object.zoom);
  const [cameraPosition, setCameraPosition] = useState(new Vector3(2, 1.88, 2));
  const [cameraRotation, setCameraRotation] = useState(new Euler(-Math.PI/6, Math.PI/4, 0, 'YXZ'));
  const [cameraZoom, setCameraZoom] = useState(250);
  const [cameraDisplacement, setCameraDisplacement] = useState(0);

  const text = "Hello World";

  const [props, set] = useSpring(() => ({
    rotateY: 0,
    config: config.default
  }))

  // TODO: Make this calc relative to the container not the window
  const onMouseMove = useCallback<MouseEventHandler<HTMLDivElement>>(({ clientX, clientY }) => {
    const rotation = calcRotation(clientX);
    set({ rotateY: rotation })
  }, [set]);

  return (
    <div ref={containerRef} className='w-full h-full' onMouseMove={onMouseMove}>
      <Canvas 
        shadows
        orthographic
        camera={{
          // position: cameraPosition, 
          // rotation: cameraRotation, 
          // zoom: cameraZoom, 
        }}
      >
        <SetFloor />
        <SunlightSource />
        <HemisphereLightSource/>
        <RoomModel 
          {...{ }}
          onMonitorClicked={() => { setObjectClicked(!objectClicked); setMonitorClicked(!monitorClicked); }}
          onMailboxClicked={() => { setObjectClicked(!objectClicked); setMailboxClicked(!mailboxClicked); }}
          onBottleClicked={() => { setObjectClicked(!objectClicked); setBottleClicked(!bottleClicked);}}
          rotation={objectClicked ? [0, 0, 0] : props.rotateY.to(interpolateRotation) as unknown as [number, number, number]}
          position={[-0.1, -0.7, 0]}
          scale={[0.11, 0.11, 0.11]}
        />
        <CameraMoveAnimation monitorClicked={monitorClicked} mailboxClicked={mailboxClicked} bottleClicked={bottleClicked}/>
        {/* <OrbitControls
          ref={orbitControlsRef}
          position = {new Vector3(2, 1.88, 2)}
        /> */}
         {/* <Html>
          <div className="letter-container" style={{ width: '100%', whiteSpace: 'nowrap', }}>
            {text.split('&nbsp;').map((letter, index) => (
              <div key={index} className="letter" style={{ ...props, animationDelay: `${index * 0.1}s`, display: 'flex' }}>
                {letter}
              </div>
            ))}
          </div>
        </Html> */}
      </Canvas>
    </div>
  )
}