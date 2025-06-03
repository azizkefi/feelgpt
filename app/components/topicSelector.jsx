'use client';

import { motion } from 'framer-motion';

export default function TopicSelector({ onSelect }) {
  const buttons = [
    { label: 'Informations Générales', value: 'general' },
    { label: 'Conseils & Hygiène', value: 'hygiene' },
    { label: 'Carte & Emplacement', value: 'map' },
    { label: 'Autres questions & suggestions', value: 'other' },
  ];

  return (
    <div className="flex flex-col items-center justify-center  gap-16 mb-24  md:mb-12">
      {/* Heading */}
      <motion.h1
         initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'linear' }}
        className="text-3xl text-[#104585] font-bold text-center"
      >
        Ahla bik , fesh najem n3awnek?
      </motion.h1>

      {/* Buttons with float + initial pop */}
      <div className="flex gap-4 flex-wrap justify-center">
        {buttons.map((btn, i) => (
          <motion.button
            key={btn.value}
            onClick={() => onSelect(btn.value)}
            initial={{ opacity: 0}}
            animate={{
              opacity: 1,
         
              y: [0, -20, 0], 
          
            }}
            transition={{
              delay: i * 0.1,
              duration: 0.6,
              type: 'spring',
              opacity: { duration: 0.6 },
           
              y: {
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
               
              },
            }}
          whileHover={{
  scale: 1.1,
  transition: {
    type: 'spring',
    stiffness: 400,
    damping: 10,
  },
}}
            className="px-6 py-3 rounded-full shadow-xl font-semibold text-[ivory] bg-gradient-to-br from-[#3eabe2] to-[#78c8e3] hover:opacity-95 transition-transform"
          >
            {btn.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
