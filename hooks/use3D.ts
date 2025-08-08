import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook for creating 3D interactions for luxury LRP cosmetics.
 * This hook initializes a 3D scene using three.js and provides
 * functionality to render interactive elements that reflect the luxury
 * cosmetics brand.
 *
 * @returns {Object} - Contains the ref to attach to the 3D canvas and
 *                     a function to update the scene.
 */
export const use3D = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

    useEffect(() => {
        // Initialize the 3D scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current! });
        
        // Set renderer size and background color
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0xffffff); // White background for luxury feel

        // Create a 3D object (e.g., a luxury cosmetics product)
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshStandardMaterial({ color: 0xffa500 }); // Orange color for luxury LRP cosmetics
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Set camera position
        camera.position.z = 5;

        // Lighting for luxury effect
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(5, 5, 5);
        scene.add(ambientLight);
        scene.add(pointLight);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();

        // Cleanup on component unmount
        return () => {
            renderer.dispose();
            scene.clear();
        };
    }, []);

    return {
        canvasRef,
    };
};