
import React, { useState, useEffect } from 'react';
import { DEFAULT_DATA } from '../dailyData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AdminPanel: React.FC<Props> = ({ isOpen, onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [restaurants, setRestaurants] = useState<string[]>([]);
  const [cities, setCities] = useState<{id: string, name: string}[]>([]);
  const [newItem, setNewItem] = useState('');
  const [activeTab, setActiveTab] = useState<'restaurants' | 'cities'>('restaurants');
  const [copyFeedback, setCopyFeedback] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('fastway_data');
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setRestaurants(parsed.restaurants);
      setCities(parsed.cities);
    } else {
      setRestaurants(DEFAULT_DATA.restaurants);
      setCities(DEFAULT_DATA.cities);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'iphoridgame' && password === 'iphoridgame') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('بيانات الدخول غير صحيحة يا مدير!');
    }
  };

  const saveData = (newRestaurants: string[], newCities: {id: string, name: string}[]) => {
    const data = { restaurants: newRestaurants, cities: newCities };
    localStorage.setItem('fastway_data', JSON.stringify(data));
    window.dispatchEvent(new Event('storage_updated'));
  };

  const addItem = () => {
    if (!newItem.trim()) return;
    if (activeTab === 'restaurants') {
      const updated = [newItem, ...restaurants];
      setRestaurants(updated);
      saveData(updated, cities);
    } else {
      const updated = [...cities, { id: Date.now().toString(), name: newItem }];
      setCities(updated);
      saveData(restaurants, updated);
    }
    setNewItem('');
  };

  const removeItem = (index: number) => {
    if (activeTab === 'restaurants') {
      const updated = restaurants.filter((_, i) => i !== index);
      setRestaurants(updated);
      saveData(updated, cities);
    } else {
      const updated = cities.filter((_, i) => i !== index);
      setCities(updated);
      saveData(restaurants, updated);
    }
  };

  const copyDataToDev = () => {
    const dataString = JSON.stringify({ restaurants, cities }, null, 2);
    navigator.clipboard.writeText(dataString);
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-white rounded-[40px] w-full max-w-2xl shadow-2xl relative overflow-hidden max-h-[90vh] flex flex-col">
        <button onClick={onClose} className="absolute top-6 left-6 p-2 bg-gray-100 rounded-full text-gray-400 hover:bg-gray-200">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {!isLoggedIn ? (
          <div className="p-12">
            <div className="text-center mb-10">
              <div className="w-20 h-20 bg-black rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔑</span>
              </div>
              <h2 className="text-3xl font-black mb-2">لوحة تحكم المدير</h2>
              <p className="text-gray-400 font-bold">الموقع الآن يعمل بنظام التحديث اليدوي المستقل</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <input 
                type="text" 
                placeholder="اسم المستخدم" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl font-bold outline-none focus:ring-2 ring-easy-green/20"
              />
              <input 
                type="password" 
                placeholder="كلمة المرور" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl font-bold outline-none focus:ring-2 ring-easy-green/20"
              />
              {error && <p className="text-red-500 text-sm font-bold text-center">{error}</p>}
              <button type="submit" className="w-full btn-black py-5 text-xl font-black">دخول الآدمن 🚀</button>
            </form>
          </div>
        ) : (
          <div className="flex-1 flex flex-col p-8 overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black">مرحباً يا مدير 👋</h2>
              <div className="flex bg-gray-100 p-1 rounded-xl">
                <button 
                  onClick={() => setActiveTab('restaurants')}
                  className={`px-6 py-2 rounded-lg font-black text-sm transition-all ${activeTab === 'restaurants' ? 'bg-white shadow-sm' : 'text-gray-400'}`}
                >
                  المطاعم
                </button>
                <button 
                  onClick={() => setActiveTab('cities')}
                  className={`px-6 py-2 rounded-lg font-black text-sm transition-all ${activeTab === 'cities' ? 'bg-white shadow-sm' : 'text-gray-400'}`}
                >
                  المدن
                </button>
              </div>
            </div>

            <div className="flex gap-2 mb-6">
              <input 
                type="text" 
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder={activeTab === 'restaurants' ? 'اسم المطعم الجديد...' : 'اسم المدينة الجديدة...'}
                className="flex-1 p-4 bg-gray-50 border border-gray-100 rounded-2xl font-bold outline-none"
                onKeyPress={(e) => e.key === 'Enter' && addItem()}
              />
              <button 
                onClick={addItem}
                className="bg-easy-green text-white px-8 rounded-2xl font-black text-xl active:scale-95 transition-all"
              >
                +
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2 pr-2">
              {(activeTab === 'restaurants' ? restaurants : cities.map(c => c.name)).map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl group hover:bg-red-50 transition-colors">
                  <span className="font-bold text-gray-700">{item}</span>
                  <button 
                    onClick={() => removeItem(index)}
                    className="text-gray-300 hover:text-red-500 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-50 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <button 
                  onClick={copyDataToDev}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm transition-all ${copyFeedback ? 'bg-green-100 text-green-700' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}`}
                >
                  {copyFeedback ? '✅ تم النسخ!' : '📋 نسخ القائمة للمطور لتحديث الكود'}
                </button>
                <button 
                  onClick={() => {
                     if(confirm('هل أنت متأكد من مسح كل التعديلات والعودة للوضع الافتراضي؟')) {
                       localStorage.removeItem('fastway_data');
                       window.location.reload();
                     }
                  }}
                  className="text-red-400 text-xs font-bold hover:underline"
                >
                  إعادة ضبط المصنع
                </button>
              </div>
              <p className="text-center text-[10px] text-gray-400 font-bold leading-relaxed">
                اضغط على زر النسخ وارسل لي النص هنا لأقوم بتثبيت التعديلات في ملف الكود الأصلي.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
