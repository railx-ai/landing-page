import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp, Shield, Coins, ArrowRight } from 'lucide-react';

const benefits = [
  {
    icon: Coins,
    title: 'Earn Bridge Fees',
    description: 'Capture a share of every cross-chain transfer routed through your liquidity.',
  },
  {
    icon: TrendingUp,
    title: 'Utilization-Based Yield',
    description: 'Dynamic fee structures ensure competitive yields based on pool utilization.',
  },
  {
    icon: Shield,
    title: 'Capital-Efficient Pools',
    description: 'Concentrated liquidity design maximizes capital efficiency and returns.',
  },
];

export const LiquidityProvidersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="liquidity-providers" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={ref}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                For Liquidity Providers
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Turn Stablecoins Into
                <br />
                <span className="text-gradient">Infrastructure</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Your stablecoins become the backbone of cross-chain finance. 
                Earn sustainable yield by providing the liquidity that powers 
                instant global transfers.
              </p>

              <div className="space-y-6 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                      <benefit.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 group"
              >
                Become a Liquidity Provider
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* APY Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-8 glow-box">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">USDC Pool</p>
                    <p className="text-foreground text-xl font-semibold">Solana • Mainnet</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-xl font-bold">$</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-secondary/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-muted-foreground text-sm">Current APY</span>
                      <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">Live</span>
                    </div>
                    <div className="text-4xl font-bold text-gradient">—.—%</div>
                    <p className="text-muted-foreground text-xs mt-1">Based on 7-day avg utilization</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-secondary/50">
                      <p className="text-muted-foreground text-sm mb-1">TVL</p>
                      <p className="text-foreground font-semibold">—</p>
                    </div>
                    <div className="p-4 rounded-xl bg-secondary/50">
                      <p className="text-muted-foreground text-sm mb-1">Utilization</p>
                      <p className="text-foreground font-semibold">—</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-muted-foreground text-xs text-center">
                      Pool metrics will be available at launch
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
