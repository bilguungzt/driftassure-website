import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const containerRef = useRef();
  const sceneRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();
  const groupRef = useRef();
  const particlesRef = useRef();
  const frameIdRef = useRef();

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050510);
    scene.fog = new THREE.Fog(0x050510, 10, 20);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    rendererRef.current = renderer;

    // Add to DOM
    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x7c5cfc, 1, 100);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x5e38ff, 1, 100);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x1fc77e, 0.5, 100);
    pointLight3.position.set(0, 10, -10);
    scene.add(pointLight3);

    // Create group for all objects
    const group = new THREE.Group();
    scene.add(group);
    groupRef.current = group;

    // Create geometric shapes
    const shapes = [];
    const shapeCount = 8;

    for (let i = 0; i < shapeCount; i++) {
      let geometry;
      const shapeType = Math.floor(Math.random() * 3);

      switch (shapeType) {
        case 0: // Tetrahedron
          geometry = new THREE.TetrahedronGeometry(0.5, 0);
          break;
        case 1: // Octahedron
          geometry = new THREE.OctahedronGeometry(0.5, 0);
          break;
        case 2: // Icosahedron
          geometry = new THREE.IcosahedronGeometry(0.5, 0);
          break;
        default:
          geometry = new THREE.TetrahedronGeometry(0.5, 0);
      }

      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color(
          Math.random() * 0.3 + 0.7,
          Math.random() * 0.3 + 0.4,
          Math.random() * 0.5 + 0.5
        ),
        wireframe: true,
        transparent: true,
        opacity: 0.7,
      });

      const shape = new THREE.Mesh(geometry, material);
      
      // Position randomly in 3D space
      shape.position.x = (Math.random() - 0.5) * 10;
      shape.position.y = (Math.random() - 0.5) * 10;
      shape.position.z = (Math.random() - 0.5) * 10;
      
      // Store original position for floating animation
      shape.userData = {
        originalY: shape.position.y,
        speed: Math.random() * 0.5 + 0.2,
        rotationSpeed: new THREE.Vector3(
          Math.random() * 0.01,
          Math.random() * 0.01,
          Math.random() * 0.01
        )
      };

      group.add(shape);
      shapes.push(shape);
    }

    // Create particle system
    const particleCount = 1000;
    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Position
      posArray[i] = (Math.random() - 0.5) * 20;
      posArray[i + 1] = (Math.random() - 0.5) * 20;
      posArray[i + 2] = (Math.random() - 0.5) * 20;

      // Color - cosmic blues, purples and neons
      const colorChoice = Math.floor(Math.random() * 3);
      switch (colorChoice) {
        case 0: // Purple
          colorArray[i] = 0.8; // R
          colorArray[i + 1] = 0.4; // G
          colorArray[i + 2] = 1.0; // B
          break;
        case 1: // Blue
          colorArray[i] = 0.4; // R
          colorArray[i + 1] = 0.7; // G
          colorArray[i + 2] = 1.0; // B
          break;
        case 2: // Neon green
          colorArray[i] = 0.2; // R
          colorArray[i + 1] = 0.8; // G
          colorArray[i + 2] = 0.5; // B
          break;
      }
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });

    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);
    particlesRef.current = { system: particleSystem, positions: posArray };

    // Mouse move effect
    const handleMouseMove = (event) => {
      if (!cameraRef.current) return;
      
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      cameraRef.current.position.x += (mouseX * 2 - cameraRef.current.position.x) * 0.05;
      cameraRef.current.position.y += (mouseY * 2 - cameraRef.current.position.y) * 0.05;
      cameraRef.current.lookAt(scene.position);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);

      // Rotate shapes
      shapes.forEach(shape => {
        shape.rotation.x += shape.userData.rotationSpeed.x;
        shape.rotation.y += shape.userData.rotationSpeed.y;
        shape.rotation.z += shape.userData.rotationSpeed.z;

        // Floating animation
        shape.position.y = shape.userData.originalY + Math.sin(Date.now() * 0.001 * shape.userData.speed) * 0.5;
      });

      // Animate particles slightly
      const positions = particlesRef.current.system.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(Date.now() * 0.0005 + i) * 0.001;
      }
      particlesRef.current.system.geometry.attributes.position.needsUpdate = true;

      // Rotate group slowly
      group.rotation.x += 0.0005;
      group.rotation.y += 0.0005;

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
      
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      // Dispose of resources
      rendererRef.current?.dispose();
      
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  // Styles for the container
  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  };

 return <div ref={containerRef} style={containerStyle} />;
};

export default ThreeBackground;