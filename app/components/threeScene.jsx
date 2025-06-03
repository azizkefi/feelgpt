import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import ElephantModel from './ElephantModel'


export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>

      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 2]} />
      <ElephantModel position={[0, 0, 0]} scale={1} />
    </Canvas>
  )
}
