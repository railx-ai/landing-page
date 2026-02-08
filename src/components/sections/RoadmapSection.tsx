import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Circle } from 'lucide-react';

const phases = [
  {
    phase: 'Phase 1',
    title: 'Solana Liquidity Core',
    description: 'Launch native USDC pools on Solana with core transfer functionality.',
    status: 'current',
  },
  {
    phase: 'Phase 2',
    title: 'Multichain Expansion',
    description: 'Extend liquidity network to Ethereum, Arbitrum, Base, and more.',
    status: 'upcoming',
  },
  {
    phase: 'Phase 3',
    title: 'Stablecoin Infrastructure Layer',
    description: 'Full SDK release, protocol integrations, and advanced routing.',
    status: 'upcoming',
  },
  {
    phase: 'Phase 4',
    title: 'Internet-Scale Money',
    description: 'Global liquidity network supporting internet-scale stablecoin flows.',
    status: 'upcoming',
  },
];

export const RoadmapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="roadmap" className="py-24 lg:py-32 relative overflow-hidden">
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
              Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              The Path to
              <br />
              <span className="text-gradient">Global Liquidity</span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Line */}
                {index < phases.length - 1 && (
                  <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-border" />
                )}

                {/* Dot */}
                <div className="absolute left-0 top-1">
                  {phase.status === 'current' ? (
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
                    </div>
                  ) : (
                    <Circle className="w-6 h-6 text-muted-foreground" />
                  )}
                </div>

                {/* Content */}
                <div className={`glass-card rounded-xl p-6 ml-4 ${
                  phase.status === 'current' ? 'border-primary/30' : ''
                }`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      phase.status === 'current' 
                        ? 'bg-primary/20 text-primary' 
                        : 'bg-secondary text-muted-foreground'
                    }`}>
                      {phase.phase}
                    </span>
                    {phase.status === 'current' && (
                      <span className="text-xs text-primary">In Progress</span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
