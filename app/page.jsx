'use client';
import { useState } from 'react';
import TopicSelector from './components/topicSelector';
import QuestionSelector from './components/questionSelector';

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div >
      {!selectedTopic ? (
    <div className="min-h-screen flex items-center justify-center">    <TopicSelector onSelect={setSelectedTopic} /> </div>
      ) : (
        <QuestionSelector topic={selectedTopic} onBack={() => setSelectedTopic(null)} />
      )}
    </div>
  );
}
