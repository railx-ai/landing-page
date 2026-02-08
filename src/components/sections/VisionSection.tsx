import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="vision" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={ref} className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary text-sm font-medium tracking-wider uppercase mb-6 block"
          >
            Our Vision
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8"
          >
            Building the Money Rail
            <br />
            <span className="text-gradient">for the Internet</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              The future of finance is onchain. Stablecoins are becoming the de facto 
              unit of account for internet-native commerce, and they need infrastructure 
              built for their unique requirements.
            </p>
            <p>
              We're building the liquidity layer that treats stablecoins as first-class 
              citizens — not as generic ERC-20 tokens to be bridged, but as the foundation 
              of a new global financial system.
            </p>
            <p>
              A world where moving dollars across chains is as seamless as sending an email. 
              Where liquidity providers earn sustainable yield powering global commerce. 
              Where developers can build financial applications without worrying about 
              cross-chain complexity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 pt-12 border-t border-border"
          >
            <p className="text-xl font-semibold text-foreground">
              Internet-native money deserves internet-native infrastructure.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
