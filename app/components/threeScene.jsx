'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import ElephantModel from './ElephantModel'

export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, -0.9, 4.6], fov: 60 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 2]} />

      <ElephantModel
        position={[0.2, -3.8, 0.4]}
        scale={2.3}
        rotation={[-1.22, 0, 0.3]}
      />
    </Canvas>
  )
}
