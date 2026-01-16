import React from 'react';
import { Screen, ItemDetail } from '../../types';
import { ChevronLeft, Accessibility } from 'lucide-react';

interface Props {
  item: ItemDetail;
  onNavigate: (screen: Screen, itemId?: string) => void;
}

const DetailScreen: React.FC<Props> = ({ item, onNavigate }) => {
  return (
    <div className="min-h-full bg-[#F2F3F7] pt-12 px-5 pb-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={() => onNavigate(Screen.LIST)}
          className="flex items-center text-blue-500 font-medium active:opacity-60"
        >
          <ChevronLeft size={24} />
          <span className="text-lg ml-[-2px]">Назад</span>
        </button>
        <button 
          onClick={() => onNavigate(Screen.EDIT)}
          className="text-blue-500 font-medium text-lg active:opacity-60"
        >
          Редактировать
        </button>
      </div>

      {/* Title */}
      <div className="flex items-start mb-6">
        <div className="bg-blue-100 p-3 rounded-2xl mr-4 text-blue-600">
            <Accessibility size={32} />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 leading-tight">
          {item.title}
        </h1>
      </div>

      {/* Progress Card */}
      <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
        <div className="flex justify-between items-baseline mb-3">
          <span className="font-bold text-lg text-gray-900">Срок службы</span>
          <span className="text-gray-500 text-sm">Замена: {item.lifespanEnd}</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
          <div 
            className={`h-2.5 rounded-full ${item.status === 'danger' ? 'bg-red-500' : 'bg-green-500'}`}
            style={{ width: `${item.lifespanPercentage}%` }}
          />
        </div>
        <div className="mt-2 text-right text-xs text-gray-400">
            Осталось 70% ресурса
        </div>
      </div>

      {/* Specs Card */}
      <div className="bg-white rounded-2xl shadow-sm mb-4 overflow-hidden divide-y divide-gray-100">
        <div className="flex justify-between items-center p-4">
          <span className="text-gray-400 text-sm">Категория</span>
          <span className="text-gray-900 font-medium">{item.category}</span>
        </div>
        <div className="flex justify-between items-center p-4">
          <span className="text-gray-400 text-sm">Код в классификаторе</span>
          <span className="text-gray-900 font-medium text-right">{item.classifierCode}</span>
        </div>
        <div className="flex justify-between items-center p-4">
          <span className="text-gray-400 text-sm">Код ТРУ</span>
          <span className="text-gray-900 font-medium text-right">{item.truCode}</span>
        </div>
      </div>

      {/* Dates Card */}
      <div className="bg-white rounded-2xl shadow-sm mb-4 overflow-hidden divide-y divide-gray-100">
        <div className="flex justify-between items-center p-4">
          <span className="text-gray-400 text-sm">Дата покупки</span>
          <span className="text-gray-900 font-medium">{item.lifespanStart}</span>
        </div>
        <div className="flex justify-between items-center p-4">
          <span className="text-gray-400 text-sm">Дата следующей замены</span>
          <span className="text-gray-900 font-medium">{item.lifespanEnd}</span>
        </div>
      </div>

      {/* Notes Card */}
      <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
        <h3 className="font-bold text-gray-900 mb-2">Примечания</h3>
        <p className="text-gray-500 leading-relaxed text-sm">
          {item.notes}
        </p>
      </div>

    </div>
  );
};

export default DetailScreen;