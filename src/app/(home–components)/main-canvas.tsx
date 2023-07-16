"use client"
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, OrthographicCamera as OrthographicCameraComponent } from '@react-three/drei'
import { Box } from './box'
import { RoomModel } from './(room)/room'
import { MouseEventHandler, useCallback, useEffect, useRef } from 'react'
import { useContainerDimensions } from '@/app/(hooks)/use-resize-observer'
import { AmbientLight, DirectionalLight, Euler, OrthographicCamera, Vector3 } from 'three'
import { SunlightSource, LampLightSource } from '@/app/(home–components)/(room)/lights'
import { setFloor } from '@/app/(home–components)/floor'
import { useSpring, config } from '@react-spring/three'
// 
import { Stage } from '@react-three/drei'


const cameraRotation = new Euler(-Math.PI / 6)


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

  return (
    <div ref={containerRef} className='w-full h-full' onMouseMove={onMouseMove}>
      <Canvas shadows>
        {setFloor()}
        <OrthographicCameraComponent
          makeDefault
          args={[(-aspectRatio * 3.5) / 2, (aspectRatio * 3.5) / 2, 3.5 / 2, -3.5 / 2, -50, 50]}
          rotation={cameraRotation}
          zoom={250}
          position={[0, 2.4, 5]}
        />
        <ambientLight intensity={0.1} />
        {/* <SunlightSource /> */}
        <RoomModel rotation={props.rotateY.to(interpolateRotation) as unknown as [number, number, number]} position={[-0.1, -0.7, 0]} scale={[0.11, 0.11, 0.11]}/>
        <OrbitControls ref={orbitControlsRef} />
      </Canvas>
    </div>
  )
}

