'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, Heart } from 'lucide-react';
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
  thumbnail: string; // Imagem pequena (busto/rosto)
  fullBody: string;  // Imagem corpo inteiro
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

// Dados de exemplo - substitua pelos seus personagens
const characters: Character[] = [
  {
    id: 1,
    name: "Ramón Rameiro",
    age: 21,
    thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    fullBody: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=800&fit=crop",
    description: "Uma artista sonhadora que adora criar mundos fantásticos através de suas pinturas. Sempre com um sorriso no rosto e ideias criativas.",
    funFacts: [
      { label: "Comida Favorita", value: "Pizza de 4 queijos", icon: "*" },
      { label: "Hobby", value: "Pintura e desenho", icon: "*" },
      { label: "Cor Favorita", value: "Rosa pastel", icon: "*" },
      { label: "Animal Favorito", value: "Gatos", icon: "*" },
    ]
  },
  {
    id: 2,
    name: "Tony",
    age: 25,
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    fullBody: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop",
    description: "Um músico talentoso e aventureiro. Tony vive pela música e não perde a chance de explorar novos lugares.",
    funFacts: [
      { label: "Comida Favorita", value: "Hambúrguer artesanal", icon: "*" },
      { label: "Instrumento", value: "Guitarra elétrica", icon: "*" },
      { label: "Estilo Musical", value: "Rock Indie", icon: "*" },
      { label: "Bebida", value: "Café preto", icon: "*" },
    ]
  },
  {
    id: 3,
    name: "Olga",
    age: 28,
    thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    fullBody: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop",
    description: "Chef de cozinha apaixonada por experimentação. Olga transforma ingredientes simples em obras-primas gastronômicas.",
    funFacts: [
      { label: "Comida Favorita", value: "Risoto de funghi", icon: "*" },
      { label: "Especialidade", value: "Culinária italiana", icon: "*" },
      { label: "Tempero Preferido", value: "Manjericão fresco", icon: "*" },
      { label: "Sobremesa", value: "Tiramisù", icon: "*" },
    ]
  },
  {
    id: 4,
    name: "Jeff",
    age: 23,
    thumbnail: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    fullBody: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop",
    description: "Gamer profissional e streamer. Jeff conquistou milhares de fãs com seu carisma e habilidades incríveis nos jogos.",
    funFacts: [
      { label: "Comida Favorita", value: "Ramen picante", icon: "*" },
      { label: "Jogo Favorito", value: "Dark Souls", icon: "*" },
      { label: "Plataforma", value: "PC Master Race", icon: "*" },
      { label: "Snack", value: "Doritos", icon: "*" },
    ]
  },
  {
    id: 5,
    name: "Jeff",
    age: 23,
    thumbnail: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    fullBody: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop",
    description: "Gamer profissional e streamer. Jeff conquistou milhares de fãs com seu carisma e habilidades incríveis nos jogos.",
    funFacts: [
      { label: "Comida Favorita", value: "Ramen picante", icon: "*" },
      { label: "Jogo Favorito", value: "Dark Souls", icon: "*" },
      { label: "Plataforma", value: "PC Master Race", icon: "*" },
      { label: "Snack", value: "Doritos", icon: "*" },
    ]
  },
  {
    id: 6,
    name: "Jeff",
    age: 23,
    thumbnail: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    fullBody: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop",
    description: "Gamer profissional e streamer. Jeff conquistou milhares de fãs com seu carisma e habilidades incríveis nos jogos.",
    funFacts: [
      { label: "Comida Favorita", value: "Ramen picante", icon: "*" },
      { label: "Jogo Favorito", value: "Dark Souls", icon: "*" },
      { label: "Plataforma", value: "PC Master Race", icon: "*" },
      { label: "Snack", value: "Doritos", icon: "*" },
    ]
  },
  {
    id: 7,
    name: "Jeff",
    age: 23,
    thumbnail: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    fullBody: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop",
    description: "Gamer profissional e streamer. Jeff conquistou milhares de fãs com seu carisma e habilidades incríveis nos jogos.",
    funFacts: [
      { label: "Comida Favorita", value: "Ramen picante", icon: "*" },
      { label: "Jogo Favorito", value: "Dark Souls", icon: "*" },
      { label: "Plataforma", value: "PC Master Race", icon: "*" },
      { label: "Snack", value: "Doritos", icon: "*" },
    ]
  },
];

// Componente do Card do Personagem
function CharacterCard({ character, onClick }: CharacterCardProps) {
  return (
    <div
      onClick={onClick}
      className="relative group cursor-pointer"
    >
      {/* Container da imagem com forma arredondada */}
      <div className="relative aspect-square rounded-3xl overflow-hidden bg-linear-to-br from-purple-100 to-pink-100 shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
        <Image
          src={character.thumbnail}
          alt={character.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover"
          priority={false}
        />
        
        {/* Overlay no hover */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Nome no hover */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className={`text-sm font-medium ${DreamOrphans.className}`}>Clique para ver mais</p>
        </div>
      </div>
      
      {/* Nome abaixo da imagem */}
      <div className="mt-3 text-center">
        <h3 className={`text-xl font-bold text-wanderlust ${ElementaryGothic.className}`}>{character.name}</h3>
      </div>
    </div>
  );
}

// Componente do Modal do Personagem
function CharacterModal({ character, onClose }: CharacterModalProps) {
  const [hoveredFact, setHoveredFact] = useState<number | null>(null);

  if (!character) return null;

  return (
    <div className="fixed inset-0 bg-vanished/80 bg-opacity-80 z-600 flex items-center justify-center animate-fadeIn">
      <div className="bg-feisty rounded-3xl max-w-5xl w-full h-[95vh] overflow-hidden shadow-2xl animate-scaleIn p-7 pl-1">
        
        {/* Header */}
        {/* <div className="flex absolute items-center justify-between p-5 bg-feisty"> */}
          {/* <div>
            <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2 ml-5">
              {character.name}
              <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
            </h2>
            <p className="text-gray-600 mt-1 ml-5">Idade: {character.age} anos</p>
          </div> */}
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-vanished transition-colors bg-wanderlust rounded-full p-2 shadow-lg hover:shadow-xl cursor-pointer relative left-240 bottom-3"
            aria-label="Fechar modal"
          >
            <X className="w-7 h-7" />
          </button>
        {/* </div> */}

        {/* Conteúdo */}
        <div className="grid md:grid-cols-2 gap-20 overflow-y-auto h-[90vh]">
          
          {/* Imagem do personagem (corpo inteiro) */}
          <div className="flex items-center justify-center">
            <div className="relative bottom-11 w-full max-w-sm aspect-3/4 rounded-2xl overflow-hidden shadow-xl bg-wanderlust">
              <Image
                src={character.fullBody}
                alt={`${character.name} - corpo inteiro`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Informações e Fun Facts */}
          <div className="space-y-6">
            
            {/* Descrição */}
            <div>
              <h3 className={`text-xl font-bold text-underdog mb-1 flex items-center gap-2 pt-2 ${ElementaryGothic.className}`}>
                {character.name}
              </h3>
              <p className="text-vanished/80 leading-relaxed bg-feisty p-1 rounded-xl">
                {character.description}
              </p>
            </div>

            {/* Fun Facts */}
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
                    {/* Card do Fun Fact */}
                    <div className={`text-vapid p-4 rounded-xl cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${DreamOrphans.className}`}>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold flex items-center gap-1">
                          {fact.icon && <span className="text-xl">{fact.icon}</span>}
                          {fact.label}
                        </span>
                      </div>
                    </div>

                    {/* Resposta revelada no hover */}
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

// Componente Principal
export default function PersonagensSR() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  return (
    <div className="min-h-screen bg-linear-to-b bg-vapid to-vanished p-8">

      <NavbarSR/>

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="py-16 text-center pt-6">
          <h2 className={`text-5xl text-wanderlust pb-2 pt-25 ${DreamOrphans.className}`}>
          Conheça os Personagens
          </h2>

          <p className={`${DreamOrphans.className} text-2xl text-feisty`}>Um elenco de figuras interessantes</p>
        </div>

        <h3 className={`text-4xl text-wanderlust text-center pb-5 ${DreamOrphans.className}`}>Os Slow Risers</h3>

        {/* Grid de Personagens */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {characters.slice(0,6).map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onClick={() => setSelectedCharacter(character)}
            />
          ))}
        </div>

        <h3 className={`text-4xl text-wanderlust text-center pt-10 pb-5 ${DreamOrphans.className}`}>Os Slow Risers</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {characters.slice(4,6).map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onClick={() => setSelectedCharacter(character)}
            />
          ))}
        </div>



      </div>

      {/* Modal */}
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