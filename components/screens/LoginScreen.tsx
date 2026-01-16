import React from 'react';
import { Screen } from '../../types';
import { Lock } from 'lucide-react';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const LoginScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-full px-6 py-6 bg-[#F2F3F7]">
      {/* Top Bar */}
      <div className="flex justify-end pt-8">
        <button 
            onClick={() => onNavigate(Screen.LIST)}
            className="text-blue-500 font-medium px-2 py-1 active:opacity-60"
        >
            Пропустить
        </button>
      </div>

      {/* Center Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-24 h-24 bg-blue-100 rounded-3xl flex items-center justify-center mb-8 text-blue-500 shadow-sm">
            <Lock size={36} strokeWidth={2.5} />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">Войти в аккаунт</h1>
        <p className="text-gray-500 text-center mb-8 max-w-[280px] leading-snug">
          Начните вести свой дневник реабилитации и отслеживания ТСР
        </p>

        <form className="w-full space-y-3" onSubmit={(e) => { e.preventDefault(); onNavigate(Screen.LIST); }}>
          <input
            type="email"
            placeholder="Email"
            className="w-full h-14 px-4 rounded-xl bg-white border-none shadow-sm focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-400 text-gray-900"
          />
          <input
            type="password"
            placeholder="Пароль"
            className="w-full h-14 px-4 rounded-xl bg-white border-none shadow-sm focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-400 text-gray-900"
          />

          <button
            type="submit"
            className="w-full h-14 bg-blue-500 text-white font-bold rounded-xl shadow-md active:bg-blue-600 transition-all active:scale-[0.98] mt-2"
          >
            Войти
          </button>
        </form>

        <div className="mt-6 text-gray-500 text-sm">
          Нет аккаунта? <button onClick={() => onNavigate(Screen.REGISTER)} className="text-blue-500 font-bold ml-1">Создать</button>
        </div>
      </div>

      {/* Footer - mt-auto ensures it sticks to bottom if flex container has height */}
      <div className="text-center text-[10px] text-gray-400 leading-tight pb-8 mt-auto">
        Продолжая, вы соглашаетесь с <button className="underline" onClick={() => onNavigate(Screen.TERMS)}>Условиями</button>
        <br />и <button className="underline" onClick={() => onNavigate(Screen.POLICY)}>Политикой конфиденциальности</button>.
      </div>
    </div>
  );
};

export default LoginScreen;