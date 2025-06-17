
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const FloatingCard = ({ children, delay = 0, className = "" }: FloatingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-400/30 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default FloatingCard;
