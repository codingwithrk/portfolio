import { useEffect, useState } from "react";

interface Snowflake {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export default function Snowfall() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const generateSnowflakes = () => {
      const flakes: Snowflake[] = [];
      for (let i = 0; i < 50; i++) {
        flakes.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 10 + Math.random() * 10,
          size: 10 + Math.random() * 20,
        });
      }
      setSnowflakes(flakes);
    };

    generateSnowflakes();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      <style>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-10vh) translateX(0);
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) translateX(100px);
            opacity: 0;
          }
        }
        
        .snowflake {
          position: fixed;
          top: -10vh;
          color: white;
          font-size: 1.5em;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
          opacity: 0.8;
          z-index: 10;
        }
      `}</style>

      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            animation: `snowfall ${flake.duration}s linear ${flake.delay}s infinite`,
            fontSize: `${flake.size}px`,
          }}
        >
          ❄️
        </div>
      ))}
    </div>
  );
}
