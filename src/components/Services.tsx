import React from 'react';
import {
  CarFront,
  Grid2X2,
  Trees,
  Construction,
  Sprout,
  Layers,
  Leaf,
  ShieldCheck,
  ArrowRight,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CarFront':
        return CarFront;
      case 'Grid2X2':
        return Grid2X2;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Trees':
        return Trees;
      case 'Construction':
        return Construction;
      case 'Sprout':
        return Sprout;
      case 'Layers':
        return Layers;
      case 'Leaf':
        return Leaf;
      default:
        return Trees;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F5F6F3]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8DD75C]" />
            <span className="text-xs font-semibold tracking-widest text-[#173D27] uppercase">
              What We Do
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-extrabold text-[#173D27] tracking-tight mb-4 [text-wrap:balance]">
            Everything Your Outdoor Space Needs.
          </h2>
          <p className="text-base sm:text-lg text-[#202720]/75 leading-relaxed">
            Practical landscaping and groundworks services designed to improve the look, function and finish of your property.
          </p>
        </div>

        {/* 8 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = getIcon(service.iconName);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative flex flex-col justify-between p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-2xs hover:shadow-md hover:border-[#8DD75C]/70 transition-all duration-300"
              >
                <div>
                  {/* Icon & Category Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#F3F8EF] border border-[#8DD75C]/30 flex items-center justify-center text-[#173D27] group-hover:bg-[#8DD75C] transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[#173D27]" />
                    </div>
                    <span className="text-[11px] font-medium text-[#687168] bg-[#F5F6F3] px-2.5 py-1 rounded-md">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#173D27] mb-2.5 group-hover:text-[#173D27]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#202720]/80 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Feature bullet list */}
                  <div className="space-y-1.5 pt-3 border-t border-neutral-100 mb-6">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-[#202720]/75">
                        <Check className="w-3.5 h-3.5 text-[#8DD75C] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action button */}
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full mt-auto flex items-center justify-between pt-3 text-xs font-semibold text-[#173D27] hover:text-[#173D27] border-t border-neutral-100 group/btn transition-colors"
                >
                  <span>Enquire about this service</span>
                  <div className="w-6 h-6 rounded-full bg-[#F3F8EF] flex items-center justify-center text-[#173D27] group-hover/btn:bg-[#8DD75C] transition-colors">
                    <ArrowRight className="w-3 h-3 text-[#173D27]" />
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#202720]/75">
            Looking for something specific or a combined garden &amp; driveway project?{' '}
            <button
              onClick={() => onSelectService('Other')}
              className="font-semibold text-[#173D27] underline decoration-[#8DD75C] decoration-2 underline-offset-4 hover:text-[#0f2719]"
            >
              Get in touch to discuss your requirements.
            </button>
          </p>
        </div>

      </div>
    </section>
  );
};
