import React from 'react';
import { Screen } from '../../types';
import { Key } from 'lucide-react';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const RegisterScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-full px-6 py-6 bg-[#F2F3F7]">
      <div className="flex justify-end pt-8">
        <button 
            onClick={() => onNavigate(Screen.LIST)}
            className="text-blue-500 font-medium px-2 py-1 active:opacity-60"
        >
            Пропустить
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 text-blue-500 shadow-sm">
            <Key size={32} strokeWidth={2.5} />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">Регистрация</h1>
        <p className="text-gray-500 text-center mb-8 max-w-[280px]">
          Создайте аккаунт для сохранения ваших данных в облаке
        </p>

        <form className="w-full space-y-3" onSubmit={(e) => { e.preventDefault(); onNavigate(Screen.LIST); }}>
          <input
            type="email"
            placeholder="Ваш email"
            className="w-full h-14 px-4 rounded-xl bg-white border-none shadow-sm focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-400 text-gray-900"
          />
          <input
            type="password"
            placeholder="Придумайте пароль"
            className="w-full h-14 px-4 rounded-xl bg-white border-none shadow-sm focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-400 text-gray-900"
          />
           <input
            type="password"
            placeholder="Повторите пароль"
            className="w-full h-14 px-4 rounded-xl bg-white border-none shadow-sm focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-400 text-gray-900"
          />

          <button
            type="submit"
            className="w-full h-14 bg-blue-500 text-white font-bold rounded-xl shadow-md active:bg-blue-600 transition-all active:scale-[0.98] mt-2"
          >
            Создать аккаунт
          </button>
        </form>

        <div className="mt-6 text-gray-500 text-sm">
          Уже есть аккаунт? <button onClick={() => onNavigate(Screen.LOGIN)} className="text-blue-500 font-bold ml-1">Войти</button>
        </div>
      </div>

       <div className="text-center text-[10px] text-gray-400 leading-tight pb-8 mt-auto">
        Продолжая, вы соглашаетесь с <button className="underline" onClick={() => onNavigate(Screen.TERMS)}>Условиями</button>
        <br />и <button className="underline" onClick={() => onNavigate(Screen.POLICY)}>Политикой конфиденциальности</button>.
      </div>
    </div>
  );
};

export default RegisterScreen;