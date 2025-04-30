import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface EnhancedFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  backgroundImage?: string;
  delay?: number;
  children?: ReactNode;
}

export function EnhancedFeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
  children
}: EnhancedFeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group relative w-full max-w-sm mx-auto"
    >
      {/* Main Card Container */}
      <div className="relative h-96 w-full rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600/40 via-blue-600/30 to-indigo-700/40 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
        
        {/* Background Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Content Container */}
        <div className="relative h-full p-8 flex flex-col justify-between">
          
          {/* Icon Section */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Icon className="h-10 w-10 text-white" />
            </div>
          </div>
          
          {/* Text Content */}
          <div className="text-center flex-1 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-300 text-base leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
              {description}
            </p>
          </div>
          
          {/* Bottom Action Indicator */}
          <div className="text-center opacity-0 group-hover:opacity-100 transition-all duration-300 mt-6">
            <div className="w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-3" />
            <span className="text-purple-300 text-sm font-medium">Learn More →</span>
          </div>
          
          {children}
        </div>
        
        {/* Hover Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      </div>
    </motion.div>
  );
} 