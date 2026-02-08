import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertTriangle, Clock, DollarSign, ShieldAlert } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Wrapped Assets & Mint Risks',
    description: 'Bridge tokens are IOUs backed by locked collateral. Smart contract vulnerabilities put billions at risk.',
  },
  {
    icon: DollarSign,
    title: 'Capital Inefficiency',
    description: 'Traditional bridges lock massive amounts of capital on each chain, fragmenting liquidity across networks.',
  },
  {
    icon: Clock,
    title: 'Slow Settlement',
    description: 'Multi-block finality and manual attestations create 15+ minute delays for cross-chain transfers.',
  },
  {
    icon: ShieldAlert,
    title: 'Bridge Exploits',
    description: 'Over $2.5B lost to bridge hacks. Centralized custody and complex architectures create attack vectors.',
  },
];

export const ProblemSection = () => {
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
              The Problem
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Bridges Were Never
              <br />
              <span className="text-gradient">Meant for Money</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cross-chain infrastructure was designed for messaging, not for the demands of 
              high-velocity stablecoin transfers.
            </p>
          </motion.div>

          {/* Problem Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                className="glass-card rounded-xl p-6 lg:p-8 group hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-destructive/10 text-destructive">
                    <problem.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
