
import { motion } from "framer-motion";

const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Main aurora gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 80%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Floating aurora particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-screen filter blur-xl opacity-70"
          style={{
            background: `radial-gradient(circle, ${
              i % 3 === 0 
                ? "rgba(139, 92, 246, 0.4)" 
                : i % 3 === 1 
                ? "rgba(236, 72, 153, 0.4)" 
                : "rgba(59, 130, 246, 0.4)"
            } 0%, transparent 70%)`,
            width: `${Math.random() * 400 + 200}px`,
            height: `${Math.random() * 400 + 200}px`,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
};

export default AuroraBackground;
