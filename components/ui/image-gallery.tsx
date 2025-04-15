'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
    // Prevenir scroll cuando la galería está abierta
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setIsOpen(false);
    // Restaurar scroll cuando la galería se cierra
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg border border-cyan-900/50 aspect-video cursor-pointer"
            onClick={() => openGallery(index)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${alt} captura ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Modal de galería */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeGallery}
        >
          <div className="relative w-full max-w-4xl h-full max-h-[80vh] p-4 flex items-center justify-center">
            {/* Botón de cerrar */}
            <button 
              className="absolute top-6 right-6 z-10 text-white hover:text-cyan-300 transition-colors"
              onClick={closeGallery}
            >
              <X className="w-8 h-8" />
            </button>
            
            {/* Navegación izquierda */}
            <button 
              className="absolute left-5 z-10 bg-black/50 rounded-full p-2 text-white hover:text-cyan-300 hover:bg-black/70 transition-colors"
              onClick={goToPrevious}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            {/* Imagen actual */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={images[currentIndex] || "/placeholder.svg"}
                alt={`${alt} captura ${currentIndex + 1}`}
                fill
                className="object-contain"
              />
              
              {/* Indicador de posición */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/60 rounded-full py-1 px-4 text-white">
                <p className="pixel-text-sm">{currentIndex + 1} / {images.length}</p>
              </div>
            </div>
            
            {/* Navegación derecha */}
            <button 
              className="absolute right-5 z-10 bg-black/50 rounded-full p-2 text-white hover:text-cyan-300 hover:bg-black/70 transition-colors"
              onClick={goToNext}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}