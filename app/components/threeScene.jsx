'use client'

import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import ElephantModel from './ElephantModel'

export default function ThreeScene() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Function to check if the screen is mobile-sized
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Mobile settings (your current settings)
  const mobileCamera = { position: [0, -0.9, 4.6], fov: 60 }
  const desktopModel = {
    position: [0, -2, 0.4],
    scale: 2,
    rotation: [-1.22, 0, 0.3],
  }

  // Desktop settings (your provided settings)
  const desktopCamera = { position: [0, -0.9, 4.6], fov: 60 }
  const mobileModel = {
    position: [0, -3.8, 0.4],
    scale: 2.3,
    rotation: [-1.22, 0, 0.3],
  }

  const camera = isMobile ? mobileCamera : desktopCamera
  const modelProps = isMobile ? mobileModel : desktopModel

  return (
    <Canvas camera={camera}>
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 2]} />
      <ElephantModel
        position={modelProps.position}
        scale={modelProps.scale}
        rotation={modelProps.rotation}
      />
    </Canvas>
  )
}
