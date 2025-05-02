"use client";

import { initDraw } from "@/draw";
import { useEffect, useRef } from "react";

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        return;
      }
      initDraw(ctx, canvas.width, canvas.height);
    }
  }, [canvasRef]);
  return (
    <div>
      <canvas ref={canvasRef} width={2000} height={100}></canvas>
    </div>
  );
}
