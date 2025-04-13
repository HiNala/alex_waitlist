'use client';

import React from 'react';
import './TestUI.css';
import HomeScreen from './ui-screens/HomeScreen';
import HealthChatScreen from './ui-screens/HealthChatScreen';
import HealthTimelineScreen from './ui-screens/HealthTimelineScreen';

const TestUI: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto py-6">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <HomeScreen />
        <HealthChatScreen />
        <HealthTimelineScreen />
      </div>
    </div>
  );
};

export default TestUI; 