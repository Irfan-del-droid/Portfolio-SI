import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AiBrain = ({ scale = 2, position = [0, 0, 0] }) => {
  const sphereRef = useRef();
  const groupRef = useRef();
  const particlesRef = useRef([]);
  const lightningsRef = useRef([]);

  // Create lightning bolts
  useEffect(() => {
    const createLightning = () => {
      const lightningPoints = [];
      let current = new THREE.Vector3(0, 2, 0);
      const target = new THREE.Vector3(0, -2, 0);

      while (current.y > target.y - 0.5) {
        lightningPoints.push(current.clone());
        current = current.clone().add(
          new THREE.Vector3(
            (Math.random() - 0.5) * 1,
            -0.3,
            (Math.random() - 0.5) * 1
          )
        );
      }
      lightningPoints.push(target);
      return lightningPoints;
    };

    if (groupRef.current) {
      lightningsRef.current = Array(3).fill(null).map(() => createLightning());
    }
  }, []);

  // Create particles
  useEffect(() => {
    particlesRef.current = Array(100).fill(null).map(() => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6
      ),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      ),
      life: Math.random() * 100,
      maxLife: 100,
    }));
  }, []);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.001;
      sphereRef.current.rotation.y += 0.002;
    }

    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }

    // Update particles
    particlesRef.current.forEach((particle) => {
      particle.position.add(particle.velocity);
      particle.life -= 1;

      if (particle.life <= 0) {
        particle.position = new THREE.Vector3(
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6
        );
        particle.life = particle.maxLife;
      }
    });
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Core Sphere */}
      <Sphere ref={sphereRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#00d4ff"
          wireframe={false}
          distort={0.3}
          speed={2}
          metalness={0.8}
          roughness={0.2}
          emissive="#00d4ff"
          emissiveIntensity={0.5}
        />
      </Sphere>

      {/* Outer glow sphere */}
      <Sphere args={[1.3, 32, 32]}>
        <meshBasicMaterial
          color="#b300ff"
          transparent={true}
          opacity={0.2}
          wireframe={true}
        />
      </Sphere>

      {/* Lightning bolts */}
      {lightningsRef.current.map((lightningPoints, idx) => (
        <group key={`lightning-${idx}`}>
          <lineSegments>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={lightningPoints.length}
                array={new Float32Array(
                  lightningPoints.flatMap((p) => [p.x, p.y, p.z])
                )}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial
              color="#00d4ff"
              linewidth={2}
              emissive="#00d4ff"
            />
          </lineSegments>
        </group>
      ))}

      {/* Rotating rings */}
      <group rotation={[Math.PI / 4, 0, 0]}>
        <ringGeometry args={[1.5, 1.7, 32]} />
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.6} />
      </group>

      <group rotation={[0, Math.PI / 4, 0]}>
        <ringGeometry args={[1.6, 1.8, 32]} />
        <meshBasicMaterial color="#b300ff" transparent opacity={0.4} />
      </group>

      {/* Particle system */}
      {particlesRef.current.map((particle, idx) => (
        <mesh
          key={`particle-${idx}`}
          position={particle.position}
          scale={0.05}
        >
          <sphereGeometry args={[1, 8, 8]} />
          <meshBasicMaterial
            color="#00d4ff"
            emissive="#00d4ff"
            transparent
            opacity={particle.life / particle.maxLife}
          />
        </mesh>
      ))}
    </group>
  );
};

export default AiBrain;
