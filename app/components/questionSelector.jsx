'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';

const questionsByTopic = {
  general: [
    "Quels sont les horaires d’ouverture des parcs ?",
    "Quels sont les meilleurs jours pour visiter ?",
    "Peut-on sortir du parc et revenir plus tard ?",
    "Où sont situés les parcs ?",
    "Comment puis-je acheter des billets ?",
    "Y a-t-il des réductions ou des offres spéciales ?",
        "Y a-t-il un photographe dans le parc ?"
  ],
  access: [
    "Les enfants doivent-ils être accompagnés ?",
    "Y a-t-il des aires de jeux ou attractions adaptées aux petits enfants ?",
    "Y a-t-il des restrictions de taille ou de santé pour certaines attractions ?",
    "Y a-t-il un service médical sur place ?"
  ],
  restauration: [
    "Y a-t-il des restaurants ou snacks dans le parc ?",
    "Peut-on apporter son propre pique-nique ?"
  ],
  events: [
    "Peut-on organiser un anniversaire ou un événement privé à Carthage Land ?",
    "Y a-t-il des spectacles ou animations ?",
     "Où peut-on consulter le programme des animations ?"
  ],
  confort: [
    "Y a-t-il des zones d’ombre ou des espaces pour se reposer ?",
    "Y a-t-il une salle pour changer les bébés ?",
    "Y a-t-il des exigences vestimentaires ?",
    "Peut-on venir en sandales ou en tongs ?"
  ],
  payment: [
    "Le parc accepte-t-il les cartes bancaires ?",
    "Y a-t-il un distributeur automatique de billets ?"
  ],

  reclamations: [
    "Que faire si un enfant se perd dans le parc ?",
    "Qui contacter en cas de réclamation ?"
  ],
  contacts: [
    "Comment contacter Carthage Land Hammamet ?",
    "Comment contacter Carthage Land Tunis ?"
  ],
};

const answers = {
  "Quels sont les horaires d'ouverture ?": "Le parc est ouvert de 9h à 18h tous les jours.",
  "Y a-t-il un parking ?": "Oui, un parking gratuit est disponible à l'entrée.",
  "Quelles sont les règles d'hygiène ?": "Merci de respecter les consignes affichées et d'utiliser les bornes de gel.",
  "Y a-t-il des fontaines d'eau ?": "Oui, des fontaines sont disponibles près des zones de restauration.",
  "Où se trouve la zone enfants ?": "Elle est située à gauche après l'entrée principale.",
  "Comment accéder à la sortie ?": "Suivez les panneaux 'Sortie' ou demandez au personnel.",
  "Comment faire une suggestion ?": "Un formulaire est disponible à la sortie du parc.",
  "Puis-je proposer une animation ?": "Oui, via notre site web ou directement à l'accueil.",
  "Y a-t-il des accès pour personnes à mobilité réduite ?": "Oui, le parc est accessible aux personnes à mobilité réduite.",
  "Les animaux sont-ils autorisés ?": "Seuls les chiens guides sont autorisés dans le parc.",
  "Quels types de restauration sont disponibles ?": "Vous trouverez des restaurants, snacks et aires de pique-nique dans le parc.",
  "Peut-on pique-niquer dans le parc ?": "Oui, des espaces dédiés au pique-nique sont prévus.",
  "Comment réserver pour un groupe ?": "Veuillez contacter notre service groupes via le site ou à l'accueil.",
  "Y a-t-il des événements spéciaux ?": "Des événements sont organisés régulièrement, consultez notre site pour le programme.",
  "Où sont les toilettes ?": "Les toilettes sont situées à plusieurs endroits, près des entrées et des aires de restauration.",
  "Y a-t-il des espaces de repos ?": "Oui, des bancs et espaces ombragés sont à votre disposition dans tout le parc.",
  "Quels moyens de paiement sont acceptés ?": "Nous acceptons espèces, cartes bancaires et paiements mobiles.",
  "Peut-on acheter des billets en ligne ?": "Oui, l'achat de billets en ligne est possible sur notre site officiel.",
  "Quelles animations sont proposées aujourd'hui ?": "Consultez le programme du jour affiché à l'entrée ou sur notre site.",
  "Faut-il réserver pour les spectacles ?": "La plupart des spectacles sont en accès libre, certains nécessitent une réservation.",
  "Comment faire une réclamation ?": "Rendez-vous à l'accueil ou remplissez le formulaire en ligne pour toute réclamation.",
  "Quel est le délai de traitement des réclamations ?": "Les réclamations sont traitées sous 48h ouvrées.",
  "Comment contacter le service client ?": "Vous pouvez nous joindre par téléphone, email ou à l'accueil du parc.",
  "Où se trouve le bureau d'information ?": "Le bureau d'information est situé à droite après l'entrée principale.",
  "Où acheter des souvenirs ?": "La boutique de souvenirs se trouve près de la sortie du parc.",
  "Peut-on prendre des photos dans le parc ?": "Oui, la prise de photos est autorisée sauf indication contraire sur certains espaces."
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
 
      <><button onClick={onBack} className="text-[#A2352A] mb-6">
      <ChevronLeft size={40} />
    </button><div className="flex flex-col items-center">
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
      </div></>
    
  );
}
