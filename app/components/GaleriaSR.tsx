'use client'

import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import NavbarSR from './Navbar';
import { DreamOrphans } from '../fonts';
import FooterSR from './Footer';


interface Artwork {
  id: number;
  title: string;
  thumbnail: string;
  full: string;
}

// Exemplo de dados - substitua pelas suas imagens reais
const artworks: Artwork[] = [
  {
    id: 1,
    title: "TBA",
    thumbnail: "/images/unknown.png",
    full: "/images/unknown.png"
  },
  {
    id: 2,
    title: "TBA",
    thumbnail: "/images/unknown.png",
    full: "/images/unknown.png"
  },
  {
    id: 3,
    title: "TBA",
    thumbnail: "/images/unknown.png",
    full: "/images/unknown.png"
  },
  {
    id: 4,
    title: "TBA",
    thumbnail: "/images/unknown.png",
    full: "/images/unknown.png"
  },
  {
    id: 5,
    title: "TBA",
    thumbnail: "/images/unknown.png",
    full: "/images/unknown.png"
  },
  {
    id: 6,
    title: "TBA",
    thumbnail: "/images/unknown.png",
    full: "/images/unknown.png"
  },
  {
    id: 7,
    title: "TBA",
    thumbnail: "/images/unknown.png",
    full: "/images/unknown.png"
  },
  {
    id: 8,
    title: "TBA",
    thumbnail: "/images/unknown.png",
    full: "/images/unknown.png"
  },
  {
    id: 9,
    title: "TBA",
    thumbnail: "/images/unknown.png",
    full: "/images/unknown.png"
  },

];


export default function GaleriaSR() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const navigateToImage = (index: number) => {
    setSelectedIndex(index);
  };

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : artworks.length - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev !== null && prev < artworks.length - 1 ? prev + 1 : 0));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedIndex === null) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
  };

  React.useEffect(() => {
    if (selectedIndex !== null) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedIndex]);

  return (
    <div className={`${DreamOrphans.className} min-h-screen bg-linear-to-b bg-vapid to-vanished pt-20`}>

    <NavbarSR/>
    
      {/* Header */}
      <header className="py-16 px-6 text-center ">
        <h1 className='text-6xl mb-3 tracking-tight text-wanderlust'>
        Galeria
        </h1>
        <p className='text-2xl font-light text-feisty'>
        Explore o mundo e personagens de Slow Risers
        </p>
      </header>

      {/* Gallery Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork, index) => (
            <div
              key={artwork.id}
              onClick={() => openLightbox(index)}
              className="group cursor-pointer relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={artwork.thumbnail}
                alt={artwork.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-wanderlust text-xl">
                    {artwork.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-900 flex items-center justify-center bg-black/95 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:rotate-90 cursor-pointer"
            aria-label="Fechar"
          >
            <X size={28} strokeWidth={1.5} />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110 cursor-pointer"
            aria-label="Anterior"
          >
            <ChevronLeft size={32} strokeWidth={1.5} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110 cursor-pointer"
            aria-label="Próxima"
          >
            <ChevronRight size={32} strokeWidth={1.5} />
          </button>

          {/* Main Image Container */}
          <div
            className=" relative w-full h-full flex items-center justify-center px-6 pb-32 pt-20"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={artworks[selectedIndex].full}
              alt={artworks[selectedIndex].title}
              className="max-w-full max-h-full object-contain rounded-sm shadow-2xl animate-in zoom-in duration-500"
            />
          </div>

          {/* Thumbnail Navigation Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black via-black/90 to-transparent pt-16 pb-3 px-6">
            <div className="flex gap-3 justify-center items-center overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
              {artworks.map((artwork, index) => (
                <button
                  key={artwork.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateToImage(index);
                  }}
                  className={`shrink-0 relative rounded-sm overflow-hidden transition-all duration-300 ${
                    index === selectedIndex
                      ? 'ring-4 ring-feisty scale-90 shadow-xl shadow-feisty/10'
                      : 'hover:ring-2 hover:ring-white/50 hover:scale-90 opacity-70 hover:opacity-100 cursor-pointer'
                  }`}
                >
                  <img
                    src={artwork.thumbnail}
                    alt={artwork.title}
                    className="w-20 h-20 object-cover"
                  />
                  {index === selectedIndex && (
                    <div className="absolute inset-0 bg-feisty/20 pointer-events-none"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

    <FooterSR />

    </div>
  );
}