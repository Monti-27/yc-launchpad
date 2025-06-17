
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, Rocket, Users, Award, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AuroraBackground from "@/components/AuroraBackground";
import FloatingCard from "@/components/FloatingCard";
import GlowingButton from "@/components/GlowingButton";
import TypewriterEffect from "@/components/TypewriterEffect";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stats = [
    { number: "500+", label: "Startups Accelerated", icon: Rocket },
    { number: "98%", label: "Success Rate", icon: TrendingUp },
    { number: "$2B+", label: "Total Funding Raised", icon: Award },
    { number: "50+", label: "Expert Mentors", icon: Users },
  ];

  const features = [
    {
      title: "Lightning Fast Setup",
      description: "Get your startup idea validated and structured in record time with our proven framework.",
      icon: Zap,
    },
    {
      title: "Expert Mentorship",
      description: "Connect with YC alumni and industry experts who've been through the journey.",
      icon: Users,
    },
    {
      title: "Proven Framework",
      description: "Follow the exact playbook that helped thousands of startups get into YC.",
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Aurora Background */}
      <AuroraBackground />
      
      {/* Mouse follower effect */}
      <div 
        className="fixed pointer-events-none z-10 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
        }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-20 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm mb-6">
              🚀 Join the YC Success Revolution
            </span>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent leading-tight">
              YC JOURNEY
            </h1>
            
            <TypewriterEffect 
              words={["FROM 0 TO 100", "LIGHTNING FAST", "PROVEN RESULTS"]}
              className="text-3xl md:text-5xl font-bold text-purple-300 mb-8"
            />
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your startup idea into a YC-ready company with our accelerated program. 
              Join hundreds of successful founders who made it from zero to funded.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <GlowingButton className="px-8 py-4 text-lg">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </GlowingButton>
            
            <Button variant="outline" className="px-8 py-4 text-lg border-purple-500/50 hover:border-purple-400 bg-transparent">
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <FloatingCard key={index} delay={index * 0.1}>
                <div className="text-center">
                  <stat.icon className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </FloatingCard>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="h-6 w-6 text-purple-300" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative z-20 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Why Choose Our Program?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We've distilled years of YC wisdom into a fast-track program that gets results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-500/10 to-transparent border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-20 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-3xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Accelerate?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the next cohort and transform your idea into a funded startup in record time.
            </p>
            <GlowingButton className="px-12 py-4 text-lg">
              Apply Now - Limited Spots
            </GlowingButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
