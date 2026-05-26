import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const CyberBrain = ({ scale = 1.5, position = [0, 0, 0] }) => {
  const groupRef = useRef();
  const sphereRef = useRef();
  const innerSphereRef = useRef();
  const wireframeRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();
  const lightningGroupRef = useRef();
  const particlesRef = useRef();

  // Lightning bolts geometry
  const lightningGeometries = useMemo(() => {
    const bolts = [];
    for (let b = 0; b < 8; b++) {
      const points = [];
      const angle = (b / 8) * Math.PI * 2;
      const startRadius = 1.1;
      const endRadius = 1.6 + Math.random() * 0.5;
      const startY = Math.random() * 2 - 1;
      const endY = startY + (Math.random() - 0.5) * 0.8;

      const start = new THREE.Vector3(
        Math.cos(angle) * startRadius,
        startY,
        Math.sin(angle) * startRadius
      );
      const end = new THREE.Vector3(
        Math.cos(angle) * endRadius,
        endY,
        Math.sin(angle) * endRadius
      );

      const segments = 8;
      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const point = start.clone().lerp(end, t);
        if (i > 0 && i < segments) {
          point.x += (Math.random() - 0.5) * 0.2;
          point.y += (Math.random() - 0.5) * 0.2;
          point.z += (Math.random() - 0.5) * 0.2;
        }
        points.push(point);
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      bolts.push(geometry);
    }
    return bolts;
  }, []);

  // Particles
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 1.8 + Math.random() * 1.2;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (sphereRef.current) {
      sphereRef.current.rotation.x = t * 0.2;
      sphereRef.current.rotation.y = t * 0.3;
      const s = 1 + Math.sin(t * 1.5) * 0.05;
      sphereRef.current.scale.set(s, s, s);
    }

    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.y = -t * 0.2;
      innerSphereRef.current.rotation.z = t * 0.15;
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = -t * 0.1;
      wireframeRef.current.rotation.y = t * 0.15;
    }

    if (ring1Ref.current) ring1Ref.current.rotation.z = t * 0.4;
    if (ring2Ref.current) ring2Ref.current.rotation.x = t * 0.3;
    if (ring3Ref.current) ring3Ref.current.rotation.y = -t * 0.5;

    if (lightningGroupRef.current) {
      lightningGroupRef.current.rotation.y = t * 0.2;
      lightningGroupRef.current.children.forEach((line, idx) => {
        if (line.material) {
          line.material.opacity = 0.4 + Math.sin(t * 5 + idx * 0.5) * 0.6;
        }
      });
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Core glowing sphere */}
      <mesh ref={sphereRef}>
        <icosahedronGeometry args={[0.7, 4]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={2}
          wireframe={false}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Inner pulsing sphere */}
      <mesh ref={innerSphereRef}>
        <icosahedronGeometry args={[0.85, 2]} />
        <meshBasicMaterial
          color="#b300ff"
          wireframe={true}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Outer wireframe shell */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[1.05, 3]} />
        <meshBasicMaterial
          color="#00d4ff"
          wireframe={true}
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Energy rings */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[1.4, 0.015, 16, 100]} />
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.8} />
      </mesh>

      <mesh ref={ring2Ref} rotation={[0, Math.PI / 3, Math.PI / 4]}>
        <torusGeometry args={[1.55, 0.012, 16, 100]} />
        <meshBasicMaterial color="#b300ff" transparent opacity={0.7} />
      </mesh>

      <mesh ref={ring3Ref} rotation={[Math.PI / 4, Math.PI / 2, 0]}>
        <torusGeometry args={[1.7, 0.01, 16, 100]} />
        <meshBasicMaterial color="#ff006e" transparent opacity={0.6} />
      </mesh>

      {/* Lightning bolts */}
      <group ref={lightningGroupRef}>
        {lightningGeometries.map((geo, i) => (
          <line key={i} geometry={geo}>
            <lineBasicMaterial
              color={i % 2 === 0 ? '#00d4ff' : '#b300ff'}
              transparent
              opacity={0.8}
              linewidth={2}
            />
          </line>
        ))}
      </group>

      {/* Floating particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={200}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          color="#00d4ff"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>
    </group>
  );
};

export default CyberBrain;
