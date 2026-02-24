import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

// Animated 3D sphere component
function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={2.5}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#4C9AFF"
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

// Additional floating elements
function FloatingElements() {
  return (
    <>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[3, 2, -2]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial
            color="#C084FC"
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </Float>
      
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[-3, -1, -1]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial
            color="#34D399"
            roughness={0.3}
            metalness={0.7}
          />
        </mesh>
      </Float>
    </>
  );
}

// Loading fallback
function Loader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-pulse text-primary">Loading 3D Scene...</div>
    </div>
  );
}

export function Scene3D() {
  return (
    <div className="h-full w-full absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#C084FC" />
          
          <AnimatedSphere />
          <FloatingElements />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}