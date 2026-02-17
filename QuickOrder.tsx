
import React, { useState, useEffect, useCallback } from 'react';
import { DEFAULT_DATA } from '../dailyData';

const QuickOrder: React.FC = () => {
  const [city, setCity] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [customRestaurant, setCustomRestaurant] = useState('');
  const [orderDescription, setOrderDescription] = useState('');
  const [price, setPrice] = useState<number | string>('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [cashback, setCashback] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [restaurants, setRestaurants] = useState<string[]>([]);
  const [cities, setCities] = useState<{id: string, name: string}[]>([]);

  const loadData = useCallback(() => {
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

  useEffect(() => {
    loadData();
    // استماع لأي تغييرات من لوحة التحكم
    window.addEventListener('storage_updated', loadData);
    return () => window.removeEventListener('storage_updated', loadData);
  }, [loadData]);

  useEffect(() => {
    const numPrice = Number(price);
    if (!isNaN(numPrice) && numPrice > 0) {
      setCashback(numPrice * 0.06);
    } else {
      setCashback(0);
    }
  }, [price]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    
    console.log("Order Submitted:", {
      city,
      restaurant: restaurantName === 'OTHER' ? customRestaurant : restaurantName,
      details: orderDescription,
      price,
      customer: name,
      phone,
      address,
      cashback: cashback.toFixed(2)
    });
    
    setTimeout(() => {
      setIsSuccess(false);
      setCity('');
      setRestaurantName('');
      setCustomRestaurant('');
      setOrderDescription('');
      setPrice('');
      setName('');
      setPhone('');
      setAddress('');
    }, 4000);
  };

  return (
    <section id="quick-order" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-[40px] shadow-easy border border-gray-50 overflow-hidden">
          <div className="bg-easy-green p-8 text-white text-center">
            <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-black mb-4">
              ⚡ نظام الكاش باك السريع
            </div>
            <h2 className="text-3xl font-black mb-2">اطلب من أي مطعم في مصر</h2>
            <p className="font-bold opacity-90">سجل بيانات الأوردر وخد ٦٪ كاش باك في محفظتك</p>
          </div>

          <div className="p-8 md:p-12">
            {isSuccess ? (
              <div className="py-12 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-easy-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-black mb-4">ألف مبروك! طلبك وصل</h3>
                <p className="text-gray-500 font-bold mb-4">جاري مراجعة الأوردر وإضافة الكاش باك لمحفظتك.</p>
                <div className="text-easy-green font-black text-2xl">+{cashback.toFixed(2)} ج.م</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-black text-gray-700 mb-3">١. اختر المدينة</label>
                    <select 
                      value={city} 
                      onChange={(e) => setCity(e.target.value)}
                      required
                      className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl font-bold outline-none appearance-none"
                    >
                      <option value="">اختر مدينتك</option>
                      {cities.map(c => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-black text-gray-700 mb-3">٢. اختر المطعم</label>
                    <select 
                      value={restaurantName}
                      onChange={(e) => setRestaurantName(e.target.value)}
                      required
                      className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl font-bold outline-none"
                    >
                      <option value="">اختر مطعمك</option>
                      {restaurants.map((name, index) => (
                        <option key={index} value={name}>{name}</option>
                      ))}
                      <option value="OTHER" className="text-easy-green font-black">✨ مطعم آخر غير موجود</option>
                    </select>
                  </div>
                </div>

                {restaurantName === 'OTHER' && (
                  <div className="animate-in slide-in-from-top duration-300">
                    <label className="block text-sm font-black text-easy-green mb-3">اكتب اسم المطعم</label>
                    <input 
                      type="text" 
                      value={customRestaurant}
                      onChange={(e) => setCustomRestaurant(e.target.value)}
                      placeholder="مثلاً: كريب أند وافل"
                      required
                      className="w-full p-4 bg-green-50/30 border border-green-100 rounded-2xl font-bold outline-none"
                    />
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-black text-gray-700 mb-3">٣. تفاصيل الأوردر</label>
                    <input 
                      type="text" 
                      value={orderDescription}
                      onChange={(e) => setOrderDescription(e.target.value)}
                      placeholder="الوجبات المطلوبة"
                      required
                      className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl font-bold outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-black text-gray-700 mb-3">٤. السعر التقريبي</label>
                    <input 
                      type="number" 
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="مبلغ الفاتورة"
                      required
                      className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl font-bold outline-none"
                    />
                  </div>
                </div>

                <div className="bg-green-50 rounded-[24px] p-6 border border-green-100 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-black text-black">الكاش باك اللي هيرجعلك:</span>
                  </div>
                  <div className="text-right">
                    <span className="text-4xl font-black text-easy-green">+{cashback.toFixed(2)}</span>
                    <span className="text-easy-green font-black ml-1 text-sm">ج.م</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-50">
                  <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="اسمك" required className="p-4 bg-gray-50 border border-gray-100 rounded-2xl font-bold outline-none" />
                  <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="رقم الموبايل" required className="p-4 bg-gray-50 border border-gray-100 rounded-2xl font-bold outline-none" />
                  <input type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder="العنوان" required className="p-4 bg-gray-50 border border-gray-100 rounded-2xl font-bold outline-none" />
                </div>

                <button type="submit" className="w-full btn-black py-6 text-xl font-black active:scale-95 transition-all">تأكيد وإرسال ⚡</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickOrder;
