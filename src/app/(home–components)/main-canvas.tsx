"use client"
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, OrthographicCamera as OrthographicCameraComponent, Text, Svg, Html } from '@react-three/drei'
import { RoomModel } from './(room)/room3'
import React, { MouseEventHandler, useCallback, useEffect, useRef, useState } from 'react'
import { useContainerDimensions } from '@/app/(hooks)/use-resize-observer'
import { AmbientLight, DirectionalLight, Euler, OrthographicCamera, Raycaster, RectAreaLight, Vector3 } from 'three'
import { SunlightSource, LampLightSource, RectAreaLightSource, HemisphereLightSource } from '@/app/(home–components)/(room)/lights'
import { SetFloor } from '@/app/(home–components)/floor'
import { useSpring, config } from '@react-spring/three'
import { animated, AnimatedComponent } from '@react-spring/three'
import { Stage } from '@react-three/drei'


const cameraRotation = new Euler(-Math.PI/6, Math.PI/4, 0, 'YXZ');

const calcRotation = (clientX: number) => ((clientX - window.innerWidth / 2) * 0.2) / window.innerWidth;
const interpolateRotation = (rotateY: number) => [0, rotateY, 0] as const;


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

  return (
    <div ref={containerRef} className='w-full h-full' onMouseMove={onMouseMove}>
      <Canvas shadows>
        <SetFloor />
        <OrthographicCameraComponent
          makeDefault
          rotation={cameraRotation}
          zoom={270}
          position={[2, 1.8, 2]}
          args={[(-aspectRatio * 3.5) / 2, (aspectRatio * 3.5) / 2, 3.5 / 2, -3.5 / 2, -50, 50]}
        />
        <SunlightSource />
        <HemisphereLightSource/>
        <RoomModel {...{ }}
          rotation={props.rotateY.to(interpolateRotation) as unknown as [number, number, number]}
          position={[-0.1, -0.7, 0]}
          scale={[0.11, 0.11, 0.11]}
        />
        {/* <OrbitControls
          ref={orbitControlsRef}
          position = {[0, 0, 0]}
        /> */}
      <Text
          position={[1, 1.30, 3]} // Position [x,y,z] in the scene
          rotation={[0, 0.75, 0]} // Rotation [x,y,z] in the scene
          color="black" // Text color
          fontSize={0.1} // Font size
          maxWidth={4} // Max width of the text before wrapping to a new line
          lineHeight={1} // Line height of the text
          letterSpacing={0.02} // Letter spacing
          textAlign="center" // Text alignment: 'left', 'center', or 'right'
          font="/path/to/font.ttf" // Path to the font file, or use a system font
        >
          <Text fontSize={0.15} lineHeight={1.5} color={"black"}>
            Hello, {"\n"}
          </Text>
          Welcome to my Room!
      </Text>
      </Canvas>
    </div>
  )
}

