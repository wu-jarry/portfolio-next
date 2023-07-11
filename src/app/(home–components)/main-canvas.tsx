"use client"
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Box } from './box'
import { RoomModel } from './room'

export const MainCanvas = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <RoomModel />
      <OrbitControls />
    </Canvas>
  )
}