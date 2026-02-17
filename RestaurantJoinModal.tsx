
import React, { useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const RestaurantJoinModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-[40px] w-full max-w-lg shadow-2xl relative overflow-hidden border border-gray-100">
        <button 
          onClick={onClose}
          className="absolute top-6 left-6 p-2 bg-gray-50 rounded-full text-gray-400 hover:bg-gray-100 transition-all z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 md:p-12">
          {isSuccess ? (
            <div className="text-center py-10">
              <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-12 h-12 text-easy-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-black text-black mb-4">طلبك قيد المراجعة!</h2>
              <p className="text-gray-500 font-bold leading-relaxed mb-10">
                شكراً لانضمامك لفاست واي. فريق المبيعات هيتواصل معاك خلال ٢٤ ساعة عشان نفعل مطعمك على المنصة.
              </p>
              <button 
                onClick={onClose}
                className="w-full btn-black py-5 rounded-2xl font-black text-xl"
              >
                حسناً
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <div className="inline-block bg-easy-green/10 text-easy-green px-4 py-1 rounded-full text-xs font-black mb-4">
                  🤝 شركاء النجاح
                </div>
                <h2 className="text-3xl font-black text-black mb-2">سجل مطعمك الآن</h2>
                <p className="text-gray-400 font-bold">ابدأ بيع أكتر بعمولة أقل مع فاست واي</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input 
                  type="text" 
                  required
                  placeholder="اسم المطعم"
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl font-bold focus:ring-2 ring-green-100 outline-none"
                />
                <input 
                  type="text" 
                  required
                  placeholder="اسم صاحب المطعم / المسؤول"
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl font-bold focus:ring-2 ring-green-100 outline-none"
                />
                <input 
                  type="tel" 
                  required
                  placeholder="رقم الموبايل"
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl font-bold focus:ring-2 ring-green-100 outline-none"
                />
                <select className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl font-bold focus:ring-2 ring-green-100 outline-none">
                  <option>المدينة</option>
                  <option>القاهرة</option>
                  <option>الجيزة</option>
                  <option>الإسكندرية</option>
                  <option>المنصورة</option>
                </select>
                
                <div className="bg-gray-50 p-6 rounded-[24px] border border-gray-100">
                  <div className="flex items-center gap-3 text-gray-700 font-black mb-2">
                    <span className="text-easy-green">✨</span>
                    لماذا تنضم إلينا؟
                  </div>
                  <ul className="text-xs font-bold text-gray-400 space-y-1">
                    <li>• عمولة ثابتة ٥٪ فقط على كل أوردر</li>
                    <li>• مبيعات إضافية بدون التزام حصري</li>
                    <li>• تسوية مالية أسبوعية سريعة</li>
                  </ul>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-black py-5 rounded-2xl font-black text-xl shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? 'جاري الإرسال...' : 'سجل مطعمك الآن 🚀'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantJoinModal;
