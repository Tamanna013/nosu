'use client';

import { useState } from 'react';
import TinderCard from './components/TinderCard';
import Chat from './components/Chat';
import Articles from './components/Articles';
import MatchNotification from './components/MatchNotification';
import { myProfiles } from './data/profiles';
import { HeartIcon, XMarkIcon, ChatBubbleLeftIcon, NewspaperIcon } from '@heroicons/react/24/solid';

export default function Home() {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [showChat, setShowChat] = useState(false);
  const [showArticles, setShowArticles] = useState(false);
  const [showMatch, setShowMatch] = useState(false);

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      setShowMatch(true);
    }
    setCurrentProfileIndex((prev) => (prev + 1) % myProfiles.length);
  };

  const handleMatchClose = () => {
    setShowMatch(false);
  };

  const handleStartChat = () => {
    setShowMatch(false);
    setShowChat(true);
  };

  if (showChat) {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-md mx-auto h-screen bg-white">
          <div className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white flex justify-between items-center">
            <h2 className="text-xl font-bold">Chat with Tamanna</h2>
            <button 
              onClick={() => setShowChat(false)}
              className="text-white"
            >
              Back
            </button>
          </div>
          <Chat />
        </div>
      </div>
    );
  }

  if (showArticles) {
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Articles</h2>
            <button 
              onClick={() => setShowArticles(false)}
              className="text-gray-600"
            >
              Back to Swiping
            </button>
          </div>
          <Articles />
        </div>
      </div>
    );
  }

  return (
    <>
      <MatchNotification 
        show={showMatch} 
        onClose={handleMatchClose}
        onStartChat={handleStartChat}
      />
      
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
        <div className="flex w-full max-w-md justify-end mb-4">
          <button
            onClick={() => setShowArticles(true)}
            className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2"
          >
            <NewspaperIcon className="w-5 h-5" />
            <span>Read Articles</span>
          </button>
        </div>

        <div className="relative w-[400px] h-[600px] mb-8">
          <TinderCard
            profile={myProfiles[currentProfileIndex]}
            onSwipe={handleSwipe}
          />
        </div>
        
        <div className="flex gap-6">
          <button
            onClick={() => handleSwipe('left')}
            className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <XMarkIcon className="w-8 h-8 text-red-500" />
          </button>
          
          <button
            onClick={() => setShowChat(true)}
            className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChatBubbleLeftIcon className="w-8 h-8 text-blue-500" />
          </button>
          
          <button
            onClick={() => handleSwipe('right')}
            className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <HeartIcon className="w-8 h-8 text-green-500" />
          </button>
        </div>
      </div>
    </>
  );
}
