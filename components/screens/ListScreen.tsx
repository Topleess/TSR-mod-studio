import React, { useState } from 'react';
import { Screen, Item, Category } from '../../types';
import { Plus, ChevronRight, Droplet, Accessibility, AlertCircle, PackageOpen } from 'lucide-react';

interface Props {
  items: Item[];
  onNavigate: (screen: Screen, itemId?: string) => void;
}

const ListScreen: React.FC<Props> = ({ items, onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<string>('Все');

  const filters = ['Все', 'Расходники', 'Оборудование', 'Архив'];

  // Filter first
  let filteredItems = activeFilter === 'Все' 
    ? items 
    : items.filter(item => item.category === activeFilter);
  
  // Sort from smallest lifespanPercentage to largest (Most urgent first)
  filteredItems = [...filteredItems].sort((a, b) => {
    return (a.lifespanPercentage || 0) - (b.lifespanPercentage || 0);
  });

  const getIcon = (type: string, status: string) => {
    // Icons
    if (type === 'drop') return <Droplet className={`${status === 'danger' ? 'text-red-500' : 'text-blue-500'} fill-current`} size={20} />;
    if (type === 'wheelchair') return <div className="bg-blue-100 p-1 rounded-full"><Accessibility className="text-blue-600" size={18} /></div>;
    return <div className={`w-3 h-3 rounded-full ${status === 'danger' ? 'bg-red-500' : 'bg-green-500'}`} />;
  };

  return (
    <div className="flex flex-col min-h-full bg-[#F2F3F7] pt-14 pb-4">
      <div className="px-5 mb-4">
        <h1 className="text-3xl font-bold text-gray-900">Список ТСР</h1>
      </div>

      {/* Filters */}
      <div className="flex overflow-x-auto px-5 mb-6 space-x-2 no-scrollbar pb-2 min-h-[44px]">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeFilter === filter 
                ? 'bg-blue-500 text-white shadow-md shadow-blue-500/20' 
                : 'bg-white text-gray-500 shadow-sm'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="flex-1 px-5 space-y-3">
        {filteredItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center pt-24 pb-12">
            <div className="relative mb-6">
                {/* Decorative background blur */}
                <div className="absolute inset-0 bg-blue-200 rounded-full blur-xl opacity-40 transform scale-150"></div>
                
                {/* Icon Container */}
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-sm relative z-10">
                    <PackageOpen size={56} className="text-blue-400" strokeWidth={1.5} />
                </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2">Список пуст</h3>
            <p className="text-gray-400 text-center text-sm px-10 max-w-[280px] leading-relaxed">
              В этой категории пока ничего нет. Добавьте новое средство реабилитации.
            </p>
          </div>
        ) : (
          <>
             {/* Alert Section */}
            {filteredItems.some(i => i.status === 'danger') && activeFilter === 'Все' && (
                <div className="mb-4">
                    <h2 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2 flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        Требует внимания
                    </h2>
                    <div className="space-y-3">
                        {filteredItems.filter(i => i.status === 'danger').map(item => (
                             <div 
                                key={item.id}
                                onClick={() => onNavigate(Screen.DETAIL, item.id)}
                                className="bg-white rounded-2xl p-4 flex flex-col shadow-sm active:bg-gray-50 transition-colors cursor-pointer relative overflow-hidden"
                              >
                                  {/* Red tint background only, removed border */}
                                  <div className="absolute inset-0 bg-red-50 opacity-40 pointer-events-none"></div>

                                  <div className="flex items-center z-10">
                                      <div className="mr-4 flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                                        {getIcon(item.iconType, item.status)}
                                      </div>
                                      <div className="flex-1">
                                        <div className="text-gray-900 font-bold text-[16px]">{item.title}</div>
                                        {item.subtitle && <div className="text-red-500 text-sm mt-0.5 font-medium">{item.subtitle}</div>}
                                      </div>
                                      <ChevronRight className="text-gray-300" size={20} />
                                  </div>
                                  
                                  {/* Health Bar */}
                                  {item.lifespanPercentage !== undefined && (
                                      <div className="mt-3 w-full bg-red-100 h-1.5 rounded-full overflow-hidden z-10">
                                          <div 
                                            className="bg-red-500 h-full rounded-full" 
                                            style={{width: `${item.lifespanPercentage}%`}}
                                          ></div>
                                      </div>
                                  )}
                              </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Normal Items */}
            {filteredItems.filter(i => i.status !== 'danger' || activeFilter !== 'Все').length > 0 && (
                <>
                {activeFilter === 'Все' && filteredItems.some(i => i.status === 'danger') && (
                     <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 mt-4">Остальное</h2>
                )}
                
                {filteredItems.filter(i => (activeFilter !== 'Все' ? true : i.status !== 'danger')).map(item => (
                <div 
                    key={item.id}
                    onClick={() => onNavigate(Screen.DETAIL, item.id)}
                    className="bg-white rounded-2xl p-4 flex flex-col shadow-sm active:bg-gray-50 transition-colors cursor-pointer"
                >
                    <div className="flex items-center">
                        <div className="mr-4 flex-shrink-0 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
                        {getIcon(item.iconType, item.status)}
                        </div>
                        <div className="flex-1">
                        <div className="text-gray-900 font-semibold text-[16px]">{item.title}</div>
                        {item.subtitle && <div className="text-gray-500 text-sm mt-0.5">{item.subtitle}</div>}
                        </div>
                        <ChevronRight className="text-gray-300" size={20} />
                    </div>
                    {/* Health Bar for normal items */}
                    {item.lifespanPercentage !== undefined && (
                        <div className="mt-3 w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                            <div 
                                className={`h-full rounded-full ${item.status === 'warning' ? 'bg-orange-400' : 'bg-green-500'}`} 
                                style={{width: `${item.lifespanPercentage}%`}}
                            ></div>
                        </div>
                    )}
                </div>
                ))}
                </>
            )}
            
          </>
        )}
      </div>

      {/* Floating Action Button */}
      <div className="px-5 mt-6 mb-4 sticky bottom-4 z-20">
        <button
          onClick={() => onNavigate(Screen.ADD)}
          className="w-full h-14 bg-blue-500 text-white font-semibold rounded-2xl flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/30 active:scale-[0.98] transition-transform backdrop-blur-sm"
        >
          <Plus size={24} strokeWidth={2.5} />
          <span>Добавить ТСР</span>
        </button>
      </div>
    </div>
  );
};

export default ListScreen;