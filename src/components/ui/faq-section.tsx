import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How is this different from other startup programs?",
    answer: "Our program is specifically designed around Y Combinator's proven methodology. We provide direct access to YC alumni mentors, use the same frameworks that helped companies like Airbnb and Stripe succeed, and offer hands-on support rather than just theoretical knowledge."
  },
  {
    question: "What if I don't have a technical background?",
    answer: "No problem! Many successful YC founders aren't technical. Our program includes modules on finding technical co-founders, validating ideas without coding, and building MVPs using no-code tools. We focus on the business fundamentals that make startups successful."
  },
  {
    question: "How much time commitment is required?",
    answer: "We recommend 10-15 hours per week for optimal results. The program is designed to fit around your current commitments with flexible scheduling for mentor calls and self-paced learning modules."
  },
  {
    question: "Do you take equity in my company?",
    answer: "No, we don't take any equity. This is a fixed-fee program designed to prepare you for accelerators like YC. Your company remains 100% yours."
  },
  {
    question: "What's included in the program?",
    answer: "You get weekly 1-on-1 mentor calls, access to our founder community, pitch deck reviews, customer discovery workshops, fundraising preparation, and lifetime access to all program materials and updates."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes! We offer a 90-day money-back guarantee. If you're not satisfied with the program quality or don't see measurable progress on your startup, we'll refund your full payment."
  },
  {
    question: "Can I join if I'm based outside the US?",
    answer: "Absolutely! Our program is fully remote and we have founders from over 40 countries. All mentor calls can be scheduled across different time zones, and our community is global."
  },
  {
    question: "What happens after the program ends?",
    answer: "You get lifetime access to the community and materials, plus alumni perks including discounted rates for follow-up intensive sessions and priority access to investor introduction events."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative z-20 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Got questions? We've got answers. Here are the most common questions from founders like you.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div 
                className={`border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-purple-500/10 border-purple-500/30' 
                    : 'bg-white/5 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-white pr-4 group-hover:text-purple-200 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 text-purple-400" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
                      )}
                    </motion.div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="border-t border-white/10 pt-4">
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">
            Still have questions?
          </p>
          <button className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300 underline underline-offset-4">
            Schedule a free 15-minute consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
} 