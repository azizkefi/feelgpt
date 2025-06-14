'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function TopicSelector({ onSelect }) {
  const t = useTranslations();

  const buttons = [
    { labelKey: 'topics.general', value: 'general' },
    { labelKey: 'topics.access', value: 'access' },
    { labelKey: 'topics.restauration', value: 'restauration' },
    { labelKey: 'topics.events', value: 'events' },
    { labelKey: 'topics.confort', value: 'confort' },
    { labelKey: 'topics.payment', value: 'payment' },
    { labelKey: 'topics.reclamations', value: 'reclamations' },
    { labelKey: 'topics.contacts', value: 'contacts' }
  ];

  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, {
        strings: [t('typed.welcome')], // Dynamically use translated string
        typeSpeed: 30,
        startDelay: 1500,
        showCursor: true,
      });
    }

    return () => {
      typedInstance.current?.destroy();
    };
  }, [t]); // re-run if locale changes

  return (
    <div className="flex flex-col mt-4 lg:mt-12 items-center justify-center gap-12 lg:gap-24">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-[600px] lg:max-w-7xl">
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
            className="w-full p-3 rounded-full shadow-xl text-sm font-semibold text-[ivory] bg-gradient-to-br from-[#A2352A] to-[#D75C4C] hover:opacity-95 transition-transform"
          >
            {t(btn.labelKey)}
          </motion.button>
        ))}
      </div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'linear' }}
        className="text-md lg:text-3xl   rounded-xl p-3 text-[#350f10]  font-bold text-center"
      >
        <span ref={typedRef} />
      </motion.h1>
    </div>
  );
}
