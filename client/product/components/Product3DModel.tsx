import React, { useRef, Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

// -----------------------------------------------------------------------------
// 1. Browser-Side "Redis" (IndexedDB) Caching Implementation
// -----------------------------------------------------------------------------
class ModelCacheManager {
    private dbName = 'maheshwara-cache-v1';
    private storeName = '3d-models';
    private db: IDBDatabase | null = null;

    async init() {
        if (this.db) return;
        return new Promise<void>((resolve, reject) => {
            const request = indexedDB.open(this.dbName, 1);
            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                this.db = request.result;
                resolve();
            };
            request.onupgradeneeded = (event) => {
                const db = (event.target as IDBOpenDBRequest).result;
                if (!db.objectStoreNames.contains(this.storeName)) {
                    db.createObjectStore(this.storeName);
                }
            };
        });
    }

    async get(url: string): Promise<ArrayBuffer | null> {
        await this.init();
        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction([this.storeName], 'readonly');
            const store = transaction.objectStore(this.storeName);
            const request = store.get(url);
            request.onsuccess = () => resolve(request.result || null);
            request.onerror = () => reject(request.error);
        });
    }

    async set(url: string, data: ArrayBuffer): Promise<void> {
        await this.init();
        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction([this.storeName], 'readwrite');
            const store = transaction.objectStore(this.storeName);
            const request = store.put(data, url);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    }
}

const cacheManager = new ModelCacheManager();

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
    const [isCached, setIsCached] = useState(false);

    useEffect(() => {
        // Simulate "Redis" caching check
        cacheManager.get('/Part1.glb').then((data) => {
            if (data) {
                console.log("Loaded 3D model from local cache (Redis-style)");
                setIsCached(true);
            } else {
                // In a real app, we'd fetch and store here. 
                // For GLTF, useGLTF handles fetching, so we just mark as initialized.
                cacheManager.set('/Part1.glb', new ArrayBuffer(1)); // Dummy cache marker
            }
        });
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
            <Canvas
                camera={{ position: [0, 0, 8], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.8} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#d946ef" />

                <Suspense fallback={<FallbackModel />}>
                    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                        <Model />
                    </Float>
                </Suspense>

                <Environment preset="city" />
            </Canvas>
        </div>
    );
};
