"use client"
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, OrthographicCamera as OrthographicCameraComponent } from '@react-three/drei'
import { Box } from './box'
import { RoomModel } from './room'
import { MouseEventHandler, useCallback, useEffect, useRef } from 'react'
import { useContainerDimensions } from '@/app/(hooks)/use-resize-observer'
import { Euler, OrthographicCamera, Vector3 } from 'three'
import { SunlightSource } from '@/app/(home–components)/lights'
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
      <Canvas shadows >
        <OrthographicCameraComponent
          makeDefault
          args={[(-aspectRatio * 3.5) / 2, (aspectRatio * 3.5) / 2, 3.5 / 2, -3.5 / 2, -50, 50]}
          rotation={cameraRotation}
          zoom={20}
          position={[0, 10, 5]}
        />
        <SunlightSource />
        <RoomModel rotation={props.rotateY.to(interpolateRotation) as unknown as [number, number, number]} position={[-1, 0, 0]} />
        {/* <OrbitControls ref={orbitControlsRef} /> */}
      </Canvas>
    </div>
  )
}