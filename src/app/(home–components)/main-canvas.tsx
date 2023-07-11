"use client"
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Box } from './box'
import { RoomModel } from './room'
import { useEffect, useRef } from 'react'
import { useContainerDimensions } from '@/app/(hooks)/use-resize-observer'
import { Euler, OrthographicCamera, Vector3 } from 'three'
// 
// const orthographicCamera = new OrthographicCamera(-1, 1, 3.5 / 2, -3.5 / 2);

const createOrthographicCamera = (aspectRatio: number) => {
  const orthographicCamera = new OrthographicCamera((-aspectRatio * 3.5) / 2, (aspectRatio * 3.5) / 2, 3.5 / 2, -3.5 / 2, -50, 50);
  orthographicCamera.setRotationFromEuler(new Euler(-Math.PI / 6));
  orthographicCamera.translateY(3);
  orthographicCamera.translateZ(5);
  orthographicCamera.zoom = 20;
  return orthographicCamera;
}

export const MainCanvas = () => {
  // Write code to get the aspect ratio of the container.

  const containerRef = useRef<HTMLDivElement>(null);
  const { aspectRatio } = useContainerDimensions(containerRef);
  const orthographicCamera = useRef(createOrthographicCamera(aspectRatio));

  useEffect(() => {
    orthographicCamera.current.left = (-aspectRatio * 3.5) / 2;
    orthographicCamera.current.right = (aspectRatio * 3.5) / 2;
  }, [aspectRatio])

  return (
    <div ref={containerRef} className='w-full h-full' onClick={() => console.log(orthographicCamera)}>
      <Canvas camera={orthographicCamera.current} >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <RoomModel position={[-1, 0, 0]} />
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  )
}