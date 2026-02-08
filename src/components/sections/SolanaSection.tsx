import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, DollarSign, Layers, Timer } from 'lucide-react';

const features = [
  {
    icon: Timer,
    title: 'Sub-Second Finality',
    description: '400ms block times enable instant confirmation for cross-chain transfers.',
    stat: '~400ms',
  },
  {
    icon: DollarSign,
    title: 'Ultra-Low Fees',
    description: 'Fractions of a cent per transaction, making micro-transfers economically viable.',
    stat: '<$0.001',
  },
  {
    icon: Layers,
    title: 'High Throughput',
    description: 'Parallel transaction processing supports thousands of transfers per second.',
    stat: '65K TPS',
  },
  {
    icon: Zap,
    title: 'Native USDC',
    description: 'Deep native USDC liquidity on Solana provides the ideal settlement layer.',
    stat: '$2B+',
  },
];

export const SolanaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Why Solana First
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              The Liquidity
              <br />
              <span className="text-gradient">Backbone</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Solana's speed and cost structure make it the ideal foundation for 
              a global stablecoin settlement network.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                className="glass-card rounded-xl p-6 text-center group hover:border-primary/30 transition-all hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-2">
                  {feature.stat}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
