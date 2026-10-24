import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactQuote } from './components/ContactQuote';
import { Footer } from './components/Footer';
import { ImageModal } from './components/ImageModal';
import { FacebookModal } from './components/FacebookModal';
import { GalleryProject } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Driveways');
  const [activeModalProject, setActiveModalProject] = useState<GalleryProject | null>(null);
  const [isFacebookModalOpen, setIsFacebookModalOpen] = useState<boolean>(false);

  const scrollToQuote = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const el = document.getElementById('quote');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#202720]">
      {/* Navigation */}
      <Navbar onQuoteClick={() => scrollToQuote()} />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onQuoteClick={() => scrollToQuote()}
          onExploreServicesClick={scrollToServices}
        />

        {/* Trust Strip */}
        <TrustStrip />

        {/* Services Section */}
        <Services onSelectService={(service) => scrollToQuote(service)} />

        {/* Featured Inspiration Gallery / Our Work */}
        <Gallery
          onImageClick={(project) => setActiveModalProject(project)}
          onEnquireProject={(category) => scrollToQuote(category)}
        />

        {/* Why Choose DB Paving & Landscapes */}
        <WhyChooseUs onQuoteClick={() => scrollToQuote()} />

        {/* Free Quote Contact Section */}
        <ContactQuote
          selectedService={selectedService}
          onOpenFacebookModal={() => setIsFacebookModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onQuoteClick={() => scrollToQuote()}
        onSelectService={(service) => scrollToQuote(service)}
        onOpenFacebookModal={() => setIsFacebookModalOpen(true)}
      />

      {/* Lightbox Image Preview Modal */}
      <ImageModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onEnquire={(category) => scrollToQuote(category)}
      />

      {/* Facebook Modal */}
      <FacebookModal
        isOpen={isFacebookModalOpen}
        onClose={() => setIsFacebookModalOpen(false)}
      />
    </div>
  );
}
