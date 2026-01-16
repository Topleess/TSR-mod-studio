import React, { useState } from 'react';
import { Screen, ItemDetail } from '../../types';
import { X, Calendar as CalendarIcon, Check } from 'lucide-react';

interface Props {
  item: ItemDetail;
  onNavigate: (screen: Screen, itemId?: string) => void;
  onSave: (item: ItemDetail) => void;
}

const EditScreen: React.FC<Props> = ({ item, onNavigate, onSave }) => {
  const [title, setTitle] = useState(item.title);
  const [notes, setNotes] = useState(item.notes);
  const [date, setDate] = useState(item.lifespanEnd);

  const handleSave = () => {
    onSave({
        ...item,
        title,
        notes,
        lifespanEnd: date
    });
  };

  return (
    <div className="min-h-full bg-[#F2F3F7] pt-6 px-4 pb-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 relative z-10">
        <button 
          onClick={() => onNavigate(Screen.DETAIL, item.id)}
          className="text-blue-500 font-medium text-lg"
        >
          Отмена
        </button>
        <h1 className="text-xl font-bold text-gray-900 absolute left-1/2 transform -translate-x-1/2">Редактирование</h1>
        <button 
          onClick={handleSave}
          className="text-blue-500 font-bold text-lg"
        >
          Готово
        </button>
      </div>

      <div className="space-y-4">
        <div className="bg-white rounded-2xl p-4">
            <label className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1 block">Название</label>
            <input 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full text-lg font-medium text-gray-900 border-none outline-none p-0 placeholder-gray-300"
            />
        </div>

        <div className="bg-white rounded-2xl p-4 flex justify-between items-center">
             <div>
                <label className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1 block">Дата замены</label>
                <div className="text-lg font-medium text-gray-900">{date}</div>
             </div>
             <CalendarIcon className="text-blue-500" />
        </div>

         <div className="bg-white rounded-2xl p-4">
            <label className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1 block">Примечания</label>
            <textarea 
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full h-32 text-base text-gray-900 border-none outline-none p-0 resize-none placeholder-gray-300"
            />
        </div>

        <button className="w-full py-4 text-red-500 font-medium bg-white rounded-2xl shadow-sm">
            Удалить ТСР
        </button>
      </div>
    </div>
  );
};

export default EditScreen;