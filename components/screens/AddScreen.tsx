import React, { useState } from 'react';
import { Screen, Item } from '../../types';
import { X, ChevronRight, ChevronUp, ChevronDown, Calendar as CalendarIcon, Check } from 'lucide-react';

interface Props {
  onNavigate: (screen: Screen) => void;
  onAdd: (item: Item) => void;
}

// Simulating a list of options
const CATEGORIES = ['Расходники', 'Оборудование', 'Архив', 'Лекарства'];
const TYPES = ['Памперсы', 'Катетеры', 'Коляска активная', 'Коляска электрическая', 'Подушка'];

const AddScreen: React.FC<Props> = ({ onNavigate, onAdd }) => {
  const [category, setCategory] = useState('Расходники');
  const [type, setType] = useState('Памперсы');
  const [count, setCount] = useState(70);

  // Sheet State
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [sheetType, setSheetType] = useState<'category' | 'type' | null>(null);

  const openSheet = (t: 'category' | 'type') => {
    setSheetType(t);
    setIsSheetOpen(true);
  };

  const closeSheet = () => {
      setIsSheetOpen(false);
      setTimeout(() => setSheetType(null), 300); // Wait for anim
  };

  const selectOption = (value: string) => {
      if (sheetType === 'category') setCategory(value);
      if (sheetType === 'type') setType(value);
      closeSheet();
  };

  const handleSave = () => {
    const newItem: Item = {
      id: Date.now().toString(),
      title: type,
      subtitle: `Кол-во: ${count}`,
      date: new Date().toISOString(),
      category: category as any,
      status: 'ok',
      iconType: 'default',
      lifespanPercentage: 100
    };
    onAdd(newItem);
    onNavigate(Screen.LIST);
  };

  return (
    <div className="min-h-full bg-[#F2F3F7] pt-6 px-4 pb-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 relative z-10">
        <button 
          onClick={() => onNavigate(Screen.LIST)}
          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 active:bg-gray-300"
        >
          <X size={18} />
        </button>
        <h1 className="text-xl font-bold text-gray-900 absolute left-1/2 transform -translate-x-1/2">Новое ТСР</h1>
        <button 
          onClick={handleSave}
          className="text-red-500 font-medium text-lg active:opacity-60"
        >
          Сохранить
        </button>
      </div>

      {/* Category Select */}
      <div 
        onClick={() => openSheet('category')}
        className="bg-white rounded-t-2xl p-4 border-b border-gray-100 active:bg-gray-50 transition-colors cursor-pointer"
      >
        <label className="block text-gray-500 text-sm mb-2">Категория</label>
        <div className="bg-gray-50 rounded-lg flex items-center justify-between px-3 py-3 pointer-events-none">
          <span className="font-semibold text-gray-900">{category}</span>
          <div className="flex flex-col text-gray-400">
             <ChevronUp size={10} />
             <ChevronDown size={10} />
          </div>
        </div>
      </div>

      {/* Type Select */}
      <div 
        onClick={() => openSheet('type')}
        className="bg-white rounded-b-2xl p-4 mb-4 active:bg-gray-50 transition-colors cursor-pointer"
      >
        <label className="block text-gray-500 text-sm mb-2">Название ТСР</label>
        <div className="bg-gray-50 rounded-lg flex items-center justify-between px-3 py-3 pointer-events-none">
          <span className="font-semibold text-gray-900">{type}</span>
          <div className="flex flex-col text-gray-400">
             <ChevronUp size={10} />
             <ChevronDown size={10} />
          </div>
        </div>
      </div>

      {/* Date Row */}
      <div className="bg-white rounded-t-2xl p-4 flex items-center justify-between border-b border-gray-100 active:bg-gray-50 transition-colors">
        <div className="flex items-center text-gray-800 font-normal">
          <CalendarIcon className="mr-3 text-gray-500" size={22} />
          <span className="text-lg">Дата покупки</span>
        </div>
        <div className="flex items-center text-gray-400">
          <span className="mr-2">Сегодня</span>
          <ChevronRight size={20} />
        </div>
      </div>

      {/* Count Row (Interactive Stepper could go here) */}
      <div className="bg-white rounded-b-2xl p-4 flex items-center justify-between mb-4">
         <div className="flex items-center text-gray-800 font-normal">
          <div className="mr-3 w-[22px] flex justify-center text-gray-500">
             <div className="w-5 h-5 border-2 border-gray-500 rounded-sm"></div>
          </div>
          <span className="text-lg">Количество</span>
        </div>
        <div className="flex items-center space-x-3 bg-gray-100 rounded-lg p-1">
             <button onClick={() => setCount(Math.max(0, count - 1))} className="w-8 h-8 flex items-center justify-center bg-white rounded shadow text-xl font-bold text-gray-600">-</button>
             <span className="text-gray-900 font-medium min-w-[20px] text-center">{count}</span>
             <button onClick={() => setCount(count + 1)} className="w-8 h-8 flex items-center justify-center bg-white rounded shadow text-xl font-bold text-blue-500">+</button>
        </div>
      </div>


      {/* Custom Bottom Sheet Overlay */}
      {isSheetOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closeSheet}></div>
          
          {/* Sheet Content */}
          <div className="bg-white w-full rounded-t-3xl p-6 relative z-10 animate-[slideUp_0.3s_ease-out]">
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"></div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
                {sheetType === 'category' ? 'Выберите категорию' : 'Выберите тип'}
            </h3>
            
            <div className="space-y-2 max-h-[60vh] overflow-y-auto no-scrollbar">
                {(sheetType === 'category' ? CATEGORIES : TYPES).map((opt) => (
                    <button 
                        key={opt}
                        onClick={() => selectOption(opt)}
                        className={`w-full text-left p-4 rounded-xl flex justify-between items-center ${
                            (sheetType === 'category' ? category : type) === opt 
                            ? 'bg-blue-50 text-blue-600 font-semibold' 
                            : 'bg-gray-50 text-gray-800'
                        }`}
                    >
                        {opt}
                        {(sheetType === 'category' ? category : type) === opt && <Check size={20} />}
                    </button>
                ))}
            </div>
            
            <button onClick={closeSheet} className="w-full mt-4 py-3 text-center text-gray-500 font-medium">
                Отмена
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddScreen;