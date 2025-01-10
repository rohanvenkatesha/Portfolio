"use client";

import React, { useEffect, useRef } from "react";

const StarryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Mouse position for interaction (optional)
    let mouseX = 0;
    let mouseY = 0;

    canvas.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Star class to create each star
    class Star {
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 0.5; // Smaller stars
        this.speedX = (Math.random() - 0.5) * 2; // Slow speed
        this.speedY = (Math.random() - 0.5) * 2;
        this.opacity = Math.random() * 0.5 + 0.1; // Less opacity for less brightness
      }

      // Update star position
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Reset star position when it goes out of bounds
        if (this.x < 0 || this.x > canvas.width) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }

        // Make stars move toward the mouse position (optional)
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          this.speedX += dx / 500;
          this.speedY += dy / 500;
        }
      }

      // Draw the star
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.shadowBlur = 5; // Add blur
        ctx.shadowColor = "rgba(255, 255, 255, 0.5)"; // White glow
        ctx.fill();
      }
    }

    const stars: Star[] = [];
    for (let i = 0; i < 200; i++) stars.push(new Star()); // Fewer stars

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
      stars.forEach((star) => {
        star.update();
        star.draw();
      });
      requestAnimationFrame(animate); // Repeat the animation
    };

    animate();

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Keeps the canvas in the background
      }}
    ></canvas>
  );
};

export default StarryBackground;
