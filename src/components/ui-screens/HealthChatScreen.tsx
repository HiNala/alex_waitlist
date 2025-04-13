'use client';

import React, { useState } from 'react';

const HealthChatScreen: React.FC = () => {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [quickResponses, setQuickResponses] = useState([
    { text: 'Home care tips', active: false },
    { text: 'Schedule vet visit', active: false },
    { text: 'Send ear photo', active: false },
    { text: 'Ear cleaning products', active: false }
  ]);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    setMessage('');
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 2000);
  };

  const handleQuickResponse = (index: number) => {
    const updatedResponses = [...quickResponses];
    updatedResponses[index].active = true;
    setQuickResponses(updatedResponses);
    alert(`Selected: ${quickResponses[index].text}`);
  };

  return (
    <div className="device flex flex-col mx-auto my-4 cursor-pointer transition-transform hover:scale-105">
      <div className="bg-gradient-to-r from-terracotta-dark to-terracotta-light p-6 text-white">
        <div className="flex items-center mb-3">
          <button className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-bold">Health Chat</h1>
        </div>
        <div className="flex items-center">
          <img src="https://images.unsplash.com/photo-1551717743-49959800b1f6" alt="Border Aussie" className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-white" />
          <div>
            <h2 className="font-bold">Archer</h2>
            <p className="text-xs opacity-90">Border Aussie • 3 years old</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 bg-cream overflow-auto p-4">
        {/* Welcome Message */}
        <div className="flex mb-4">
          <div className="w-8 h-8 rounded-full bg-sage flex-shrink-0 flex items-center justify-center mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="chat-bubble bg-white p-3 shadow-sm">
            <p className="text-sm text-gray-800 mb-1">Hello! I'm your Border Aussie health assistant. How can I help Archer today?</p>
            <p className="text-xs text-gray-500">Border Aussies are known for their high energy and intelligence. They typically need special attention to joint health and regular mental stimulation.</p>
          </div>
        </div>
        
        {/* User Message */}
        <div className="flex justify-end mb-4">
          <div className="chat-bubble bg-terracotta-light/20 p-3">
            <p className="text-sm text-gray-800">Archer has been scratching his ears a lot lately. Should I be concerned?</p>
          </div>
        </div>
        
        {/* Assistant Response with Image */}
        <div className="flex mb-4">
          <div className="w-8 h-8 rounded-full bg-sage flex-shrink-0 flex items-center justify-center mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="chat-bubble bg-white p-3 shadow-sm">
            <p className="text-sm text-gray-800 mb-2">Frequent ear scratching in Border Aussies could indicate several issues:</p>
            <ul className="text-sm text-gray-700 mb-2 pl-4 list-disc">
              <li>Ear infections (common in floppy-eared dogs)</li>
              <li>Allergies (environmental or food-based)</li>
              <li>Ear mites or other parasites</li>
              <li>Foreign objects in the ear canal</li>
            </ul>
            <div className="rounded-lg overflow-hidden mb-2 bg-gray-100">
              <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee" alt="Dog ear examination" className="w-full h-32 object-cover" />
            </div>
            <p className="text-sm text-gray-800 mb-2">Look for these signs:</p>
            <div className="bg-sage/10 rounded-lg p-2 mb-2">
              <p className="text-xs text-gray-700">• Redness or swelling inside the ear</p>
              <p className="text-xs text-gray-700">• Unusual odor from the ears</p>
              <p className="text-xs text-gray-700">• Dark discharge or excessive wax</p>
              <p className="text-xs text-gray-700">• Head shaking or tilting</p>
            </div>
            <p className="text-sm text-gray-800">Would you like me to help you schedule a vet appointment, or would you prefer some home care tips first?</p>
          </div>
        </div>
        
        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex mb-4">
            <div className="w-8 h-8 rounded-full bg-sage flex-shrink-0 flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="chat-bubble bg-white p-3 shadow-sm flex items-center">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-sage rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-2 h-2 bg-sage rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-sage rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Quick Response Options */}
      <div className="bg-white p-3 border-t border-gray-200">
        <div className="flex overflow-x-auto pb-2 -mx-1 mb-2">
          {quickResponses.map((response, index) => (
            <button 
              key={index}
              className={`flex-shrink-0 ${response.active ? 'bg-sage text-white' : 'bg-sage/10 text-sage-dark'} text-xs px-3 py-2 rounded-full mx-1 whitespace-nowrap transition-colors`}
              onClick={() => handleQuickResponse(index)}
            >
              {response.text}
            </button>
          ))}
        </div>
        
        <form className="flex items-center bg-gray-100 rounded-full px-4 py-2" onSubmit={handleSendMessage}>
          <input 
            type="text" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..." 
            className="bg-transparent text-sm flex-1 focus:outline-none" 
          />
          <button type="button" className="ml-2 text-sage-dark">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
          <button type="button" className="ml-2 text-terracotta-dark">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <button type="submit" className="ml-2 bg-terracotta-dark text-white rounded-full p-1 hover:bg-terracotta transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default HealthChatScreen; 