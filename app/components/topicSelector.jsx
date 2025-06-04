'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function TopicSelector({ onSelect }) {
  const buttons = [
    { label: 'Informations Générales', value: 'general' },
    { label: 'Conseils & Hygiène', value: 'hygiene' },
    { label: 'Carte & Emplacement', value: 'map' },
    { label: 'Autres questions & suggestions', value: 'other' },
  ];

  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, {
        strings: ['Ahla bik, fesh najem n3awnek?'],
        typeSpeed: 30, // adjust to your liking
        showCursor: true,
         startDelay: 1200
      });
    }

    return () => {
      typedInstance.current?.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col mt-8 items-center justify-center gap-8">
      {/* Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        {buttons.map((btn, i) => (
          <motion.button
            key={btn.value}
            onClick={() => onSelect(btn.value)}
            initial={{ opacity: 0 }}
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

      {/* Typed heading */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'linear' }}
        className="text-xl border-2 shadow-md bg-gray-100 border-gray-100 rounded-xl p-4 text-gray-600 font-bold text-center"
      >
        <span ref={typedRef} />
      </motion.h1>
    </div>
  );
}
