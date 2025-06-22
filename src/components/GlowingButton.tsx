import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowingButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
}

const GlowingButton = ({ children, className, onClick, disabled = false, ariaLabel }: GlowingButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.05, y: -2 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
      className={cn(
        "relative px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white overflow-hidden group transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:shadow-2xl",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      aria-label={ariaLabel}
    >
      {/* Enhanced glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 -z-10" />
      
      {/* Animated border */}
      <div className="absolute inset-[1px] bg-gradient-to-r from-purple-600/50 to-pink-600/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Enhanced shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
      
      {/* Pulse effect on hover */}
      <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300" />
      
      <span className="relative z-10 flex items-center justify-center font-inter font-medium tracking-wide">
        {children}
      </span>
    </motion.button>
  );
};

export default GlowingButton;
