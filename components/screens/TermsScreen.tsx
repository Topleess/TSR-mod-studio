import React from 'react';
import { Screen } from '../../types';
import { ChevronLeft } from 'lucide-react';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const TermsScreen: React.FC<Props> = ({ onNavigate }) => {
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
        Условия сервиса
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow-sm text-gray-800 text-sm leading-relaxed space-y-4">
        <p className="text-gray-500 text-xs">Last Updated: October 26, 2023</p>
        
        <p>Welcome to our application. These terms and conditions outline the rules and regulations for the use of our app.</p>

        <h3 className="text-base font-bold text-gray-900 mt-4">1. Acceptance of Terms</h3>
        <p>By accessing this app, we assume you accept these terms and conditions. Do not continue to use our application if you do not agree to take all of the terms and conditions stated on this page.</p>

        <h3 className="text-base font-bold text-gray-900 mt-4">2. License to Use</h3>
        <p>Unless otherwise stated, we and/or our licensors own the intellectual property rights for all material on the app. All intellectual property rights are reserved.</p>

        <h3 className="text-base font-bold text-gray-900 mt-4">5. Disclaimer</h3>
        <p>The information provided by our application is for general informational purposes only. All information on the app is provided in good faith, however, we make no representation or warranty of any kind.</p>
      </div>
    </div>
  );
};

export default TermsScreen;