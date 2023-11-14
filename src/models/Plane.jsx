import React from 'react'

import planeScene from '../assets/3d/plane.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

const Plane = ({ isRotating, ...props }) => {
    const { scene, animations } = useGLTF(planeScene)
    const { actions } = useAnimations(animations, scene)
    return (
        <mesh {...props}>
            <primitive object={scene}></primitive>
        </mesh>
    )
}

export default Plane