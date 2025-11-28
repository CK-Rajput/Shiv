import React, { useRef, Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

// Removed IndexedDB caching to improve initial load performance

// -----------------------------------------------------------------------------
// 2. 3D Model Component
// -----------------------------------------------------------------------------
function Model(props: any) {
    const { scene } = useGLTF('/Part1.glb');
    const modelRef = useRef<THREE.Group>(null);

    // Apply materials for better visibility
    useEffect(() => {
        scene.traverse((child: any) => {
            if (child.isMesh) {
                child.material = new THREE.MeshStandardMaterial({
                    color: new THREE.Color(0xa855f7), // Purple
                    emissive: new THREE.Color(0x8b5cf6),
                    emissiveIntensity: 0.4,
                    metalness: 0.9,
                    roughness: 0.1,
                });
            }
        });
    }, [scene]);

    useFrame((state) => {
        if (!modelRef.current) return;

        const scrollY = window.scrollY;
        const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
        const scrollProgress = Math.max(0, Math.min(1, scrollY / maxScroll));
        const time = state.clock.getElapsedTime();

        // Scroll-based rotation + Continuous floating
        modelRef.current.rotation.y = scrollProgress * Math.PI * 2 + time * 0.2;
        modelRef.current.rotation.x = Math.sin(time * 0.3) * 0.2;
        modelRef.current.position.y = Math.sin(time * 0.5) * 0.5;
    });

    return <primitive object={scene} ref={modelRef} scale={2.5} {...props} />;
}

// Preload
useGLTF.preload('/Part1.glb');

// -----------------------------------------------------------------------------
// 3. Fallback Component (Visible Placeholder)
// -----------------------------------------------------------------------------
function FallbackModel() {
    const meshRef = useRef<THREE.Mesh>(null);
    useFrame((state) => {
        if (!meshRef.current) return;
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.x = time * 0.5;
        meshRef.current.rotation.y = time * 0.3;
    });

    return (
        <mesh ref={meshRef} scale={1.5}>
            <torusKnotGeometry args={[1, 0.3, 100, 16]} />
            <meshStandardMaterial color="#a855f7" emissive="#6b21a8" emissiveIntensity={0.5} wireframe />
        </mesh>
    );
}

// -----------------------------------------------------------------------------
// 4. Main Component
// -----------------------------------------------------------------------------
export const Product3DModel = () => {
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        // Delay 3D model loading to prioritize content rendering
        const timer = setTimeout(() => {
            setShouldLoad(true);
        }, 100); // Small delay to ensure content renders first

        return () => clearTimeout(timer);
    }, []);

    // Don't render until we're ready - prevents blocking
    if (!shouldLoad) {
        return null;
    }

    return (
        <div 
            className="fixed inset-0 pointer-events-none" 
            style={{ 
                zIndex: 1, 
                isolation: 'isolate',
                pointerEvents: 'none'
            }}
        >
            <Canvas
                camera={{ position: [0, 0, 8], fov: 45 }}
                gl={{ 
                    antialias: false, // Disable for faster initial render
                    alpha: true, 
                    preserveDrawingBuffer: false,
                    powerPreference: "high-performance",
                    stencil: false,
                    depth: true
                }}
                dpr={[1, 2]} // Limit pixel ratio for performance
                performance={{ min: 0.5 }} // Lower performance threshold
                style={{ 
                    background: 'transparent', 
                    pointerEvents: 'none',
                    width: '100%',
                    height: '100%'
                }}
            >
                <ambientLight intensity={0.8} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#d946ef" />

                <Suspense fallback={null}>
                    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                        <Model />
                    </Float>
                </Suspense>

                {/* Remove Environment to speed up loading */}
            </Canvas>
        </div>
    );
};
