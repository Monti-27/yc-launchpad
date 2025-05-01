import { motion } from "framer-motion";
import { Check, Star, Crown, Rocket, Users, ArrowRight } from "lucide-react";

export function EnhancedCTASection() {
  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for early-stage founders",
      price: "$99",
      period: "month",
      originalPrice: "$149",
      features: [
        "Monthly group coaching calls",
        "Access to founder community",
        "Basic pitch deck template",
        "Email support",
        "Resource library access"
      ],
      buttonText: "Start Free Trial",
      isPopular: false,
      icon: Rocket,
      gradient: "from-gray-900/50 to-gray-800/50",
      borderGradient: "from-gray-600/50 to-gray-500/50"
    },
    {
      name: "Accelerator",
      description: "Most popular for growing startups",
      price: "$299",
      period: "month",
      originalPrice: "$399",
      features: [
        "Weekly 1-on-1 mentor sessions",
        "Priority community access",
        "Custom pitch deck review",
        "Direct mentor messaging",
        "Investor network introductions",
        "Legal document templates",
        "Marketing strategy sessions"
      ],
      buttonText: "Get Started Now",
      isPopular: true,
      icon: Crown,
      gradient: "from-black/50 to-gray-900/50",
      borderGradient: "from-gray-400/50 to-gray-600/50"
    },
    {
      name: "Enterprise",
      description: "For teams and advanced startups",
      price: "$599",
      period: "month",
      originalPrice: "$799",
      features: [
        "Daily mentor availability",
        "Executive team access",
        "Custom curriculum design",
        "Dedicated success manager",
        "VIP investor introductions",
        "Legal & financial advisory",
        "Priority demo day slots",
        "Alumni network access"
      ],
      buttonText: "Contact Sales",
      isPopular: false,
      icon: Users,
      gradient: "from-gray-800/50 to-gray-700/50",
      borderGradient: "from-gray-500/50 to-gray-400/50"
    }
  ];

  return (
    <section className="relative z-20 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Choose Your Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Select the perfect plan to accelerate your startup journey with YC mentorship and resources.
          </p>
          
          {/* Special offer banner */}
          <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 border border-gray-600/30 rounded-full text-gray-300 text-sm mb-8">
            🎉 Limited Time: 30% off all plans
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group ${plan.isPopular ? 'lg:scale-105' : ''}`}
            >
              {/* Popular badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-black border border-gray-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1 text-gray-300" />
                    Most Popular
                  </div>
                </div>
              )}
              
              {/* Card */}
              <div className={`relative h-full bg-gradient-to-br ${plan.gradient} backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/80 transition-all duration-300 group-hover:transform group-hover:scale-105`}>
                
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${plan.borderGradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`} />
                
                {/* Plan header */}
                <div className="text-center mb-8">
                  <plan.icon className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-gray-500 line-through text-lg mr-2">{plan.originalPrice}</span>
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">/{plan.period}</span>
                  </div>
                  <div className="text-gray-300 text-sm font-medium">
                    Save {Math.round((parseInt(plan.originalPrice.slice(1)) - parseInt(plan.price.slice(1))) / parseInt(plan.originalPrice.slice(1)) * 100)}%
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group/button ${
                  plan.isPopular 
                    ? 'bg-white text-black hover:bg-gray-100' 
                    : 'bg-gray-800 text-white border border-gray-600 hover:bg-gray-700 hover:border-gray-500'
                }`}>
                  <span className="mr-2">{plan.buttonText}</span>
                  <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            All plans include 30-day money-back guarantee • Cancel anytime • No setup fees
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Check className="w-4 h-4 mr-2 text-gray-400" />
              <span>Trusted by 1,200+ founders</span>
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 mr-2 text-gray-400" />
              <span>4.9/5 average rating</span>
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 mr-2 text-gray-400" />
              <span>$50M+ funding raised</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 