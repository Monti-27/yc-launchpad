import { GlareCard } from "@/components/ui/glare-card";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureGlareCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureGlareCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: FeatureGlareCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <GlareCard className="flex flex-col items-center justify-center bg-gradient-to-br from-purple-900/50 via-slate-900 to-blue-900/50 p-8">
        {/* Icon with gradient background */}
        <div className="mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center shadow-xl">
            <Icon className="h-8 w-8 text-white" />
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-white font-bold text-xl mb-4 text-center">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-300 text-center text-sm leading-relaxed max-w-[250px]">
          {description}
        </p>
        
        {/* Bottom accent line */}
        <div className="mt-6 w-full max-w-[200px] h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-50" />
      </GlareCard>
    </motion.div>
  );
} 