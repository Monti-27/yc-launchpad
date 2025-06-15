import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, Rocket, Users, Award, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FloatingCard from "@/components/FloatingCard";
import GlowingButton from "@/components/GlowingButton";
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

  const testimonials = [
    {
      id: 0,
      name: "Manu Arora",
      designation: "Senior Software Engineer",
      content: (
        <p>
          These cards are amazing, I want to use them in my project. Framer
          motion is a godsend ngl tbh fam 🙏
        </p>
      ),
    },
    {
      id: 1,
      name: "Elon Musk",
      designation: "Senior Shitposter",
      content: (
        <p>
          I dont like this Twitter thing, deleting it right away because yolo.
          Instead, I would like to call it X.com so that it can easily be
          confused with adult sites.
        </p>
      ),
    },
    {
      id: 2,
      name: "Tyler Durden",
      designation: "Manager Project Mayhem",
      content: (
        <p>
          The first rule of Fight Club is that you do not talk about fight
          club. The second rule of Fight club is that you DO NOT TALK about
          fight club.
        </p>
      ),
    },
  ];

  const movingCardsTestimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];

  const featureBackgrounds = [
    {
      default: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80",
      hover: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80"
    },
    {
      default: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80",
      hover: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80"
    },
    {
      default: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80",
      hover: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80"
    }
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
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <GlowingButton className="px-8 py-4 text-lg">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </GlowingButton>
            
            <Button variant="outline" className="px-8 py-4 text-lg border-purple-500/50 hover:border-purple-400 bg-transparent text-white hover:bg-purple-500/10">
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
            <h2 className="text-section-title font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Why Choose Our Program?
            </h2>
            <p className="text-xl font-medium text-gray-300 max-w-2xl mx-auto">
              We've distilled years of YC wisdom into a fast-track program that gets results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 justify-items-center">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <BackgroundGradientCard
                  backgroundImage={featureBackgrounds[index].default}
                  hoverBackgroundImage={featureBackgrounds[index].hover}
                  containerClassName="w-full max-w-sm"
                >
                  <div className="text-center">
                    <feature.icon className="h-12 w-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                    <p className="text-gray-200 font-normal leading-relaxed">{feature.description}</p>
                  </div>
                </BackgroundGradientCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infinite Moving Cards Section */}
      <section className="relative z-20 py-20 px-4">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-section-title font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent text-center">
              From the best minds in the world
            </h2>
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
            <h2 className="text-section-title font-bold mb-6 text-white">
              Ready to Accelerate?
            </h2>
            <p className="text-xl font-medium text-gray-300 mb-8">
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
