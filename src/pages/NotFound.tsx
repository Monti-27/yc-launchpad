import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-[8rem] md:text-[12rem] font-light leading-none tracking-tighter text-black">
            404
          </h1>
        </motion.div>

        {/* Divider Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px bg-black mx-auto mb-8 max-w-xs"
        />

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-light mb-4 text-black">
            Page Not Found
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Go Back Button */}
          <motion.button
            onClick={() => navigate(-1)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center space-x-2 px-6 py-3 bg-black text-white rounded-none font-medium transition-all duration-200 hover:bg-gray-900"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
            <span>Go Back</span>
          </motion.button>

          {/* Home Button */}
          <motion.button
            onClick={() => navigate('/')}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center space-x-2 px-6 py-3 border border-black text-black bg-white rounded-none font-medium transition-all duration-200 hover:bg-black hover:text-white"
          >
            <Home className="w-4 h-4 group-hover:scale-105 transition-transform duration-200" />
            <span>Home</span>
          </motion.button>
        </motion.div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-sm text-gray-400"
        >
          <p>Built with care by Monti Saini</p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute top-8 left-8 w-2 h-2 bg-black rounded-full"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="absolute bottom-8 right-8 w-2 h-2 bg-black rounded-full"
      />

      {/* Subtle corner lines */}
      <motion.div
        initial={{ width: 0, height: 0 }}
        animate={{ width: "2rem", height: "2rem" }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute top-8 right-8 border-t border-r border-black"
      />
      
      <motion.div
        initial={{ width: 0, height: 0 }}
        animate={{ width: "2rem", height: "2rem" }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-8 left-8 border-b border-l border-black"
      />
    </div>
  );
};

export default NotFound;
