import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import ElephantModel from './ElephantModel'


export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 0.8, 4], fov: 60 }}>

      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 2]} />
      <ElephantModel position={[0, -2.2, 0]} scale={3.4} rotation={[0, Math.PI / 9, 0]}/>
    </Canvas>
  )
}
