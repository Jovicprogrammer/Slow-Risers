'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import NavbarSR from '../components/Navbar';
import { DreamOrphans, ElementaryGothic } from '../fonts';
import FooterSR from '../components/Footer';

// Tipos
interface FunFact {
  label: string;
  value: string;
  icon?: string;
}

interface Character {
  id: number;
  name: string;
  age: number;
  thumbnail: string;
  fullBodyImages: string[];  // MUDANÇA: array de imagens ao invés de uma única
  description: string;
  funFacts: FunFact[];
}

interface CharacterCardProps {
  character: Character;
  onClick: () => void;
}

interface CharacterModalProps {
  character: Character | null;
  onClose: () => void;
}

// Dados de exemplo
const characters: Character[] = [
  {
    id: 1,
    name: "Ramon Pommier",
    age: 21,
    thumbnail: "/images/unknown.png",
    fullBodyImages: [  // MUDANÇA: agora são 3 imagens
      "/images/unknown.png",
      "/images/SlowRisersLogo.webp",
      "/images/unknown.png"
    ],
    description: "TBA",
    funFacts: [
      { label: "TBA", value: "TBA", icon: "*" },
      { label: "TBA", value: "TBA", icon: "*" },
      { label: "TBA", value: "TBA", icon: "*" },
      { label: "TBA", value: "TBA", icon: "*" },
    ]
  },
  {
    id: 2,
    name: "Ellis Esteves",
    age: 21,
    thumbnail: "/images/unknown.png",
    fullBodyImages: [  // MUDANÇA: agora são 3 imagens
      "/images/unknown.png",
      "/images/unknown.png",
      "/images/unknown.png"
    ],
    description: "TBA",
    funFacts: [
      { label: "TBA", value: "TBA", icon: "*" },
      { label: "TBA", value: "TBA", icon: "*" },
      { label: "TBA", value: "TBA", icon: "*" },
      { label: "TBA", value: "TBA", icon: "*" },
    ]
  },
  {
    id: 3,
    name: "Gravi Duvall",
    age: 21,
    thumbnail: "/images/unknown.png",
    fullBodyImages: [  // MUDANÇA: agora são 3 imagens
      "/images/unknown.png",
      "/images/unknown.png",
      "/images/unknown.png"
    ],
    description: "TBA",
    funFacts: [
      { label: "TBA", value: "TBA", icon: "*" },
      { label: "TBA", value: "TBA", icon: "*" },
      { label: "TBA", value: "TBA", icon: "*" },
      { label: "TBA", value: "TBA", icon: "*" },
    ]
  },
  {
    id: 4,
    name: "Charlie Gamma",
    age: 21,
    thumbnail: "/images/unknown.png",
    fullBodyImages: [  // MUDANÇA: agora são 3 imagens
      "/images/unknown.png",
      "/images/unknown.png",
      "/images/unknown.png"
    ],
    description: "TBA",
    funFacts: [
      { label: "TBA", value: "TBA", icon: "*" },
      { label: "TBA", value: "TBA", icon: "*" },
      { label: "TBA", value: "TBA", icon: "*" },
      { label: "TBA", value: "TBA", icon: "*" },
    ]
  },
  {
    id: 5,
    name: "Rose Jane Borba",
    age: 21,
    thumbnail: "/images/unknown.png",
    fullBodyImages: [  // MUDANÇA: agora são 3 imagens
      "/images/unknown.png",
      "/images/unknown.png",
      "/images/unknown.png"
    ],
    description: "TBA",
    funFacts: [
      { label: "TBA", value: "TBA", icon: "*" },
      { label: "TBA", value: "TBA", icon: "*" },
      { label: "TBA", value: "TBA", icon: "*" },
      { label: "TBA", value: "TBA", icon: "*" },
    ]
  },
  {
    id: 6,
    name: "Fortiori Bonfim",
    age: 21,
    thumbnail: "/images/unknown.png",
    fullBodyImages: [  // MUDANÇA: agora são 3 imagens
      "/images/unknown.png",
      "/images/unknown.png",
      "/images/unknown.png"
    ],
    description: "TBA",
    funFacts: [
      { label: "TBA", value: "TBA", icon: "*" },
      { label: "TBA", value: "TBA", icon: "*" },
      { label: "TBA", value: "TBA", icon: "*" },
      { label: "TBA", value: "TBA", icon: "*" },
    ]
  },
  {
    id: 7,
    name: "Seu Celestino",
    age: 21,
    thumbnail: "/images/unknown.png",
    fullBodyImages: [  // MUDANÇA: agora são 3 imagens
      "/images/unknown.png",
      "/images/unknown.png",
      "/images/unknown.png"
    ],
    description: "TBA",
    funFacts: [
      { label: "TBA", value: "TBA", icon: "*" },
      { label: "TBA", value: "TBA", icon: "*" },
      { label: "TBA", value: "TBA", icon: "*" },
      { label: "TBA", value: "TBA", icon: "*" },
    ]
  },
  {
    id: 8,
    name: "TBA",
    age: 21,
    thumbnail: "/images/unknown.png",
    fullBodyImages: [  // MUDANÇA: agora são 3 imagens
      "/images/unknown.png",
      "/images/unknown.png",
      "/images/unknown.png"
    ],
    description: "TBA",
    funFacts: [
      { label: "TBA", value: "TBA", icon: "*" },
      { label: "TBA", value: "TBA", icon: "*" },
      { label: "TBA", value: "TBA", icon: "*" },
      { label: "TBA", value: "TBA", icon: "*" },
    ]
  },
  {
    id: 9,
    name: "TBA",
    age: 21,
    thumbnail: "/images/unknown.png",
    fullBodyImages: [  // MUDANÇA: agora são 3 imagens
      "/images/unknown.png",
      "/images/unknown.png",
      "/images/unknown.png"
    ],
    description: "TBA",
    funFacts: [
      { label: "TBA", value: "TBA", icon: "*" },
      { label: "TBA", value: "TBA", icon: "*" },
      { label: "TBA", value: "TBA", icon: "*" },
      { label: "TBA", value: "TBA", icon: "*" },
    ]
  },
  {
    id: 10,
    name: "TBA",
    age: 21,
    thumbnail: "/images/unknown.png",
    fullBodyImages: [  // MUDANÇA: agora são 3 imagens
      "/images/unknown.png",
      "/images/unknown.png",
      "/images/unknown.png"
    ],
    description: "TBA",
    funFacts: [
      { label: "TBA", value: "TBA", icon: "*" },
      { label: "TBA", value: "TBA", icon: "*" },
      { label: "TBA", value: "TBA", icon: "*" },
      { label: "TBA", value: "TBA", icon: "*" },
    ]
  },
  // ... resto dos personagens com fullBodyImages como array
];

// Componente do Card (sem mudanças)
function CharacterCard({ character, onClick }: CharacterCardProps) {
  return (
    <div
      onClick={onClick}
      className="relative group cursor-pointer"
    >
      <div className="relative aspect-square rounded-3xl overflow-hidden bg-linear-to-br from-purple-100 to-pink-100 shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
        <Image
          src={character.thumbnail}
          alt={character.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover"
          priority={false}
        />
        
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className={`text-sm font-medium ${DreamOrphans.className}`}>Clique para ver mais</p>
        </div>
      </div>
      
      <div className="mt-3 text-center">
        <h3 className={`text-xl font-bold text-wanderlust ${ElementaryGothic.className}`}>{character.name}</h3>
      </div>
    </div>
  );
}

// Componente do Modal - COM SLIDER
function CharacterModal({ character, onClose }: CharacterModalProps) {
  const [hoveredFact, setHoveredFact] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // NOVO: controla qual imagem está visível

  if (!character) return null;

  // NOVO: Funções para navegar no slider
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === character.fullBodyImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? character.fullBodyImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-vanished/80 bg-opacity-80 z-600 flex items-center justify-center animate-fadeIn">
      <div className="bg-feisty rounded-3xl max-w-5xl w-full h-[95vh] overflow-hidden shadow-2xl animate-scaleIn p-7 pl-1">
        
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-vanished transition-colors bg-wanderlust rounded-full p-2 shadow-lg hover:shadow-xl cursor-pointer relative left-240 bottom-3"
          aria-label="Fechar modal"
        >
          <X className="w-7 h-7" />
        </button>

        <div className="grid md:grid-cols-2 gap-20 overflow-y-auto h-[90vh]">
          
          {/* SLIDER DE IMAGENS */}
          <div className="flex items-center justify-center">
            <div className="relative bottom-11 w-full max-w-sm">
              
              {/* Container da imagem com slider */}
              <div className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-xl bg-wanderlust">
                <Image
                  src={character.fullBodyImages[currentImageIndex]}
                  alt={`${character.name} - imagem ${currentImageIndex + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-opacity duration-300"
                  priority
                />

                {/* Botões de navegação */}
                {character.fullBodyImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-feisty/80 hover:bg-feisty text-wanderlust rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 cursor-pointer"
                      aria-label="Imagem anterior"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-feisty/80 hover:bg-feisty text-wanderlust rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 cursor-pointer"
                      aria-label="Próxima imagem"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Indicadores (bolinhas) */}
              {character.fullBodyImages.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                  {character.fullBodyImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-wanderlust w-8' 
                          : 'bg-wanderlust/30 hover:bg-wanderlust/50'
                      }`}
                      aria-label={`Ir para imagem ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Informações e Fun Facts (sem mudanças) */}
          <div className="space-y-6">
            
            <div>
              <h3 className={`text-xl font-bold text-underdog mb-1 flex items-center gap-2 pt-2 ${ElementaryGothic.className}`}>
                {character.name}
              </h3>
              <p className="text-vanished/80 leading-relaxed bg-feisty p-1 rounded-xl">
                {character.description}
              </p>
            </div>

            <div>
              <h3 className={`font-bold text-underdog mb-2 flex items-center gap-2 ${ElementaryGothic.className}`}>
                Curiosidades
              </h3>
              
              <div className="space-y-1">
                {character.funFacts.map((fact, index) => (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setHoveredFact(index)}
                    onMouseLeave={() => setHoveredFact(null)}
                  >
                    <div className={`text-vapid p-4 rounded-xl cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${DreamOrphans.className}`}>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold flex items-center gap-1">
                          {fact.icon && <span className="text-xl">{fact.icon}</span>}
                          {fact.label}
                        </span>
                      </div>
                    </div>

                    {hoveredFact === index && (
                      <div className="absolute left-0 right-0 top-full mt-2 bg-white border-2 border-vapid p-4 rounded-xl shadow-xl z-1000 animate-slideDown">
                        <p className="text-gray-800 font-medium text-center">
                          {fact.value}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
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
        @keyframes slideDown {
          from { transform: translateY(-10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}

// Componente Principal (sem mudanças significativas)
export default function PersonagensSR() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  return (
    <div className="min-h-screen bg-linear-to-b bg-vapid to-vanished p-8">
      <NavbarSR/>

      <div className="max-w-7xl mx-auto">
        <div className="py-16 text-center pt-6">
          <h2 className={`text-5xl text-wanderlust pb-2 pt-25 ${DreamOrphans.className}`}>
            Conheça os Personagens
          </h2>
          <p className={`${DreamOrphans.className} text-2xl text-feisty`}>Um elenco de figuras interessantes</p>
        </div>

        <h3 className={`text-4xl text-wanderlust text-center pb-5 ${DreamOrphans.className}`}>Os Slow Risers</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {characters.slice(0,7).map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onClick={() => setSelectedCharacter(character)}
            />
          ))}
        </div>

        <h3 className={`text-4xl text-wanderlust text-center pt-10 pb-5 ${DreamOrphans.className}`}>Os Comuns</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {characters.slice(7,10).map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onClick={() => setSelectedCharacter(character)}
            />
          ))}
        </div>
      </div>

      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}

      <FooterSR/>
    </div>
  );
}