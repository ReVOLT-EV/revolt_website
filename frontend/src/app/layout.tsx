/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import React, {  } from "react";
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
        {/* <CanvasBackground /> */}
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

// class ParticleType {
//   x: number;
//   y: number;
//   speed: { x: number; y: number };
//   color: string;
//   ang: number = 0;
//   mag: number = 0;

//   constructor(x: number, y: number, speed: { x: number; y: number }, color: string) {
//     this.x = x;
//     this.y = y;
//     this.speed = speed;
//     this.color = color;
//   }

//   upd(ctx: CanvasRenderingContext2D) {
//     ctx.strokeStyle = this.color;
//     ctx.lineWidth = 1;
//     ctx.lineCap = "round";
//     ctx.beginPath();
//     ctx.moveTo(this.x, this.y);
//     this.x += this.speed.x;
//     this.y += this.speed.y;
//     ctx.lineTo(this.x, this.y);
//     ctx.stroke();

//     this.ang = Math.atan2(this.speed.y, this.speed.x);
//     this.mag = Math.sqrt(this.speed.x ** 2 + this.speed.y ** 2);
//     const op = [this.ang + Math.PI / 4, this.ang - Math.PI / 4];
//     const ch = Math.floor(Math.random() * op.length);
//     if (Math.random() < 0.05) {
//       this.speed.x = Math.cos(op[ch]) * this.mag;
//       this.speed.y = Math.sin(op[ch]) * this.mag;
//     }
//   }
// }

// function CanvasBackground() {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const particlesRef = useRef<Array<ParticleType>>([]);
//   const rafRef = useRef<number | null>(null);
//   const pulseIntervalRef = useRef<number | null>(null);

//   useEffect(() => {
//     const can = canvasRef.current;
//     if (!can) return; // defensive check

//     const ctx = can.getContext("2d");
//     if (!ctx) return;

//     function resize() {

//       // @ts-expect-error
//       can.width = window.innerWidth;

//       // @ts-expect-error
//       can.height = window.innerHeight;
//     }
//     // initial size and background
//     resize();
//     can.style.background = "black";

//     // particle helpers and logic
//     function Clear() {

//       // @ts-expect-error
//       ctx.fillStyle = "rgba(0,0,0,0.07)";
//       // @ts-expect-error
//       ctx.fillRect(0, 0, can.width, can.height);
//     }

//     class Particle {
//       x: number;
//       y: number;
//       speed: { x: number; y: number };
//       color: string;
//       ang: number = 0;
//       mag: number = 0;

//       constructor(x: number, y: number, speed: { x: number; y: number }, color: string) {
//         this.x = x;
//         this.y = y;
//         this.speed = speed;
//         this.color = color;
//       }

//       upd() {
//         // @ts-expect-error
//         ctx.strokeStyle = this.color;
//         // @ts-expect-error
//         ctx.lineWidth = 1;
//         // @ts-expect-error
//         ctx.lineCap = "round";
//         // @ts-expect-error
//         ctx.beginPath();
//         // @ts-expect-error
//         ctx.moveTo(this.x, this.y);
//         this.x += this.speed.x;
//         this.y += this.speed.y;
//         // @ts-expect-error
//         ctx.lineTo(this.x, this.y);
//         // @ts-expect-error
//         ctx.stroke();

//         this.ang = Math.atan2(this.speed.y, this.speed.x);
//         this.mag = Math.sqrt(this.speed.x ** 2 + this.speed.y ** 2);
//         const op = [this.ang + Math.PI / 4, this.ang - Math.PI / 4];
//         const ch = Math.floor(Math.random() * op.length);
//         if (Math.random() < 0.05) {
//           this.speed.x = Math.cos(op[ch]) * this.mag;
//           this.speed.y = Math.sin(op[ch]) * this.mag;
//         }
//       }
//     }

//     function createPulse() {
//   const speed = 5;
//   for (let i = 0; i < 56; i++) {
//     const angle = (i / 8) * 2 * Math.PI;

//     // Generate a random lightness between 30% (dark red) and 70% (light red)
//     const lightness = Math.random() * 40 + 30; 
//     const color = `hsl(0, 100%, ${lightness}%)`; // hue 0 = red

//     particlesRef.current.push(
//       new Particle(
//         // @ts-expect-error
//         can.width / 2,
//         // @ts-expect-error
//         can.height / 2,
//         { x: Math.cos(angle) * speed, y: Math.sin(angle) * speed },
//         color
//       )
//     );
//   }
// }

//     // start the pulse interval
//     const period = 1000; // ms
//     pulseIntervalRef.current = window.setInterval(createPulse, period);
//     // create an initial pulse so there's something immediately
//     createPulse();

//     // animation loop
//     function gameMove() {
//       rafRef.current = requestAnimationFrame(gameMove);
//       Clear();
//       const p = particlesRef.current;
//       for (let i = p.length - 1; i >= 0; i--) {
//         p[i].upd();
//         // @ts-expect-error
//         if (p[i].x < 0 || p[i].x > can.width || p[i].y < 0 || p[i].y > can.height) {
//           p.splice(i, 1);
//         }
//       }
//     }
//     gameMove();

//     // events
//     window.addEventListener("resize", resize);

//     // cleanup
//     return () => {
//       window.removeEventListener("resize", resize);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//       if (pulseIntervalRef.current) clearInterval(pulseIntervalRef.current);
//       particlesRef.current = [];
//     };
//   }, []);

//   // canvas sits fixed and covers the viewport, pointer-events none so it doesn't block clicks
//   return (
//     <canvas
//       ref={canvasRef}
//       id="canvas"
//       style={{ position: "fixed", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: -1 }}
//     ></canvas>
//   );
// }

