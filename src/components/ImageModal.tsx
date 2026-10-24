import React, { useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GalleryProject } from '../types';

interface ImageModalProps {
  project: GalleryProject | null;
  onClose: () => void;
  onEnquire: (category: string) => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  project,
  onClose,
  onEnquire,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-200 bg-white">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-1 rounded-md bg-[#F3F8EF] text-xs font-semibold text-[#173D27]">
                {project.category}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#173D27] truncate">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-500 hover:text-black hover:bg-neutral-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Large Image View */}
          <div className="relative flex-1 bg-black overflow-hidden flex items-center justify-center min-h-[300px] max-h-[65vh]">
            <img
              src={project.imageUrl}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Details & CTA Bar */}
          <div className="p-4 sm:p-5 bg-neutral-50 border-t border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="max-w-xl">
              <p className="text-xs sm:text-sm text-[#202720]/80">
                {project.description}
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onEnquire(project.category);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#8DD75C] hover:bg-[#7ec74e] text-xs sm:text-sm font-semibold text-[#173D27] shadow-xs transition-colors"
              >
                Enquire for My Garden
                <ArrowRight className="w-4 h-4 text-[#173D27]" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
