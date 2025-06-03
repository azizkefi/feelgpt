import { useState } from 'react';
import { CircleArrowLeft } from 'lucide-react';

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

  return (
    <div className="p-4 md:p-8">
      {/* Back Button */}
      <button onClick={onBack} className="text-[#104585] mb-6">
        <CircleArrowLeft size={40} />
      </button>

      {/* Questions */}
      <div className="flex flex-col items-center  ">
        <div className="flex flex-col gap-6 w-full max-w-3xl">
          {questions.map((q, index) => (
            <div key={index} className="flex flex-col  gap-6">
              <button
                className="px-6 py-3 rounded-xl shadow-md font-semibold text-[ivory] bg-gradient-to-br text-md md:text-sm from-[#3eabe2] to-[#78c8e3] hover:opacity-90 self-end text-left"
                onClick={() => setSelectedQuestion(q)}
              >
                {q}
              </button>

              {selectedQuestion === q && (
                <div className="self-start bg-gray-300 font-semibold text-gray-700 px-4 py-2 rounded-xl max-w-[75%] text-md md:text-sm shadow-md">
                  {answers[q]}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
