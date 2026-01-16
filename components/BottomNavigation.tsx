import React from 'react';
import { List, User } from 'lucide-react';
import { Screen } from '../types';

interface Props {
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
  onSOS: () => void;
}

const BottomNavigation: React.FC<Props> = ({ activeScreen, onNavigate, onSOS }) => {
  return (
    <div className="absolute bottom-0 w-full bg-[#F2F3F7]/90 backdrop-blur-md border-t border-gray-200 px-6 py-2 flex justify-between items-end pb-8 z-50 h-24">
      
      {/* Left Tab */}
      <button 
        onClick={() => onNavigate(Screen.LIST)}
        className={`flex flex-col items-center justify-center space-y-1 w-16 h-full transition-colors ${activeScreen === Screen.LIST ? 'text-blue-500' : 'text-gray-400'}`}
      >
        <List size={26} strokeWidth={activeScreen === Screen.LIST ? 2.5 : 2} />
        <span className="text-[10px] font-medium">ТСР</span>
      </button>

      {/* Middle SOS Button - Floats above */}
      <div className="relative -top-5">
        <button 
          className="flex items-center justify-center w-16 h-16 bg-white border-2 border-red-500 rounded-full shadow-lg shadow-red-500/20 active:scale-95 transition-transform"
          onClick={onSOS}
        >
          <span className="text-red-500 font-black text-sm tracking-wide">SOS</span>
        </button>
      </div>

      {/* Right Tab */}
      <button 
        onClick={() => onNavigate(Screen.PROFILE)}
        className={`flex flex-col items-center justify-center space-y-1 w-16 h-full transition-colors ${activeScreen === Screen.PROFILE || activeScreen === Screen.CHANGE_PASSWORD ? 'text-blue-500' : 'text-gray-400'}`}
      >
        <User size={26} strokeWidth={activeScreen === Screen.PROFILE || activeScreen === Screen.CHANGE_PASSWORD ? 2.5 : 2} />
        <span className="text-[10px] font-medium">Профиль</span>
      </button>

    </div>
  );
};

export default BottomNavigation;