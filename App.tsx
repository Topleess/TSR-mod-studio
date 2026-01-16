import React, { useState } from 'react';
import { Screen, Item, ItemDetail } from './types';
import LoginScreen from './components/screens/LoginScreen';
import ListScreen from './components/screens/ListScreen';
import DetailScreen from './components/screens/DetailScreen';
import EditScreen from './components/screens/EditScreen';
import AddScreen from './components/screens/AddScreen';
import PolicyScreen from './components/screens/PolicyScreen';
import TermsScreen from './components/screens/TermsScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import ChangePasswordScreen from './components/screens/ChangePasswordScreen';
import BottomNavigation from './components/BottomNavigation';
import RegisterScreen from './components/screens/RegisterScreen';
import { Phone, X } from 'lucide-react';

// Mock Data
const MOCK_ITEMS: Item[] = [
  { id: '1', title: 'Катетер Фолея', subtitle: 'Осталось: 2 дня', date: '2025-09-11', category: 'Расходники', status: 'danger', iconType: 'drop', lifespanPercentage: 10 },
  { id: '2', title: 'Памперсы', subtitle: 'Запас на исходе', date: '2025-08-28', category: 'Расходники', status: 'danger', iconType: 'drop', lifespanPercentage: 15 },
  { id: '3', title: 'Активная коляска', subtitle: 'В норме', date: '2024-01-15', category: 'Оборудование', status: 'ok', iconType: 'wheelchair', lifespanPercentage: 70 },
  { id: '4', title: 'Подушка противопролежневая', subtitle: 'Ревизия через месяц', date: '2025-08-28', category: 'Расходники', status: 'warning', iconType: 'drop', lifespanPercentage: 40 },
];

const MOCK_DETAIL: ItemDetail = {
  id: '3',
  title: 'Активная коляска',
  subtitle: 'Замена: 15.01.2029',
  date: '15.01.2024',
  category: 'Оборудование',
  status: 'ok',
  iconType: 'wheelchair',
  lifespanStart: '15.01.2024',
  lifespanEnd: '15.01.2029',
  lifespanPercentage: 70,
  classifierCode: '19-06-03',
  truCode: 'W542-G-001',
  notes: 'Коляска облегченная, спортивного типа. Требует ежегодного технического обслуживания.'
};

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.LOGIN);
  const [items, setItems] = useState<Item[]>(MOCK_ITEMS);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [isSOSOpen, setIsSOSOpen] = useState(false);

  const navigate = (screen: Screen, itemId?: string) => {
    if (itemId) setSelectedItemId(itemId);
    setCurrentScreen(screen);
  };

  const handleUpdateItem = (updatedItem: ItemDetail) => {
    // In a real app, update the list based on ID
    console.log('Updated item:', updatedItem);
    setItems(prev => prev.map(i => i.id === updatedItem.id ? { ...i, ...updatedItem } : i));
    navigate(Screen.DETAIL, updatedItem.id);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.LOGIN:
        return <LoginScreen onNavigate={navigate} />;
      case Screen.REGISTER:
        return <RegisterScreen onNavigate={navigate} />;
      case Screen.LIST:
        return <ListScreen items={items} onNavigate={navigate} />;
      case Screen.DETAIL:
        return <DetailScreen item={MOCK_DETAIL} onNavigate={navigate} />;
      case Screen.EDIT:
        return <EditScreen item={MOCK_DETAIL} onNavigate={navigate} onSave={handleUpdateItem} />;
      case Screen.ADD:
        return <AddScreen onNavigate={navigate} onAdd={(item) => setItems([item, ...items])} />;
      case Screen.PROFILE:
        return <ProfileScreen onNavigate={navigate} />;
      case Screen.CHANGE_PASSWORD:
        return <ChangePasswordScreen onNavigate={navigate} />;
      case Screen.POLICY:
        return <PolicyScreen onNavigate={navigate} />;
      case Screen.TERMS:
        return <TermsScreen onNavigate={navigate} />;
      default:
        return <LoginScreen onNavigate={navigate} />;
    }
  };

  const showBottomNav = [Screen.LIST, Screen.DETAIL, Screen.PROFILE, Screen.EDIT, Screen.CHANGE_PASSWORD].includes(currentScreen);

  return (
    <div className="h-full w-full max-w-md mx-auto relative bg-[#F2F3F7] flex flex-col overflow-hidden shadow-2xl">
      {/* Content Area - Scrolls independently */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar pb-24">
        {renderScreen()}
      </div>
      
      {showBottomNav && (
        <BottomNavigation 
          activeScreen={currentScreen} 
          onNavigate={navigate}
          onSOS={() => setIsSOSOpen(true)}
        />
      )}

      {/* SOS Modal Overlay */}
      {isSOSOpen && (
        <div className="absolute inset-0 z-[100] bg-red-600/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-white animate-in fade-in duration-200">
          <button 
            onClick={() => setIsSOSOpen(false)}
            className="absolute top-12 right-6 bg-white/20 p-2 rounded-full"
          >
            <X size={24} />
          </button>
          
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 animate-pulse">
            <Phone size={48} className="text-red-600" fill="currentColor" />
          </div>
          
          <h2 className="text-3xl font-bold mb-2">ЭКСТРЕННЫЙ ВЫЗОВ</h2>
          <p className="text-center opacity-90 mb-10 max-w-[250px]">
            Нажатие отправит ваши координаты и медкарту доверенным контактам.
          </p>

          <button className="w-full h-16 bg-white text-red-600 font-bold text-xl rounded-2xl shadow-lg mb-4 flex items-center justify-center">
            ВЫЗВАТЬ СКОРУЮ (112)
          </button>
          
          <button className="w-full h-14 bg-red-800 text-white font-semibold text-lg rounded-2xl flex items-center justify-center">
            Оповестить родных
          </button>
        </div>
      )}
    </div>
  );
};

export default App;