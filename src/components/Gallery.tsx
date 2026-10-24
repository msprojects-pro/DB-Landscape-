import React, { useState } from 'react';
import { Maximize2, Compass, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { GALLERY_PROJECTS } from '../data/content';
import { GalleryProject } from '../types';

interface GalleryProps {
  onImageClick: (project: GalleryProject) => void;
  onEnquireProject: (category: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({
  onImageClick,
  onEnquireProject,
}) => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { label: 'All Styles', value: 'all' },
    { label: 'Driveways', value: 'Driveways' },
    { label: 'Patios & Paving', value: 'Patios & Paving' },
    { label: 'Garden Transformations', value: 'Garden Transformations' },
    { label: 'Decking & Fencing', value: 'Decking & Fencing' }
  ];

  const filteredProjects =
    filter === 'all'
      ? GALLERY_PROJECTS
      : GALLERY_PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="work" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8DD75C]" />
              <span className="text-xs font-semibold tracking-widest text-[#173D27] uppercase">
                Recent Inspiration
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-extrabold text-[#173D27] tracking-tight [text-wrap:balance]">
              Outdoor Spaces Worth Coming Home To.
            </h2>
            <p className="mt-3 text-base text-[#202720]/75 max-w-2xl">
              Explore the kinds of transformations that can make a real difference to your property.
            </p>
          </div>

          {/* Subdued Notice Badge */}
          <div className="shrink-0">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#F3F8EF] border border-[#8DD75C]/30 text-xs font-medium text-[#173D27]">
              <Sparkles className="w-3.5 h-3.5 text-[#8DD75C]" />
              Landscaping Inspiration
            </span>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                filter === cat.value
                  ? 'bg-[#173D27] text-white shadow-xs'
                  : 'bg-[#F5F6F3] text-[#202720]/80 hover:bg-[#F3F8EF] hover:text-[#173D27]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Editorial Gallery Grid */}
        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`${project.aspect} group relative rounded-2xl overflow-hidden border border-neutral-200/90 bg-neutral-100 shadow-sm cursor-pointer`}
              onClick={() => onImageClick(project)}
            >
              {/* Aspect Ratio Container */}
              <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 w-full h-full overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 transition-opacity" />

                {/* Top Badge: Category */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 rounded-md bg-white/95 backdrop-blur-xs text-[11px] font-semibold text-[#173D27]">
                    {project.category}
                  </span>
                </div>

                {/* Top Right Zoom Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#173D27] opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Content Info */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-200 line-clamp-2 mb-3">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs font-medium">
                    <span className="text-[#8DD75C] group-hover:underline flex items-center gap-1">
                      View full photo &amp; details
                    </span>
                    <span className="text-neutral-400">·</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onEnquireProject(project.category);
                      }}
                      className="text-neutral-300 hover:text-white transition-colors"
                    >
                      Enquire about this style
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Editorial Subnote */}
        <div className="mt-10 p-4 rounded-xl bg-[#F5F6F3] border border-neutral-200/60 text-center">
          <p className="text-xs text-[#202720]/70 max-w-3xl mx-auto">
            These examples illustrate modern paving finishes, garden layouts, and outdoor decking designs. DB Paving &amp; Landscapes tailors each project to your exact site layout and specifications.
          </p>
        </div>

      </div>
    </section>
  );
};
