import React from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

export default function ElephantModel(props) {
  const gltf = useLoader(GLTFLoader, '/models/elephant.glb', (loader) => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/draco/') // Put your decoder files here
    loader.setDRACOLoader(dracoLoader)
  })

  return <primitive object={gltf.scene} {...props} />
}
