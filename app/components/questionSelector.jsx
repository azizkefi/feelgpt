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
    "Les parcs sont ouverts tous les jours de 10h à 20h ! 🎢 Les horaires peuvent parfois changer, alors n'hésite pas à jeter un œil sur notre page Facebook ou à nous passer un petit coup de fil avant de venir. ☀️ **Petit conseil de pro : n’oublie pas ta crème solaire, les UV ne prennent pas de vacances !**\n\n🔴 Si tu es prêt pour l'aventure, clique sur le gros bouton rouge pour réserver tes billets !",

  "Quels sont les meilleurs jours pour visiter ?":
    "Envie de calme et de manèges sans file d’attente ? Viens en semaine, entre lundi et jeudi, c’est la meilleure option pour vivre une journée tranquille. Le weekend, c’est plus vivant, plus bruyant… plus rigolo aussi 😄",

  "Peut-on sortir du parc et revenir plus tard ?":
    "Ah mince, non… Une fois sorti, il faut un nouveau billet pour revenir. C’est comme les montagnes russes : on ne peut pas les remonter en marche arrière 😅",

  "Où sont situés les parcs ?":
    "Deux parcs, deux ambiances ! 🎡 Carthage Land Hammamet se trouve à Yasmine Hammamet, Rue de la Médina. Et Carthage Land Tunis est aux Berges du Lac, Avenue Cheikh Zayed. Suis les cris de joie, tu ne peux pas te tromper 😉",

  "Comment puis-je acheter des billets ?":
    "Tu peux acheter tes billets en ligne (le plus rapide), ou bien directement au guichet. 🎫 **Astuce futée : en ligne, tu gagnes du temps à l’entrée et tu peux planifier ton arrivée comme un vrai stratège !**\n\n🔴 Tu veux éviter la file ? Clique sur le bouton rouge et réserve maintenant !",

  "Y a-t-il des réductions ou des offres spéciales ?":
    "Ouiii ! 🎉 Groupes, familles, événements… il y a souvent des bons plans. Jette un œil à notre page Facebook ou appelle-nous, tu pourrais tomber sur une offre qui met le sourire aux lèvres (et au portefeuille 💸)",

  "Y a-t-il un photographe dans le parc ?":
    "Oui ! Tu pourrais croiser nos photographes en train de capturer ta tête à l’envers dans les manèges 😄 Les photos souvenirs sont disponibles à l’achat pour ne jamais oublier cette journée magique 📷",

  // 🧒 ACCESS
  "Les enfants doivent-ils être accompagnés ?":
    "Oui, les petits aventuriers de moins de 14 ans doivent être accompagnés d’un adulte (+18 ans). Parce qu’un manège, c’est encore plus fun avec papa, maman ou tonton qui crie plus fort que toi 😆",

  "Y a-t-il des aires de jeux ou attractions adaptées aux petits enfants ?":
    "Oui ! Maya Kids, Ali Baba, Cinema Kids… des zones douces et amusantes rien que pour les petits, encadrées pour leur sécurité et leur bonheur 🧸",

  "Y a-t-il des restrictions de taille ou de santé pour certaines attractions ?":
    "Certaines attractions ont des critères de taille ou de santé. C’est pas pour embêter, c’est pour garantir la sécurité de tous ! On veut que tu t’amuses à 100% sans souci 🚦",

  "Y a-t-il un service médical sur place ?":
    "Oui, une infirmerie est là au cas où quelqu’un aurait un petit bobo. Mais on espère que tu ne la visiteras que pour dire bonjour au personnel soignant 👩‍⚕️",

  // 🍔 RESTAURATION
  "Y a-t-il des restaurants ou snacks dans le parc ?":
    "Oh que oui ! De la gourmandise en veux-tu en voilà 🍔🍦 Que tu sois team burger ou team crêpe, tu trouveras ton bonheur. Et surtout, bois bien pendant la journée, rester hydraté c’est essentiel ! 💧",

  "Peut-on apporter son propre pique-nique ?":
    "Désolé les marmitons, mais non. Par mesure d’hygiène, la nourriture et les boissons extérieures sont interdites. Heureusement, nos snacks sont là pour combler toutes les envies 😋",

  // 🎉 EVENTS
  "Peut-on organiser un anniversaire ou un événement privé à Carthage Land ?":
    "Oh oui ! 🥳 Anniversaire, sortie scolaire, team building… tout est possible ! Contacte notre équipe commerciale, on te prépare une fête dont tu te souviendras longtemps 🎈",

  "Y a-t-il des spectacles ou animations ?":
    "Ouiii ! Parades, danses, acrobaties... Il y a souvent des surprises au détour d’une allée 🎭 Prépare tes yeux et tes oreilles, ça va swinguer !",

  "Où peut-on consulter le programme des animations ?":
    "Tu trouveras le programme à l’entrée du parc ou sur notre page Facebook officielle. N’hésite pas à le checker pour ne rien manquer des moments magiques ✨",

  // 🪑 CONFORT
  "Y a-t-il des zones d’ombre ou des espaces pour se reposer ?":
    "Oui, plein de bancs à l’ombre pour une pause bien méritée ! 🛋️ Respire, bois un peu d’eau, et repars à l’aventure !",

  "Y a-t-il une salle pour changer les bébés ?":
    "Oui, des espaces tout confort avec tables à langer sont prévus dans les sanitaires. Bébé heureux = parents détendus 👶🍼",

  "Y a-t-il des exigences vestimentaires ?":
    "Une tenue correcte est souhaitée dans le parc (exit le pyjama licorne 🦄). Et pour les zones aquatiques, maillot de bain ou burkini obligatoire !",

  "Peut-on venir en sandales ou en tongs ?":
    "Oui, mais si tu veux faire toutes les attractions sans souci, on recommande des chaussures fermées. Les tongs, c’est bien pour la plage, pas pour les loopings 🌀",

  // 💳 PAYMENT
  "Le parc accepte-t-il les cartes bancaires ?":
    "Oui, la plupart des points de vente acceptent les cartes. C’est pratique pour acheter ton snack préféré sans sortir ton trésor 💳",

  "Y a-t-il un distributeur automatique de billets ?":
    "Oui, un distributeur se trouve près du parc. Histoire de ne jamais être à court de pièces pour une barbe à papa ! 🍭",

  // 🛑 RECLAMATIONS
  "Que faire si un enfant se perd dans le parc ?":
    "Pas de panique ! Préviens vite un membre du personnel. Et petit conseil malin : écris ton numéro sur un bracelet ou un papier dans la poche de ton enfant, au cas où 👦📞",

  "Qui contacter en cas de réclamation ?":
  "Tu peux nous parler directement à l’accueil ou passer par notre site ou par téléphone. On est là pour t’écouter et trouver une solution 💌",

  // ☎️ CONTACTS
  "Comment contacter Carthage Land Hammamet ?":
    "📞 Tél : (+216) 72 240 111\n📧 🏠 Adresse : Rue de la Médina, Yasmine Hammamet, 8050 Hammamet",

  "Comment contacter Carthage Land Tunis ?":
    "📞 Tél : (+216) 70 020 820\n📧 Email : sales@carthagelandtunis.com.tn\n🏠 Adresse : Avenue Cheikh Zayed, Les Berges du Lac, 1053 Tunis"
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
