'use client'

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations ,} from '@react-three/drei'

export default function ElephantModel(props) {
  const group = useRef()

  // Load the animated elephant (model + animation already baked)
  const { scene, animations } = useGLTF('/models/HappyElephant.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    scene.traverse(obj => {
      obj.frustumCulled = false // avoid disappearing when off-screen
    })

    // Play the first animation
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = actions[Object.keys(actions)[0]]
      firstAction.reset().play()
    }
  }, [actions, scene])

  return <primitive ref={group} object={scene} {...props} />
}
