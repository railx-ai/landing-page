import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Code, Zap, Coins, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'SDK & API Access',
    description: 'Simple integration with comprehensive SDKs for TypeScript, Rust, and Python.',
  },
  {
    icon: Zap,
    title: 'Intent-Based Routing',
    description: 'Express user intent, let the protocol find the optimal liquidity path.',
  },
  {
    icon: Coins,
    title: 'Revenue Sharing',
    description: 'Earn protocol fees for volume you bring to the network.',
  },
];

export const DevelopersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="developers" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Code Block */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="glass-card rounded-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-destructive/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-4 text-muted-foreground text-sm font-mono">transfer.ts</span>
                </div>
                <div className="p-6 font-mono text-sm overflow-x-auto">
                  <pre className="text-muted-foreground">
                    <code>
                      <span className="text-purple-400">import</span>{' '}
                      <span className="text-foreground">{'{ RailX }'}</span>{' '}
                      <span className="text-purple-400">from</span>{' '}
                      <span className="text-primary">'@railx/sdk'</span>;{'\n\n'}
                      
                      <span className="text-muted-foreground/60">// Initialize the client</span>{'\n'}
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-foreground">client</span>{' '}
                      <span className="text-primary">=</span>{' '}
                      <span className="text-purple-400">new</span>{' '}
                      <span className="text-cyan-400">RailX</span>({'\n'}
                      {'  '}network: <span className="text-primary">'mainnet'</span>,{'\n'}
                      {'  '}apiKey: process.env.<span className="text-foreground">API_KEY</span>{'\n'}
                      );{'\n\n'}
                      
                      <span className="text-muted-foreground/60">// Transfer USDC cross-chain</span>{'\n'}
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-foreground">tx</span>{' '}
                      <span className="text-primary">=</span>{' '}
                      <span className="text-purple-400">await</span>{' '}
                      client.<span className="text-cyan-400">transfer</span>({'{'}
                      {'\n'}
                      {'  '}from: <span className="text-primary">'solana'</span>,{'\n'}
                      {'  '}to: <span className="text-primary">'ethereum'</span>,{'\n'}
                      {'  '}token: <span className="text-primary">'USDC'</span>,{'\n'}
                      {'  '}amount: <span className="text-primary">'10000'</span>,{'\n'}
                      {'  '}recipient: <span className="text-foreground">address</span>{'\n'}
                      {'}'});
                    </code>
                  </pre>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                For Developers & Protocols
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                One API.
                <br />
                <span className="text-gradient">Every Chain.</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Integrate cross-chain stablecoin transfers in minutes. 
                Focus on your product, we handle the liquidity routing.
              </p>

              <div className="space-y-6 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button 
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-secondary group"
              >
                View Docs (Coming Soon)
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
