import React, { useRef, useEffect } from 'react';
import { createNoise3D } from 'simplex-noise';

const SimplexCanvasGrid = () => {
  const canvasRef = useRef(null);
  const noise3D = useRef(createNoise3D());
  const tRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      const t = tRef.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let x = 0; x < canvas.width / 10; x++) {
        for (let y = 0; y < canvas.height / 10; y++) {
          const value = Math.abs(noise3D.current(x / 30, y / 60, t / 80));
          const size = 4 * value;
          ctx.fillStyle = 'black';
          ctx.fillRect(x * 10, y * 10, size, size);
        }
      }

      tRef.current += 0.45;
      requestAnimationFrame(draw);
    };

    resizeCanvas();
    draw();

    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className='rounded-xl'
      style={{
        display: 'block',
        width: '100%',
        height: '100%',
        margin: 'auto',
      }}
    />
  );
};

export default SimplexCanvasGrid;
