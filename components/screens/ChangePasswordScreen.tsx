import React from 'react';
import { Screen } from '../../types';
import { ChevronLeft } from 'lucide-react';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const ChangePasswordScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="min-h-full bg-[#F2F3F7] pt-12 px-5 pb-6">
      <div className="flex items-center mb-6">
        <button 
          onClick={() => onNavigate(Screen.PROFILE)}
          className="flex items-center text-blue-500 font-medium"
        >
          <ChevronLeft size={24} />
          <span className="text-lg ml-[-2px]">Назад</span>
        </button>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Смена пароля
      </h1>

      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onNavigate(Screen.PROFILE); }}>
        <div className="bg-white rounded-2xl p-4">
             <label className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2 block">Текущий пароль</label>
             <input 
                type="password"
                className="w-full text-lg text-gray-900 border-none outline-none p-0 placeholder-gray-300"
                placeholder="••••••••"
             />
        </div>

        <div className="bg-white rounded-2xl p-4">
             <label className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2 block">Новый пароль</label>
             <input 
                type="password"
                className="w-full text-lg text-gray-900 border-none outline-none p-0 placeholder-gray-300"
                placeholder="••••••••"
             />
        </div>

         <div className="bg-white rounded-2xl p-4">
             <label className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2 block">Повторите новый пароль</label>
             <input 
                type="password"
                className="w-full text-lg text-gray-900 border-none outline-none p-0 placeholder-gray-300"
                placeholder="••••••••"
             />
        </div>

        <button 
            type="submit"
            className="w-full h-14 bg-blue-500 text-white font-bold rounded-xl shadow-md active:bg-blue-600 transition-all active:scale-[0.98] mt-6"
        >
            Сохранить пароль
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordScreen;