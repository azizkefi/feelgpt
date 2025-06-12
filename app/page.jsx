'use client'

import { useState } from 'react'
import TopicSelector from './components/topicSelector'
import QuestionSelector from './components/questionSelector'
import ThreeScene from './components/threeScene'

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState(null)

  return (
    <div className="relative">
      {/* 🧠 Background 3D */}
      <div className="absolute top-100  right-20 lg:right-96 w-full h-80 lg:h-140 -z-10 pointer-events-none overflow-hidden">
        <ThreeScene />
      </div>

      {/* 🧾 Foreground Content */}
      <div className=" z-20 pt-4 mt-4 px-4 lg:px-8 max-w-4xl mx-auto w-full">
        {!selectedTopic ? (
          <div className="flex items-center justify-center pointer-events-auto">
            <TopicSelector onSelect={setSelectedTopic} />
          </div>
        ) : (
          <div className="pointer-events-auto">
            <QuestionSelector
              topic={selectedTopic}
              onBack={() => setSelectedTopic(null)}
            />
          </div>
        )}
      </div>
    </div>
  )
}
