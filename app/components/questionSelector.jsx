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

export default function QuestionSelector({ topic, onBack }) {
  const questions = questionsByTopic[topic] || [];

  return (
    <div className="pt-6 px-4">
      {/* Flèche : à gauche de la page */}
      <button
        onClick={onBack}
        className="text-[#104585] "
      >
        <CircleArrowLeft size={40} />
      </button>

      {/* Contenu centré */}
      <div className="flex flex-col items-center  justify-center gap-6 md:gap-12">
        <div className="flex flex-col gap-4">
          {questions.map((q, index) => (
            <button
              key={index}
              className="px-6 py-3 rounded-full shadow-xl font-semibold text-[ivory] bg-gradient-to-br from-[#3eabe2] to-[#78c8e3] hover:opacity-90 transition"
              onClick={() => alert(q)} // à remplacer plus tard
            >
              {q}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
