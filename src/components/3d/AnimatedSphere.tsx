'use client'

import { AnimatedSphereProps } from '@/types/portfolio'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

export default function AnimatedSphere({ mouse }: AnimatedSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2 + mouse.y * 0.0001
      meshRef.current.rotation.y = time * 0.3 + mouse.x * 0.0001
    }
  })

  return (
    <Sphere ref={meshRef} args={[2, 100, 100]} scale={2.5}>
      <MeshDistortMaterial
        color="#6366f1"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  )
}
