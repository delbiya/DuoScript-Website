import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {  OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function FloatingStep({ position, }: { position: [number, number, number]; text: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.2} />
    </mesh>
  );
}

export default function SetupGuide() {
  return (
    <div className="relative">
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-[400px]">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <FloatingStep position={[-2, 1, 0]} text="1" />
          <FloatingStep position={[-1, 0, 0]} text="2" />
          <FloatingStep position={[0, 1, 0]} text="3" />
          <FloatingStep position={[1, 0, 0]} text="4" />
          <FloatingStep position={[2, 1, 0]} text="5" />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      <div className="relative z-10 bg-gradient-to-r from-white via-white/90 to-transparent">
        <h2 className="text-3xl font-bold mb-8">Quick Setup Guide</h2>
        
        <div className="space-y-6 max-w-xl">
          <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
            <h3 className="font-semibold mb-2">Step 1: Install Node.js</h3>
            <p className="text-gray-600 mb-2">Download and install Node.js from the official website.</p>
            <code className="block bg-gray-800 text-white p-2 rounded">
              node -v && npm -v
            </code>
          </div>

          <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
            <h3 className="font-semibold mb-2">Step 2: Install DuoScript CLI</h3>
            <code className="block bg-gray-800 text-white p-2 rounded">
              npm install duoscript
            </code>
          </div>

          <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
            <h3 className="font-semibold mb-2">Step 3: Create Project</h3>
            <code className="block bg-gray-800 text-white p-2 rounded">
              mkdir my-duoscript-project<br />
              cd my-duoscript-project<br />
              npm init
            </code>
          </div>

          <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
            <h3 className="font-semibold mb-2">Step 4: Create Main File</h3>
            <p className="text-gray-600 mb-2">Create main.ds and start coding!</p>
          </div>

          <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
            <h3 className="font-semibold mb-2">Step 5: Transpile and Run</h3>
            <code className="block bg-gray-800 text-white p-2 rounded">
              npx dsc main.ds<br />
              node main.js
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}