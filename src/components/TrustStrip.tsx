import React from 'react';
import { CarFront, Trees, Layers, BadgePercent } from 'lucide-react';
import { TRUST_STRIP_ITEMS } from '../data/content';

export const TrustStrip: React.FC = () => {
  const icons = [CarFront, Trees, Layers, BadgePercent];

  return (
    <section className="border-y border-neutral-100 bg-[#F5F6F3]/70 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {TRUST_STRIP_ITEMS.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={item.title}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-white border border-neutral-200/60 shadow-2xs transition-transform hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#F3F8EF] text-[#173D27] shrink-0 border border-[#8DD75C]/30">
                  <Icon className="w-5 h-5 text-[#173D27]" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-semibold text-[#173D27] truncate">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#202720]/70 truncate">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
