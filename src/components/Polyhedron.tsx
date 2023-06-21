import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface PolyhedronProps {
    type: string;
}

type PolyhedronType = 'tetrahedron' | 'cube' | 'octahedron' | 'dodecahedron' | 'icosahedron';

const Polyhedron: React.FC<PolyhedronProps> = ({ type }) => {
    const containerRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      if (containerRef.current) {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);

        const polyhedronTypes: Record<PolyhedronType, THREE.BufferGeometry> = {
            tetrahedron: new THREE.TetrahedronGeometry(1.5, 0),
            cube: new THREE.BoxGeometry(1.5, 1.5, 1.5),
            octahedron: new THREE.OctahedronGeometry(1.5, 0),
            dodecahedron: new THREE.DodecahedronGeometry(1.5, 0),
            icosahedron: new THREE.IcosahedronGeometry(1.5, 0),
        };
  
        const geometry = polyhedronTypes[type as PolyhedronType];

        const edges = new THREE.EdgesGeometry(geometry);
        const poly = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x00ff00 } ) );

        poly.position.x = -0.5;
        poly.position.y = 0;
        poly.position.z = 0;

        poly.rotation.x = -0.1;
        poly.rotation.y = -0.2;
        poly.rotation.z = 0.2;

        scene.add(poly);
  
        camera.position.z = 5;
  
        const animate = () => {
          requestAnimationFrame(animate);
  
          poly.rotation.x += 0.004;
          poly.rotation.y -= 0.0025;
          poly.rotation.z -= 0.0001;
  
          renderer.render(scene, camera);
        };
  
        animate();
      }
    });
  
    return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
  };

export default Polyhedron