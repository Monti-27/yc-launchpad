import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, TrendingUp, Rocket, Users, Award, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import FloatingCard from "@/components/FloatingCard";
import FlipWordsDemo from "@/components/flip-words-demo";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/Footer";
import { CardStack } from "@/components/CardStack";
import { Cover } from "@/components/ui/cover";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Spotlight } from "@/components/ui/Spotlight";
import BackgroundGradientCard from "@/components/ui/background-gradient-card";
import GridBackgroundDemo from "@/components/ui/grid-background-demo";
import TextGenerateEffectDemo from "@/components/text-generate-effect-demo";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { EnhancedFeatureCard } from "@/components/ui/enhanced-feature-card";
import { SocialProofLogos } from "@/components/ui/social-proof-logos";
import { EnhancedCTASection } from "@/components/ui/enhanced-cta-section";
import { FAQSection } from "@/components/ui/faq-section";
import { FeatureGlareCard } from "@/components/ui/feature-glare-card";
import { StartJourneyButton, WatchDemoButton } from "@/components/ui/enhanced-buttons";

const Index = () => {
  // Ensure page starts at the top with multiple approaches
  useEffect(() => {
    // Immediate scroll to top
    window.scrollTo(0, 0);
    
    // Prevent browser auto-scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Additional scroll to top after a short delay to handle any layout shifts
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, []);

  const stats = [
    { number: 500, label: "Startups Accelerated", icon: Rocket, suffix: "+" },
    { number: 98, label: "Success Rate", icon: TrendingUp, suffix: "%" },
    { number: 2, label: "Total Funding Raised", icon: Award, prefix: "$", suffix: "B+" },
    { number: 50, label: "Expert Mentors", icon: Users, suffix: "+" },
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

  const testimonials = [
    {
      id: 0,
      name: "Sarah Chen",
      designation: "Founder, TechFlow AI",
      content: (
        <p>
          "This program completely transformed how I approach building my startup. 
          Within 3 months, I had a clear go-to-market strategy and landed my first enterprise client."
        </p>
      ),
    },
    {
      id: 1,
      name: "Marcus Rodriguez",
      designation: "CEO, GreenLogistics",
      content: (
        <p>
          "The mentor network is incredible. My assigned mentor was a YC alumnus 
          who helped me refine my pitch and avoid common fundraising mistakes. 
          Just raised our seed round!"
        </p>
      ),
    },
    {
      id: 2,
      name: "Alex Kim",
      designation: "Co-founder, DataBridge",
      content: (
        <p>
          "Best investment I've made in my entrepreneurial journey. The frameworks 
          and community support helped me pivot successfully and find product-market fit."
        </p>
      ),
    },
  ];

  const movingCardsTestimonials = [
    {
      quote:
        "The best way to predict the future is to create it. This program gave me the tools and confidence to build the company I always dreamed of.",
      name: "Jennifer Walsh",
      title: "Founder, HealthTech Solutions",
    },
    {
      quote:
        "In just 90 days, I went from having an idea to having a validated business model with paying customers. The mentorship was game-changing.",
      name: "David Chen",
      title: "CEO, EcoLogistics",
    },
    {
      quote:
        "The network effect is real. I've made connections that have led to partnerships, customers, and even potential investors.",
      name: "Maria Gonzalez",
      title: "Founder, EdTech Innovations",
    },
    {
      quote:
        "Finally, a program that focuses on execution rather than just theory. Every session was actionable and immediately applicable to my business.",
      name: "Ryan Thompson",
      title: "Co-founder, FinTech Pro",
    },
    {
      quote:
        "The pitch deck review alone was worth the entire program fee. My presentation went from amateur to investor-ready in weeks.",
      name: "Lisa Park",
      title: "Founder, AI Analytics Corp",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Grid Background - Fixed and covering full viewport */}
      <div className="fixed inset-0 z-0 w-full h-full">
        <GridBackgroundDemo />
      </div>

      {/* Subtle overlay for better readability */}
      <div className="fixed inset-0 z-1 bg-black/20"></div>
      
      {/* Navbar */}
      <div className="relative z-40">
        <NavbarDemo />
      </div>

      {/* Hero Section */}
      <section className="relative z-20 pt-32 pb-20 px-4" role="banner" aria-label="Hero section">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm mb-6" role="banner">
              🚀 Join the YC Success Revolution
            </span>
            
            <h1 className="text-hero font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent leading-tight">
              <Cover className="inline-block">
                YC JOURNEY
              </Cover>
            </h1>
            
            <div role="presentation" aria-label="Animated tagline">
              <FlipWordsDemo />
            </div>
            
            <div role="presentation" aria-label="Description text animation">
              <TextGenerateEffectDemo />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <StartJourneyButton />
            <WatchDemoButton />
          </motion.div>

          {/* Enhanced Stats with Animated Counters */}
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
                  <AnimatedCounter
                    end={stat.number}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    className="text-3xl font-bold text-white mb-1"
                  />
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

      {/* Social Proof Logos */}
      <SocialProofLogos />

      {/* Enhanced Features Section */}
      <section className="relative z-20 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-section-title font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Why Choose Our Program?
            </h2>
            <p className="text-xl font-medium text-gray-300 max-w-2xl mx-auto">
              We've distilled years of YC wisdom into a fast-track program that gets results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 justify-items-center max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <FeatureGlareCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Infinite Moving Cards Section */}
      <section className="relative z-20 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-section-title font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Success Stories from Our Community
            </h2>
          </motion.div>
          <div className="flex flex-col items-center justify-center">
            <InfiniteMovingCards
              items={movingCardsTestimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-20 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-section-title font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Loved by Builders
            </h2>
            <p className="text-xl font-medium text-gray-300 max-w-2xl mx-auto">
              Hear what our users have to say about their experience.
            </p>
          </motion.div>

          <div className="flex items-center justify-center">
            <CardStack items={testimonials} />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Enhanced CTA Section */}
      <EnhancedCTASection />

      <Footer />
    </div>
  );
};

export default Index;
