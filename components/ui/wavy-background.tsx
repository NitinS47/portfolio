"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  overflowScale = 1.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  overflowScale?: number; // Scale factor for canvas size overflow
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getSpeed = () => {
    return speed === "fast" ? 0.002 : 0.001;
  };

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];

  let animationId: number;

  const drawWave = (
    ctx: CanvasRenderingContext2D,
    noise: any,
    width: number,
    height: number,
    nt: number,
    n: number
  ) => {
    for (let i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (let x = 0; x < width; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + height * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  const initCanvas = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = container.getBoundingClientRect();
    canvas.width = width * overflowScale;
    canvas.height = height * overflowScale;
    ctx.filter = `blur(${blur}px)`;

    let nt = 0;

    const render = () => {
      nt += getSpeed();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = waveOpacity || 0.5;
      drawWave(ctx, noise, canvas.width, canvas.height, nt, 5);
      animationId = requestAnimationFrame(render);
    };

    render();

    const resizeCanvas = () => {
      const { width, height } = container.getBoundingClientRect();
      canvas.width = width * overflowScale;
      canvas.height = height * overflowScale;
      ctx.filter = `blur(${blur}px)`;
    };

    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  };

  useEffect(() => {
    const cleanup = initCanvas();
    return () => cleanup && cleanup();
  }, []);

  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full h-full flex items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        ref={canvasRef}
        className="absolute -top-1/4 -left-1/4 z-0"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
