import { useEffect } from "react";

const ShimmerBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById("backgroundCanvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    const setSize = (): void => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    setSize();
    window.addEventListener("resize", setSize);

    const dotSpacing = 5; // Keep the dense pattern
    const dotSize = 2; // Slightly smaller dots
    const shimmerPower = 2; // Softer shimmer transition
    const shimmerIntensity = 0.12; // More intense shimmer
    let shimmerProgress = 0;

    const dots: {
      x: number;
      y: number;
      baseOpacity: number;
      radius: number;
    }[][] = [];
    for (let x = 0; x < canvas.width; x += dotSpacing) {
      const column = [];
      for (let y = 0; y < canvas.height; y += dotSpacing) {
        const baseOpacity = 0.04; // More subtle base opacity
        column.push({
          x,
          y,
          baseOpacity,
          radius: dotSize,
        });
      }
      dots.push(column);
    }

    const drawBackground = (): void => {
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const displayWidth = canvas.width / (window.devicePixelRatio || 1);
      const displayHeight = canvas.height / (window.devicePixelRatio || 1);
      const shimmerX = -displayWidth / 2 + shimmerProgress * (displayWidth * 2);
      const shimmerY = displayHeight / 2.5;
      const shimmerRadius = displayWidth * 1.2; // Wider shimmer effect
      const shimmerRadiusSquared = shimmerRadius * shimmerRadius;

      dots.forEach((column) => {
        column.forEach((dot) => {
          const dx = (dot.x - shimmerX) * 2; // Reduced multiplier for smoother transition
          const dy = dot.y - shimmerY;
          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared < shimmerRadiusSquared) {
            const shimmerFactor = 1 - Math.sqrt(distanceSquared) / shimmerRadius;
            const shimmerEffect = Math.pow(shimmerFactor, shimmerPower) * shimmerIntensity;
            ctx.fillStyle = `rgba(255, 255, 255, ${dot.baseOpacity + shimmerEffect})`;
          } else {
            ctx.fillStyle = `rgba(255, 255, 255, ${dot.baseOpacity})`;
          }

          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
          ctx.fill();
        });
      });

      // Faster animation
      shimmerProgress += 0.012;
      shimmerProgress %= 1;

      requestAnimationFrame(drawBackground);
    };

    drawBackground();

    return () => window.removeEventListener("resize", setSize);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <canvas id="backgroundCanvas" />
    </div>
  );
};

export default ShimmerBackground;
