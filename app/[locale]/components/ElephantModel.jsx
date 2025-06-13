'use client'

import React, { useEffect, useRef } from 'react'
import { useGLTF, useFBX, useAnimations } from '@react-three/drei'

export default function ElephantModel(props) {
  const group = useRef()

  // 1. Load the rigged T-pose elephant (GLB)
  const { scene: elephantScene } = useGLTF('/models/Tposelephant.glb')

  // 2. Load the Happy.fbx animation (no mesh, just bones)
  const happyFBX = useFBX('/animations/Happy.fbx')

  // 3. Attach animation from FBX onto the elephant model
  const { actions, mixer } = useAnimations(happyFBX.animations, group)

  useEffect(() => {
    // Disable frustum culling so it doesn't disappear off-screen
    elephantScene.traverse((obj) => {
      obj.frustumCulled = false
    })

    // Play the first animation from FBX
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = actions[Object.keys(actions)[0]]
      firstAction.reset().play()
    }
  }, [actions, elephantScene])

  // Set the GLB elephant as the scene
  return <primitive ref={group} object={elephantScene} {...props} />
}
