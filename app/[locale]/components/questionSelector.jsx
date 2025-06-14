'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { useTranslations } from 'next-intl';

export default function QuestionSelector({ topic, onBack }) {
  const t = useTranslations();
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const questions = t.raw('questions')[topic] || [];
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    if (selectedQuestion && typedRef.current) {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }

      typedInstance.current = new Typed(typedRef.current, {
        strings: [t.raw('answers')[selectedQuestion]],
        typeSpeed: 20,
        showCursor: true,
      });
    }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, [selectedQuestion, t]);

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
