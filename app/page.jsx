'use client'

import { useState } from 'react'
import TopicSelector from './components/topicSelector'
import QuestionSelector from './components/questionSelector'
import ThreeScene from './components/threeScene'

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState(null)

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 🧠 Background 3D */}
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-auto">
        <ThreeScene />
      </div>

      {/* 🧾 Foreground Content */}
      <div className="relative z-10 ">
        {!selectedTopic ? (
          <div className="min-h-screen flex items-center justify-center pointer-events-auto">
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
