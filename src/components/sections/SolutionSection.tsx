import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown, Check } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Deposit Stablecoins',
    description: 'Liquidity providers deposit native stablecoins into unified pools on each supported chain.',
  },
  {
    number: '02',
    title: 'Liquidity Routes Cross-Chain',
    description: 'Intent-based routing finds the optimal path through the liquidity network in milliseconds.',
  },
  {
    number: '03',
    title: 'Receive Real Stablecoins',
    description: 'Users receive native stablecoins instantly — no wrapped tokens, no waiting periods.',
  },
];

const features = [
  'No minting',
  'No wrapping',
  'No waiting',
  'No custody risk',
];

export const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="solution" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={ref}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              The Solution
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Liquidity-Native
              <br />
              <span className="text-gradient">Cross-Chain Transfers</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A fundamentally different approach. Instead of mint/burn bridges, 
              we route through deep liquidity pools for instant settlement.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="max-w-3xl mx-auto mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              >
                <div className="glass-card rounded-xl p-6 lg:p-8 mb-4">
                  <div className="flex items-start gap-6">
                    <span className="text-4xl font-bold text-primary/30">{step.number}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown className="w-5 h-5 text-primary/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-8"
          >
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-card"
              >
                <Check className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
