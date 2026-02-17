
import React, { useState } from 'react';
import { Restaurant } from '../types';
import { DISHES } from '../constants';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  restaurant: Restaurant;
}

const OrderModal: React.FC<Props> = ({ isOpen, onClose, restaurant }) => {
  const [step, setStep] = useState(1);
  const [selectedDishId, setSelectedDishId] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState<'cash' | 'wallet'>('cash');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const restaurantDishes = DISHES[restaurant.id] || [];
  const selectedDish = restaurantDishes.find(d => d.id === selectedDishId);
  const cashbackAmount = selectedDish ? Math.round((selectedDish.price * restaurant.cashbackPercentage) / 100) : 0;

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderComplete(true);
    }, 1500);
  };

  const handleNext = () => setStep(2);
  const handleBack = () => setStep(1);

  if (orderComplete) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div className="bg-white rounded-[40px] p-12 max-w-md w-full text-center shadow-2xl">
          <div className="w-24 h-24 bg-[#f0f9f0] rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-12 h-12 text-[#064e3b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-black text-[#064e3b] mb-4">تم تأكيد طلبك!</h2>
          <p className="text-slate-500 font-bold mb-10 leading-relaxed">
            استعد لوجبة شهية وكاش باك <span className="text-[#8cc63f] font-black">{cashbackAmount} ج.م</span> تم إضافته لمحفظتك!
          </p>
          <button 
            onClick={onClose}
            className="w-full bg-[#064e3b] text-white py-5 rounded-full font-black text-xl shadow-lg"
          >
            شكراً لك!
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-t-[40px] sm:rounded-[40px] w-full max-w-lg shadow-2xl relative border-t border-slate-100">
        <button 
          onClick={onClose}
          className="absolute top-6 left-6 p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200 transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl overflow-hidden border border-slate-100">
              <img src={restaurant.imageUrl} alt={restaurant.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-[#064e3b] mb-1">{restaurant.name}</h3>
              <span className="text-[#8cc63f] text-sm font-black">كاش باك {restaurant.cashbackPercentage}%</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 ? (
              <div className="space-y-6">
                <label className="block text-[#064e3b] font-black mb-4">اختر طبقك المفضل:</label>
                <div className="space-y-4">
                  {restaurantDishes.map(dish => (
                    <label 
                      key={dish.id} 
                      className={`flex items-start gap-4 p-5 rounded-[24px] border-2 transition-all cursor-pointer ${selectedDishId === dish.id ? 'border-[#064e3b] bg-[#f0f9f0]' : 'border-slate-50 bg-slate-50 hover:border-slate-100'}`}
                    >
                      <input 
                        type="radio" 
                        name="dish" 
                        className="mt-1.5 accent-[#064e3b]"
                        checked={selectedDishId === dish.id}
                        onChange={() => setSelectedDishId(dish.id)}
                        required
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-black text-[#064e3b]">{dish.name}</span>
                          <span className="font-black text-[#8cc63f]">{dish.price} ج.م</span>
                        </div>
                        <p className="text-slate-400 text-xs font-bold leading-tight">{dish.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
                
                <button 
                  type="button"
                  disabled={!selectedDishId}
                  onClick={handleNext}
                  className="w-full bg-[#064e3b] text-white py-5 rounded-full font-black text-xl disabled:opacity-30"
                >
                  الخطوة التالية ➔
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                <input 
                  type="text" 
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  placeholder="الاسم بالكامل"
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-[#064e3b] font-bold focus:ring-2 ring-emerald-100 outline-none"
                />
                <input 
                  type="tel" 
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  required
                  placeholder="رقم الموبايل"
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-[#064e3b] font-bold focus:ring-2 ring-emerald-100 outline-none"
                />
                <input 
                  type="text" 
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  required
                  placeholder="عنوان التوصيل بالتفصيل"
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-[#064e3b] font-bold focus:ring-2 ring-emerald-100 outline-none"
                />

                <div className="bg-[#f0f9f0] p-6 rounded-[24px] border border-[#e0f2e0]">
                  <div className="flex justify-between items-center mb-1 text-slate-500 font-bold">
                    <span>إجمالي الطلب:</span>
                    <span className="text-[#064e3b]">{selectedDish?.price} ج.م</span>
                  </div>
                  <div className="flex justify-between items-center text-[#064e3b] font-black text-lg">
                    <span>كاش باك سيصلك:</span>
                    <span className="text-[#8cc63f]">+{cashbackAmount} ج.م</span>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button 
                    type="button"
                    onClick={handleBack}
                    className="flex-1 bg-slate-100 text-slate-500 py-5 rounded-full font-black"
                  >
                    رجوع
                  </button>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-[2] bg-[#064e3b] text-white py-5 rounded-full font-black text-xl shadow-lg"
                  >
                    {isSubmitting ? 'جاري التأكيد...' : 'تأكيد الطلب الآن ⚡'}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
