'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';

const questionsByTopic = {
  general: [
    "Quels sont les horaires d’ouverture ?",
    "Y a-t-il un parking ?",
  ],
  hygiene: [
    "Quelles sont les règles d’hygiène ?",
    "Y a-t-il des fontaines d’eau ?",
  ],
  map: [
    "Où se trouve la zone enfants ?",
    "Comment accéder à la sortie ?",
  ],
  other: [
    "Comment faire une suggestion ?",
    "Puis-je proposer une animation ?",
  ]
};

const answers = {
  "Quels sont les horaires d’ouverture ?": "Le parc est ouvert de 9h à 18h tous les jours.",
  "Y a-t-il un parking ?": "Oui, un parking gratuit est disponible à l’entrée.",
  "Quelles sont les règles d’hygiène ?": "Merci de respecter les consignes affichées et d’utiliser les bornes de gel.",
  "Y a-t-il des fontaines d’eau ?": "Oui, des fontaines sont disponibles près des zones de restauration.",
  "Où se trouve la zone enfants ?": "Elle est située à gauche après l’entrée principale.",
  "Comment accéder à la sortie ?": "Suivez les panneaux 'Sortie' ou demandez au personnel.",
  "Comment faire une suggestion ?": "Un formulaire est disponible à la sortie du parc.",
  "Puis-je proposer une animation ?": "Oui, via notre site web ou directement à l’accueil.",
};

export default function QuestionSelector({ topic, onBack }) {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const questions = questionsByTopic[topic] || [];
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    if (selectedQuestion && typedRef.current) {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }

      typedInstance.current = new Typed(typedRef.current, {
        strings: [answers[selectedQuestion]],
        typeSpeed: 30,
        showCursor: true,
      });
    }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, [selectedQuestion]);

  return (
    <div className="p-4 md:p-8">
      <button onClick={onBack} className="text-[#A2352A] mb-6">
     <ChevronLeft size={40} />
      </button>

      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-6 w-full max-w-3xl">
          {questions.map((q, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-6"
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
            >
              <motion.button
                className="px-6 py-3 rounded-xl shadow-md font-semibold text-[ivory]  text-md md:text-sm bg-gradient-to-br from-[#A2352A] to-[#D75C4C] hover:opacity-90 self-end text-left"
                whileHover={{
                  scale: 1.05,
                  transition: { type: 'spring', stiffness: 300, damping: 15 },
                }}
                onClick={() => setSelectedQuestion(q)}
              >
                {q}
              </motion.button>

              {selectedQuestion === q && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="self-start bg-gray-100 border-gray-100 font-semibold text-gray-600 px-4 py-2 rounded-xl max-w-[75%] text-md md:text-sm shadow-md"
                >
                  <span ref={typedRef}></span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
