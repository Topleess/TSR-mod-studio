import React from 'react';
import { Screen } from '../../types';
import { ChevronLeft } from 'lucide-react';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const PolicyScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#F2F3F7] pt-12 px-5 pb-6">
      <div className="flex items-center mb-4">
        <button 
          onClick={() => onNavigate(Screen.LOGIN)}
          className="flex items-center text-blue-500 font-medium"
        >
          <ChevronLeft size={24} />
          <span className="text-lg ml-[-2px]">Назад</span>
        </button>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
        Политика<br/>конфиденциальности
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow-sm text-gray-800 text-sm leading-relaxed space-y-4">
        <p className="text-gray-500 text-xs">Last Updated: October 26, 2023</p>
        
        <p>Welcome to our application. These terms and conditions outline the rules and regulations for the use of our app.</p>

        <h3 className="text-base font-bold text-gray-900 mt-4">1. Acceptance of Terms</h3>
        <p>By accessing this app, we assume you accept these terms and conditions. Do not continue to use our application if you do not agree to take all of the terms and conditions stated on this page.</p>

        <h3 className="text-base font-bold text-gray-900 mt-4">2. License to Use</h3>
        <p>Unless otherwise stated, we and/or our licensors own the intellectual property rights for all material on the app. All intellectual property rights are reserved. You may access this from our app for your own personal use subjected to restrictions set in these terms and conditions.</p>
        
        <p>You must not:</p>
        <ul className="list-disc pl-5 space-y-1">
            <li>Republish material from our app</li>
            <li>Sell, rent or sub-license material from our app</li>
            <li>Reproduce, duplicate or copy material from our app</li>
            <li>Redistribute content from our app</li>
        </ul>

        <h3 className="text-base font-bold text-gray-900 mt-4">3. User Content</h3>
        <p>In these terms and conditions, "your user content" means material (including without limitation text, images, audio material, video material and audio-visual material) that you submit to this app, for whatever purpose.</p>
      </div>
    </div>
  );
};

export default PolicyScreen;