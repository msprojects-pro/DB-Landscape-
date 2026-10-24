import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Compass, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { IMAGES } from '../data/content';

interface HeroProps {
  onQuoteClick: () => void;
  onExploreServicesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onQuoteClick,
  onExploreServicesClick,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle organic background tint */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-[#F3F8EF]/70 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT SIDE: Copy & Call-to-actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-xs bg-[#8DD75C]" />
              <span className="text-xs font-semibold tracking-widest text-[#173D27] uppercase">
                Landscaping • Paving • Groundworks
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#173D27] leading-[1.12] tracking-tight mb-6 [text-wrap:balance]">
              <span className="relative inline-block">
                Transform
                <svg
                  className="absolute -bottom-1 left-0 w-full h-2 text-[#8DD75C]/60"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 9C25 3 75 3 98 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{' '}
              Your Outdoor Space.
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#202720]/80 leading-relaxed mb-8 max-w-xl">
              From beautifully finished driveways and patios to complete garden transformations, DB Paving &amp; Landscapes helps bring your outdoor vision to life.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <button
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#173D27] bg-[#8DD75C] hover:bg-[#7ec74e] active:scale-[0.98] rounded-xl shadow-xs hover:shadow-md transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8DD75C]"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4 text-[#173D27]" />
              </button>

              <button
                onClick={onExploreServicesClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-medium text-[#173D27] bg-[#F3F8EF] hover:bg-[#e4eedd] active:scale-[0.98] rounded-xl transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173D27]"
              >
                Explore Our Services
              </button>
            </div>

            {/* Trust Message */}
            <div className="pt-2 border-t border-neutral-100 flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#202720]/75">
              <CheckCircle2 className="w-4 h-4 text-[#8DD75C] shrink-0" />
              <span>Quality Work. Built to Last.</span>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Real Photography & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-neutral-200/90 shadow-xl bg-neutral-100 aspect-16/10 sm:aspect-16/11 lg:aspect-4/3 group">
              {/* Fallback pattern while loading or if error */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-[#F3F8EF] flex items-center justify-center">
                  <div className="text-center p-6 text-[#173D27]">
                    <Compass className="w-10 h-10 mx-auto text-[#8DD75C] animate-spin" />
                    <p className="mt-2 text-xs font-medium">Loading landscape visual...</p>
                  </div>
                </div>
              )}

              <img
                src={IMAGES.hero}
                alt="Pristine newly completed block-paved driveway outside modern British home by DB Paving & Landscapes"
                referrerPolicy="no-referrer"
                loading="eager"
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  setImageError(true);
                  setImageLoaded(true);
                }}
                className={`w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02] ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Natural subtle gradient scrim at the bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating Badge 1: Top Right */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-neutral-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8DD75C]" />
                <span className="text-xs font-semibold text-[#173D27]">
                  Your Outdoor Space, Reimagined
                </span>
              </div>

              {/* Floating Badge 2: Bottom Left detail card */}
              <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 bg-[#173D27]/90 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-white/10 text-white flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#8DD75C]" />
                <span className="text-xs sm:text-sm font-medium tracking-wide">
                  Driveways • Patios • Gardens
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
