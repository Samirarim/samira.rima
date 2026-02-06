'use client'

import { ParticleFieldProps } from '@/types/portfolio'
import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

export default function ParticleField({ mouse }: ParticleFieldProps) {
  const points = useRef<THREE.Points>(null)
  const particleCount = 2000

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50
    }
    return pos
  }, [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (points.current) {
      points.current.rotation.y = time * 0.05
      points.current.rotation.x = mouse.y * 0.0002
      
      const positions = points.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        const x = positions[i3]
        const y = positions[i3 + 1]
        
        positions[i3 + 1] = y + Math.sin(time + x) * 0.01
      }
      points.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#00ffcc" // Three.js requires hex color value
        sizeAttenuation
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
