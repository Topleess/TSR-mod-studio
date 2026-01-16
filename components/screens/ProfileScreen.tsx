import React from 'react';
import { Screen } from '../../types';
import { User, Lock, FileText, LogOut, ChevronRight } from 'lucide-react';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const ProfileScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="min-h-full bg-[#F2F3F7] pt-14 pb-4">
      <div className="px-5 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Профиль</h1>
        
        <div className="flex items-center bg-white p-4 rounded-2xl shadow-sm">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mr-4">
                <User size={24} />
            </div>
            <div>
                <p className="text-gray-900 font-semibold">ivan.ivanov@example.com</p>
                <p className="text-gray-400 text-xs mt-0.5">Пользователь</p>
            </div>
        </div>
      </div>

      <div className="px-5 space-y-4">
        
        {/* Account Actions */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
             <button 
                onClick={() => onNavigate(Screen.CHANGE_PASSWORD)}
                className="w-full flex items-center justify-between p-4 border-b border-gray-100 active:bg-gray-50"
             >
                <div className="flex items-center text-gray-700 font-medium">
                    <Lock className="mr-3 text-blue-500" size={20} />
                    Сменить пароль
                </div>
                <ChevronRight size={18} className="text-gray-300" />
             </button>
        </div>

        {/* Legal */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
             <button onClick={() => onNavigate(Screen.POLICY)} className="w-full flex items-center justify-between p-4 border-b border-gray-100 active:bg-gray-50">
                <div className="flex items-center text-gray-700 font-medium">
                    <FileText className="mr-3 text-gray-400" size={20} />
                    Политика конфиденциальности
                </div>
                <ChevronRight size={18} className="text-gray-300" />
             </button>
             <button onClick={() => onNavigate(Screen.TERMS)} className="w-full flex items-center justify-between p-4 border-b border-gray-100 active:bg-gray-50">
                <div className="flex items-center text-gray-700 font-medium">
                    <FileText className="mr-3 text-gray-400" size={20} />
                    Условия сервиса
                </div>
                <ChevronRight size={18} className="text-gray-300" />
             </button>
        </div>

        <button 
            onClick={() => onNavigate(Screen.LOGIN)}
            className="w-full bg-white text-red-500 font-medium p-4 rounded-2xl shadow-sm flex items-center justify-center active:bg-red-50 transition-colors"
        >
            <LogOut size={20} className="mr-2" />
            Выйти
        </button>
      </div>
    </div>
  );
};

export default ProfileScreen;