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
  // 🏞️ GENERAL
  "Quels sont les horaires d’ouverture des parcs ?":
    "Les parcs sont ouverts tous les jours de 10h à 20h ! 🎢 Les horaires peuvent parfois changer, alors jette un coup d’œil à notre page Facebook ou appelle-nous avant de venir, juste pour être sûr.",
  
  "Quels sont les meilleurs jours pour visiter ?":
    "Si tu veux éviter la foule et profiter à fond, viens en semaine (du lundi au jeudi) ! Les weekends, c’est plutôt ambiance fête foraine géante 😄",
  
  "Peut-on sortir du parc et revenir plus tard ?":
    "Oh non... la sortie, c’est comme un toboggan : une fois que t’es descendu, tu peux pas remonter sans un nouveau billet 🎟️",
  
  "Où sont situés les parcs ?":
    "On a deux royaumes magiques ! ✨ Carthage Land Hammamet est à Yasmine Hammamet, et Carthage Land Tunis est aux Berges du Lac, à Tunis.",
  
  "Comment puis-je acheter des billets ?":
    "Tu peux les acheter en ligne (pratique !) sur nos sites officiels ou directement sur place au guichet. Clique, clique, et amuse-toi ! 🧾",
  
  "Y a-t-il des réductions ou des offres spéciales ?":
    "Oh oui ! Groupes, familles ou événements spéciaux... on adore faire plaisir 🎁 Vérifie notre page Facebook ou appelle-nous pour découvrir nos offres du moment.",
  
  "Y a-t-il un photographe dans le parc ?":
    "Oui, tu pourrais bien croiser notre photographe en mission spéciale 📸 Il est là pour capturer tes plus beaux sourires ! Les photos peuvent être achetées en souvenir."
  
  // 🧒 ACCESS
  , "Les enfants doivent-ils être accompagnés ?":
    "Oui, les petits aventuriers de moins de 14 ans doivent venir avec un grand (un adulte de plus de 18 ans). Ensemble, c’est plus rigolo et surtout plus sûr ! 👨‍👧",

  "Y a-t-il des aires de jeux ou attractions adaptées aux petits enfants ?":
    "Bien sûr ! Des zones rien que pour les bouts de chou : Ali Baba, Maya Kids ou encore Cinema Kids. C’est tout doux, tout rigolo 🧸",

  "Y a-t-il des restrictions de taille ou de santé pour certaines attractions ?":
    "Eh oui, certaines attractions ont leurs petites règles : taille, santé, conditions physiques… Tout ça pour que tout le monde reste en sécurité. 🎡",

  "Y a-t-il un service médical sur place ?":
    "Pas de panique ! Une infirmerie est là si quelqu’un se blesse ou se sent patraque. On prend soin de nos visiteurs 🩺",

  // 🍔 RESTAURATION
  "Y a-t-il des restaurants ou snacks dans le parc ?":
    "Oh oui ! Plusieurs stands de délices t’attendent pour recharger les batteries. Crêpes, burgers, glaces… miam 😋",

  "Peut-on apporter son propre pique-nique ?":
    "Hélas non... Pour des raisons d’hygiène (et éviter les fourmis dans les sacs), la nourriture extérieure est interdite. Mais nos snacks sont là pour ça 🍟",

  // 🎉 EVENTS
  "Peut-on organiser un anniversaire ou un événement privé à Carthage Land ?":
    "Absolument ! Un anniversaire dans un parc, c’est la fête assurée 🥳 Team building ou sortie scolaire ? On gère aussi. Contacte notre équipe et on te prépare un moment magique !",

  "Y a-t-il des spectacles ou animations ?":
    "Oui ! Danse, acrobaties, parades… il se passe toujours quelque chose d’incroyable. Garde les yeux et les oreilles ouverts 🎭",

  "Où peut-on consulter le programme des animations ?":
    "Tu peux le voir affiché à l’entrée du parc ou le retrouver sur notre page Facebook. Et hop, direction le fun ! 🎉",

  // 🪑 CONFORT
  "Y a-t-il des zones d’ombre ou des espaces pour se reposer ?":
    "Oui, des bancs confortables t’attendent à l’ombre pour une petite pause bien méritée. Repose-toi avant de repartir à l’aventure 🌳",

  "Y a-t-il une salle pour changer les bébés ?":
    "Oui, les tout-petits ont aussi leur espace rien que pour eux, avec tables à langer dans les sanitaires 👶",

  "Y a-t-il des exigences vestimentaires ?":
    "Une tenue décente est souhaitée. Pour les zones aquatiques, maillot ou burkini sont obligatoires. Pas de pyjamas Spiderman, désolé 😅",

  "Peut-on venir en sandales ou en tongs ?":
    "Oui, mais pour certaines attractions un peu plus sportives, des chaussures fermées sont recommandées 👟",

  // 💳 PAYMENT
  "Le parc accepte-t-il les cartes bancaires ?":
    "Oui, la plupart des points de vente acceptent les cartes. Pas besoin de venir avec une bourse en cuir médiéval 💳",

  "Y a-t-il un distributeur automatique de billets ?":
    "Oui ! Un distributeur est disponible près du parc, au cas où tu aurais oublié ton trésor 🏦",

  // 🛑 RECLAMATIONS
  "Que faire si un enfant se perd dans le parc ?":
    "Préviens tout de suite un membre du personnel ! Et pssst… note ton numéro sur un bracelet ou un papier dans la poche de ton enfant, ça aide beaucoup 👦📞",

  "Qui contacter en cas de réclamation ?":
    "Tu peux nous contacter via le site web, par téléphone, ou te rendre directement au service client dans le parc. On est là pour t’écouter 🧾",

  // ☎️ CONTACTS
  "Comment contacter Carthage Land Hammamet ?":
    "Téléphone : (+216) 72 240 111 📞 — Email : reception.carthagelandh@carthageland.com.tn. Et hop, à ton service !",

  "Comment contacter Carthage Land Tunis ?":
    "Téléphone : (+216) 70 020 820 📞 — Email : sales@carthagelandtunis.com.tn. À très vite !"
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
