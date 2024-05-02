import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface PolyhedronProps {
  type: string;
}

type PolyhedronType = 'tetrahedron' | 'cube' | 'octahedron' | 'dodecahedron' | 'icosahedron';

const Polyhedron: React.FC<PolyhedronProps> = ({ type }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  // useEffect(() => {
  //   if (containerRef.current) {
  //     if (!rendererRef.current) {
  //       rendererRef.current = new THREE.WebGLRenderer();
  //       rendererRef.current.setSize(window.innerWidth, window.innerHeight);
  //       containerRef.current.appendChild(rendererRef.current.domElement);
  //     }

  //     if (!sceneRef.current) {
  //       sceneRef.current = new THREE.Scene();
  //     }

  //     if (!cameraRef.current) {
  //       cameraRef.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  //       cameraRef.current.position.z = 5;
  //     }

  //     const scene = sceneRef.current;
  //     const camera = cameraRef.current;
  //     const renderer = rendererRef.current;

  //     const polyhedronTypes: Record<PolyhedronType, THREE.BufferGeometry> = {
  //       tetrahedron: new THREE.TetrahedronGeometry(1.5, 0),
  //       cube: new THREE.BoxGeometry(1.5, 1.5, 1.5),
  //       octahedron: new THREE.OctahedronGeometry(1.5, 0),
  //       dodecahedron: new THREE.DodecahedronGeometry(1.5, 0),
  //       icosahedron: new THREE.IcosahedronGeometry(1.5, 0),
  //     };

  //     const geometry = polyhedronTypes[type as PolyhedronType];

  //     const edges = new THREE.EdgesGeometry(geometry);
  //     const poly = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x00ff00 }));

  //     poly.position.x = -0.5;
  //     poly.position.y = 0;
  //     poly.position.z = 0;

  //     poly.rotation.x = -0.1;
  //     poly.rotation.y = -0.2;
  //     poly.rotation.z = 0.2;

  //     scene.add(poly);

  //     const animate = () => {
  //       requestAnimationFrame(animate);

  //       poly.rotation.x += 0.004;
  //       poly.rotation.y -= 0.0025;
  //       poly.rotation.z -= 0.0001;

  //       renderer.render(scene, camera);
  //     };

  //     animate();

  //     return () => {
  //       scene.remove(poly);
  //       poly.geometry.dispose();
  //       poly.material.dispose();
  //     };
  //   }
  // }, [type]);

  return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default Polyhedron;
