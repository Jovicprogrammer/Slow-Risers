'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import NavbarSR from '@/components/Navbar-SR';
import { ElementaryGothic } from '../fonts';
import VoltarVesquicio from '@/components/Slow-Risers/Voltar-Vesquicio';

// Tipos
interface Location {
  id: number;
  name: string;
  x: number; // Posição X no mapa (em %)
  y: number; // Posição Y no mapa (em %)
  description: string;
  images: string[];
  facts?: string[];
  pinColor?: string; // Cor do pin (opcional)
}

interface LocationModalProps {
  location: Location | null;
  onClose: () => void;
}

// Dados de exemplo - suas localizações
const locations: Location[] = [
  {
    id: 1,
    name: "Fornia",
    x: 25,
    y: 30,
    description: "A capital do reino, uma cidade próspera cercada por muralhas antigas. Conhecida por seus mercados vibrantes e torres imponentes.",
    images: [
      "https://images.unsplash.com/photo-1518608159586-066f4600d8c9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1533093818801-997a2a0d9e02?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=600&fit=crop",
    ],
    facts: [
      "População: ~50.000 habitantes",
      "Fundada há 800 anos",
      "Famosa por seus festivais de verão",
    ],
    pinColor: "bg-red-500"
  },
  {
    id: 2,
    name: "Olby",
    x: 70,
    y: 25,
    description: "Uma vila portuária tranquila, onde pescadores vivem em harmonia. O pôr do sol reflete nas águas calmas da baía.",
    images: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?w=800&h=600&fit=crop",
    ],
    facts: [
      "Maior exportador de peixes",
      "Porto seguro para navios",
      "Festival do Mar anual",
    ],
    pinColor: "bg-blue-500"
  },
  {
    id: 3,
    name: "Wolfe's Den",
    x: 45,
    y: 65,
    description: "Uma floresta densa e misteriosa, lar de criaturas selvagens. Dizem que lobos gigantes protegem seus segredos mais profundos.",
    images: [
      "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=600&fit=crop",
    ],
    facts: [
      "Território selvagem",
      "Lar da matilha ancestral",
      "Poucos ousam adentrar",
    ],
    pinColor: "bg-green-600"
  },
  {
    id: 4,
    name: "Montanhas Geladas",
    x: 80,
    y: 55,
    description: "Picos nevados que tocam as nuvens. Um lugar de extrema beleza e perigo, guardando ruínas antigas sob o gelo.",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop",
    ],
    facts: [
      "Altitude máxima: 4.500m",
      "Temperaturas abaixo de -20°C",
      "Lendas sobre dragões de gelo",
    ],
    pinColor: "bg-cyan-400"
  },
  {
    id: 5,
    name: "Miami",
    x: 47,
    y: 35,
    description: "Picos nevados que tocam as nuvens. Um lugar de extrema beleza e perigo, guardando ruínas antigas sob o gelo.",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop",
    ],
    facts: [
      "Altitude máxima: 4.500m",
      "Temperaturas abaixo de -20°C",
      "Lendas sobre dragões de gelo",
    ],
    pinColor: "bg-cyan-400"
  },
];

// Componente do Pin no mapa
function MapMarker({ location, onClick }: { location: Location; onClick: () => void }) {
  return (
    <button
      className="absolute transform -translate-x-1/2 -translate-y-full cursor-pointer group z-10"
      style={{ left: `${location.x}%`, top: `${location.y}%` }}
      onClick={onClick}
      aria-label={`Ver ${location.name}`}
    >
      {/* Pin com animação */}
      <div className="relative flex items-center justify-center">
        {/* Pulse effect atrás */}
        <div 
          className={`absolute inset-0 ${location.pinColor || 'bg-red-500'} w-10 h-10 rounded-full animate-ping opacity-75`}
          style={{ animationDuration: '2s' }}
        />
        
        {/* Pin principal */}
        <div className={`relative ${location.pinColor || 'bg-red-500'} w-10 h-10 rounded-full shadow-lg group-hover:scale-125 transition-transform duration-200 flex items-center justify-center border-4 border-white`}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="white"
            className="w-5 h-5"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
        
        {/* Tooltip no hover */}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-xl">
          {location.name}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
        </div>
      </div>
    </button>
  );
}

// Componente do Modal da Localização
function LocationModal({ location, onClose }: LocationModalProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!location) return null;

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % location.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => 
      prev === 0 ? location.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-vanished/80 bg-opacity-80 z-[600] flex items-center justify-center p-2 animate-fadeIn">
      <div className="bg-feisty rounded-2xl max-w-6xl w-full max-h-[100vh] overflow-hidden shadow-2xl animate-scaleIn">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-feisty">
          <div className="flex items-center gap-3">
            <div className={`${location.pinColor || 'bg-red-500'} w-12 h-12 rounded-full flex items-center justify-center shadow-lg`}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="white"
                className="w-7 h-7"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-underdog">{location.name}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition-colors bg-white rounded-full p-2 shadow-lg hover:shadow-xl cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Conteúdo */}
        <div className="grid md:grid-cols-2 gap-6 p-6 overflow-y-auto max-h-[calc(100vh-100px)]">
          
          {/* Galeria de Imagens */}
          <div>
            {/* Imagem Principal */}
            <div className="relative aspect-video mb-4 bg-wanderlust rounded-xl overflow-hidden group">
              <Image
                src={location.images[selectedImage]}
                alt={`${location.name} - imagem ${selectedImage + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              
              {/* Navegação */}
              {location.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-800 " />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                    aria-label="Próxima imagem"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-800 " />
                  </button>
                </>
              )}

              {/* Contador */}
              <div className="absolute bottom-3 right-3 bg-vanished/60 text-white px-3 py-1 rounded-full text-sm">
                {selectedImage + 1} / {location.images.length}
              </div>
            </div>

            {/* Miniaturas */}
            {location.images.length > 1 && (
              <div className="grid grid-cols-3 gap-2 ">
                {location.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx
                        ? `${location.pinColor?.replace('bg-', 'border-') || 'border-red-500'} scale-105`
                        : 'border-wanderlust hover:border-underdog cursor-pointer'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Miniatura ${idx + 1}`}
                      fill
                      sizes="150px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Informações */}
          <div className="space-y-6">
            
            {/* Descrição */}
            <div>

              <p className="text-vanished/80 leading-relaxed p-4 rounded-xl">
                {location.description}
              </p>
            </div>

            {/* Fatos */}
            {location.facts && location.facts.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-underdog mb-3 flex items-center gap-2">
                Curiosidades
                </h3>
                <ul className="space-y-2">
                  {location.facts.map((fact, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 bg-wanderlust/30 p-3 rounded-lg"
                    >
                      <span className="text-vapid font-bold">•</span>
                      <span className="text-vanished/80">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

// Componente Principal do Mapa
export default function InteractiveMap() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b bg-vapid to-vanished p-8">
      <div className="max-w-7xl mx-auto">

        <NavbarSR/>
        <VoltarVesquicio/>
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className={`text-5xl font-bold text-feisty pb-7 pt-25 ${ElementaryGothic.className}`}>
          Conheça Drollhaven
          </h2>
        </div>

        {/* Container do Mapa */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Imagem do Mapa */}
          <div className="relative w-full aspect-video bg-wanderlust">
            <Image
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1600&h=900&fit=crop"
              alt="Mapa do mundo"
              fill
              sizes="100vw"
              className="object-cover opacity-80"
              priority
            />
            
            {/* Overlay decorativo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            
            {/* Pins das Localizações */}
            {locations.map((location) => (
              <MapMarker
                key={location.id}
                location={location}
                onClick={() => setSelectedLocation(location)}
              />
            ))}
          </div>

          {/* Legenda */}
          <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Localizações Disponíveis:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => setSelectedLocation(location)}
                  className="flex items-center gap-2 bg-white p-3 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-105 cursor-pointer"
                >
                  <div className={`${location.pinColor || 'bg-red-500'} w-4 h-4 rounded-full`} />
                  <span className="text-sm font-medium text-gray-700">{location.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedLocation && (
        <LocationModal
          location={selectedLocation}
          onClose={() => setSelectedLocation(null)}
        />
      )}
    </div>
  );
}