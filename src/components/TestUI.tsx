'use client';

import React from 'react';
import './TestUI.css';
import TestUIFrame from './TestUIFrame';

const TestUI: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto py-6">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <TestUIFrame />
        <TestUIFrame />
        <TestUIFrame />
      </div>
    </div>
  );
};

export default TestUI; 