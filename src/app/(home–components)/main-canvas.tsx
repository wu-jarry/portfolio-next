"use client"
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, OrthographicCamera as OrthographicCameraComponent } from '@react-three/drei'
import { Box } from './box'
import { RoomModel } from './(room)/room3'
import React, { MouseEventHandler, useCallback, useEffect, useRef, useState } from 'react'
import { useContainerDimensions } from '@/app/(hooks)/use-resize-observer'
import { AmbientLight, DirectionalLight, Euler, OrthographicCamera, RectAreaLight, Vector3 } from 'three'
import { SunlightSource, LampLightSource, RectAreaLightSource } from '@/app/(home–components)/(room)/lights'
import { setFloor } from '@/app/(home–components)/floor'
import { useSpring, config } from '@react-spring/three'
import { animated, AnimatedComponent } from '@react-spring/three'
import { Stage } from '@react-three/drei'


const cameraRotation = new Euler(-Math.PI/6, Math.PI/4, 0, 'YXZ');

const calcRotation = (clientX: number) => ((clientX - window.innerWidth / 2) * 0.2) / window.innerWidth;
const interpolateRotation = (rotateY: number) => [0, rotateY, 0] as const;


export enum AnimationStates {
  START = 0,
  LIGHTS_ON,
}

export const MainCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { aspectRatio } = useContainerDimensions(containerRef);

  const [props, set] = useSpring(() => ({
    rotateY: 0,
    config: config.default
  }))

  // TODO: Make this calc relative to the container not the window
  const onMouseMove = useCallback<MouseEventHandler<HTMLDivElement>>(({ clientX, clientY }) => {
    const rotation = calcRotation(clientX);
    set({ rotateY: rotation })

  }, [set]);

  const orbitControlsRef = useRef<any>();
  // console.log("Camera position", orbitControlsRef.current?.object.position);
  // console.log("Camera rotation", orbitControlsRef.current?.object.rotation);

  const [animationState, setAnimationState] = useState(AnimationStates.START);

  const progressAnimationState = useCallback(() => {
    // TODO: Implement animation buffering
    setAnimationState(animationState + 1)
  }, [animationState]);

  useEffect(() => {
    setInterval(progressAnimationState, 0);
  }, [progressAnimationState]);

  return (
    <div ref={containerRef} className='w-full h-full' onMouseMove={onMouseMove}>
      <Canvas shadows>
        {setFloor()}
        <OrthographicCameraComponent
          makeDefault
          rotation={cameraRotation}
          zoom={270}
          position={[2, 1.8, 2]}
          args={[(-aspectRatio * 3.5) / 2, (aspectRatio * 3.5) / 2, 3.5 / 2, -3.5 / 2, -50, 50]}
        />
        <SunlightSource />
        <hemisphereLight color={'skyColor'} intensity={0.5} />
        <RectAreaLightSource />
        <RoomModel
          {...{ animationState, progressAnimationState }}
          rotation={props.rotateY.to(interpolateRotation) as unknown as [number, number, number]}
          position={[-0.1, -0.7, 0]}
          scale={[0.11, 0.11, 0.11]}
        />
        <OrbitControls
          ref={orbitControlsRef}
          position = {[0, 0, 0]}
        />
      </Canvas>
    </div>
  )
}

