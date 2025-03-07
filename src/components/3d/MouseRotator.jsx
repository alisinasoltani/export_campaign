'use client'
import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

// Linear interpolation helper
const lerp = (a, b, t) => a * (1 - t) + b * t;

// Modified MouseRotator component
const MouseRotator = ({ children, containerRef }) => {  // Receive containerRef as prop
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const targetRotation = useRef({ x: 0, y: 0 });
  
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!containerRef?.current) return;  // Add null check
            const rect = containerRef.current.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            targetRotation.current = {
                x: (y - 0.5) * Math.PI * 0.5,
                y: (x - 0.5) * Math.PI * 1.0
            };
        };
        // Add event listener to the document instead of container
        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, [containerRef]);  // Add containerRef to dependency array

    useFrame((state, delta) => {
        setRotation(prev => ({
            x: lerp(prev.x, targetRotation.current.x, 0.1),
            y: lerp(prev.y, targetRotation.current.y, 0.1)
        }));
    });
  
    return <group rotation={[rotation.x, rotation.y, 0]}>{children}</group>;
};

export default MouseRotator;