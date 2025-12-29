import { useEffect, useState } from "react";

interface Confetti {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  emoji: string;
  rotation: number;
}

export default function Snowfall() {
  const [confetti, setConfetti] = useState<Confetti[]>([]);

  useEffect(() => {
    const generateConfetti = () => {
      const emojis = ["🎉", "🎊", "✨", "🎈", "⭐", "🌟", "💫"];
      const pieces: Confetti[] = [];
      for (let i = 0; i < 50; i++) {
        pieces.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 10 + Math.random() * 10,
          size: 12 + Math.random() * 24,
          emoji: emojis[Math.floor(Math.random() * emojis.length)],
          rotation: Math.random() * 360,
        });
      }
      setConfetti(pieces);
    };

    generateConfetti();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      <style>{`
        @keyframes confettiFall {
          0% {
            transform: translateY(-10vh) translateX(0) rotate(0deg);
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) translateX(100px) rotate(360deg);
            opacity: 0;
          }
        }
        
        .confetti {
          position: fixed;
          top: -10vh;
          color: white;
          font-size: 1.5em;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
          opacity: 0.9;
          z-index: 10;
        }
      `}</style>

      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="confetti"
          style={{
            left: `${piece.left}%`,
            animation: `confettiFall ${piece.duration}s linear ${piece.delay}s infinite`,
            fontSize: `${piece.size}px`,
          }}
        >
          {piece.emoji}
        </div>
      ))}
    </div>
  );
}
