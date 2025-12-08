"use client";

export const GrainTexture = () => {
  return (
    <div className="fixed inset-0 z-[99] pointer-events-none overflow-hidden">
      {/* 1. backgroundSize: '128px' -> Forces the pattern to repeat often, keeping grains TINY.
         2. opacity: 0.06 -> Keeps it barely visible (Subtle).
         3. baseFrequency='0.8' -> Creates fine crystal dust, not clouds.
      */}
      <div 
        className="w-full h-full"
        style={{
          opacity: 0.06, 
          backgroundSize: '128px 128px', // Crucial: Keeps grain sharp and small
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};