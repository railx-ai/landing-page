import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">∞</span>
            </div>
            <span className="text-foreground font-semibold text-lg tracking-tight">
              RailX
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              X / Twitter
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              GitHub
            </a>
            <span className="text-muted-foreground/50 text-sm cursor-not-allowed">
              Docs (Soon)
            </span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground text-xs">
            Non-custodial. Early-stage infrastructure. Use at your own risk.
          </p>
          <p className="text-center text-muted-foreground/50 text-xs mt-2">
            © {new Date().getFullYear()} RailX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
