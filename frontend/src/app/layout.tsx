"use client";

import React, { useEffect, useRef } from "react";
import "./globals.css";

import Header from "@/components/Header_Main";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/contexts/AuthContext";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        <title>ReVOLT</title>
      </head>
      <body suppressHydrationWarning={true} style={{ position: "relative" }}>
        <CanvasBackground />
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

// ------------------------------------------
// ------------------------------------------
// ------------------------------------------

interface Particle {
  x: number;
  y: number;
  speed: { x: number; y: number };
  color: string;
  ang: number;
  mag: number;
}

function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const pulseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const particles = particlesRef.current;
    const speed = 5;
    const period = 1000;

    function clear() {
      if (!ctx || !canvas) return;
      ctx.fillStyle = 'rgba(0,0,0,0.07)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function updateParticle(particle: Particle) {
      if (!ctx) return;
      
      ctx.strokeStyle = particle.color;
      ctx.lineWidth = 1;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(particle.x, particle.y);
      
      particle.x += particle.speed.x;
      particle.y += particle.speed.y;
      
      ctx.lineTo(particle.x, particle.y);
      ctx.stroke();

      particle.ang = Math.atan2(particle.speed.y, particle.speed.x);
      particle.mag = Math.sqrt(particle.speed.x ** 2 + particle.speed.y ** 2);
      
      const options = [particle.ang + Math.PI / 4, particle.ang - Math.PI / 4];
      const choice = Math.floor(Math.random() * options.length);
      
      if (Math.random() < 0.05) {
        particle.speed.x = Math.cos(options[choice]) * particle.mag;
        particle.speed.y = Math.sin(options[choice]) * particle.mag;
      }
    }

    function pulse() {
      if (!canvas) return;
      
      pulseTimeoutRef.current = setTimeout(pulse, period);
      // const hue = Math.random() * (210 - 150) + 150;
      
      for (let i = 0; i < 56; i++) {
        particles.push({
          x: canvas.width / 2,
          y: canvas.height / 2,
          speed: {
            x: Math.cos((i / 8) * 2 * Math.PI) * speed,
            y: Math.sin((i / 8) * 2 * Math.PI) * speed,
          },
          color: `hsl(0, 100%, ${Math.random() * (70 - 30) + 30}%)`,
          ang: 0,
          mag: 0,
        });
      }
    }

    function gameMove() {
      if (!canvas) return;
      
      animationFrameRef.current = requestAnimationFrame(gameMove);
      clear();
      
      for (let i = particles.length - 1; i >= 0; i--) {
        updateParticle(particles[i]);
        
        if (
          particles[i].x < 0 ||
          particles[i].x > canvas.width ||
          particles[i].y < 0 ||
          particles[i].y > canvas.height
        ) {
          particles.splice(i, 1);
        }
      }
    }

    pulse();
    gameMove();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (pulseTimeoutRef.current) {
        clearTimeout(pulseTimeoutRef.current);
      }
      particles.length = 0;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'black',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}