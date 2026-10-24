import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { IMAGES, WHY_CHOOSE_POINTS } from '../data/content';

interface WhyChooseUsProps {
  onQuoteClick: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onQuoteClick }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F3F8EF]/60 border-t border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-neutral-200/80 shadow-lg aspect-4/3 sm:aspect-16/11 bg-neutral-100 group">
              <img
                src={IMAGES.blockPaving}
                alt="Precision block paving driveway craftsmanship by DB Paving & Landscapes"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Informational overlay label */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-xs border border-white/40 shadow-md">
                <p className="text-xs font-semibold text-[#173D27] uppercase tracking-wider mb-0.5">
                  Attention to Detail
                </p>
                <p className="text-xs text-[#202720]/80">
                  Clean jointing, robust sub-base preparation, and crisp edging for long-lasting finishes.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8DD75C]" />
              <span className="text-xs font-semibold tracking-widest text-[#173D27] uppercase">
                Why Choose DB Paving &amp; Landscapes
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-extrabold text-[#173D27] tracking-tight mb-5 [text-wrap:balance]">
              Thoughtful Outdoor Design. Quality Workmanship.
            </h2>

            <p className="text-base sm:text-lg text-[#202720]/80 leading-relaxed mb-8">
              Whether you're planning a new driveway, upgrading a patio or transforming your garden, DB Paving &amp; Landscapes can discuss your requirements and help you explore the right approach for your outdoor space.
            </p>

            {/* Three Benefit Points */}
            <div className="space-y-6 mb-9">
              {WHY_CHOOSE_POINTS.map((point) => (
                <div
                  key={point.number}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/80 border border-neutral-200/70 shadow-2xs transition-colors hover:border-[#8DD75C]/70"
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#173D27] text-[#8DD75C] font-bold text-xs shrink-0 mt-0.5">
                    {point.number}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#173D27] mb-1">
                      {point.title}
                    </h3>
                    <p className="text-sm text-[#202720]/75 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <div>
              <button
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#173D27] bg-[#8DD75C] hover:bg-[#7ec74e] active:scale-[0.98] rounded-xl shadow-xs hover:shadow-md transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8DD75C]"
              >
                Discuss Your Outdoor Project
                <ArrowRight className="w-4 h-4 text-[#173D27]" />
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
