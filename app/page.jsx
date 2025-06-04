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
      <div className="absolute top-56 right-18 lg:right-64 w-full h-96 z-20 pointer-events-none overflow-hidden">
        <ThreeScene />
      </div>

      {/* 🧾 Foreground Content */}
      <div className=" z-40 mt-4 px-4 lg:px-8 max-w-4xl mx-auto w-full">
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
