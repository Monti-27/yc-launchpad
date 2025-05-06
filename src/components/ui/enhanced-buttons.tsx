import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface EnhancedButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export function EnhancedButton({ children, variant = "primary", className, onClick }: EnhancedButtonProps) {
  if (variant === "primary") {
    return (
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "group relative px-8 py-4 text-lg font-semibold text-white rounded-full overflow-hidden transition-all duration-300",
          "bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600",
          "hover:from-purple-500 hover:via-purple-400 hover:to-blue-500",
          "shadow-2xl hover:shadow-purple-500/25",
          "border border-purple-400/30 hover:border-purple-300/50",
          className
        )}
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
        
        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-purple-400/20 scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
        
        {/* Content */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
        
        {/* Glow effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/50 to-blue-600/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      </motion.button>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "group relative px-8 py-4 text-lg font-semibold text-white rounded-full overflow-hidden transition-all duration-300",
        "bg-transparent border-2 border-purple-500/50 hover:border-purple-400/80",
        "hover:bg-purple-500/10 backdrop-blur-sm",
        "shadow-lg hover:shadow-purple-500/20",
        className
      )}
    >
      {/* Animated border */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="h-full w-full rounded-full bg-black/90 backdrop-blur-sm" />
      </div>
      
      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full bg-purple-400/10 scale-0 group-hover:scale-125 transition-transform duration-300" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-purple-200 transition-colors duration-300">
        {children}
      </span>
    </motion.button>
  );
}

export function StartJourneyButton() {
  return (
    <EnhancedButton variant="primary" className="relative">
      Start Your Journey
      <motion.div
        animate={{ x: [0, 4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowRight className="h-5 w-5" />
      </motion.div>
    </EnhancedButton>
  );
}

export function WatchDemoButton() {
  return (
    <EnhancedButton variant="secondary" className="relative">
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center"
      >
        <Play className="h-5 w-5 mr-2" />
      </motion.div>
      Watch Demo
    </EnhancedButton>
  );
} 