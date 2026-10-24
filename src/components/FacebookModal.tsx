import React, { useEffect } from 'react';
import { X, Facebook, ExternalLink, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO } from '../data/content';

interface FacebookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FacebookModal: React.FC<FacebookModalProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative z-10 w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl border border-neutral-200"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center">
              <Facebook className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#173D27]">
                Connect on Facebook
              </h3>
              <p className="text-xs text-neutral-500">
                Official Business Name: {BUSINESS_INFO.facebookName}
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#202720]/80 leading-relaxed mb-6">
            Search for <strong>"{BUSINESS_INFO.facebookName}"</strong> directly on Facebook to view community updates, or reach out to us directly via email.
          </p>

          <div className="space-y-3">
            <a
              href={BUSINESS_INFO.facebookSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white text-sm font-semibold shadow-xs transition-colors"
            >
              <Facebook className="w-4 h-4" />
              <span>Search DB Paving on Facebook</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#F3F8EF] hover:bg-[#e4eedd] text-[#173D27] text-xs font-semibold transition-colors"
            >
              <Mail className="w-4 h-4 text-[#8DD75C]" />
              <span>Or Email Us at {BUSINESS_INFO.email}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
