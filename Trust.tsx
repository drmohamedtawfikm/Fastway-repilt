
import React from 'react';

const Trust: React.FC = () => {
  return (
    <section id="trust" className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block pill-badge px-6 py-2 text-easy-green font-black text-sm mb-6">
            🤝 مصلحة مشتركة
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            إحنا حلقة الوصل بينك وبين طعمك المفضل
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* For Customers */}
          <div className="bg-[#fcfdfe] p-12 rounded-easy border border-gray-100 shadow-easy group hover:border-easy-green/30 transition-all">
            <div className="text-6xl mb-8">👤</div>
            <h3 className="text-3xl font-black text-black mb-6">ليك كـ عميل</h3>
            <ul className="space-y-4 font-bold text-gray-500 text-lg">
              <li className="flex items-center gap-3">
                <span className="text-easy-green text-2xl">✓</span>
                كاش باك حقيقي بيرجعلك في المحفظة
              </li>
              <li className="flex items-center gap-3">
                <span className="text-easy-green text-2xl">✓</span>
                فلوس مش نقاط (تقدر تطلب بيها تاني)
              </li>
              <li className="flex items-center gap-3">
                <span className="text-easy-green text-2xl">✓</span>
                أسهل تجربة طلب في مصر
              </li>
            </ul>
          </div>

          {/* For Restaurants */}
          <div className="bg-black p-12 rounded-easy border border-gray-800 shadow-easy group hover:border-easy-green/30 transition-all">
            <div className="text-6xl mb-8">🍔</div>
            <h3 className="text-3xl font-black text-white mb-6">ليك كـ صاحب مطعم</h3>
            <ul className="space-y-4 font-bold text-gray-300 text-lg">
              <li className="flex items-center gap-3">
                <span className="text-easy-green text-2xl">✓</span>
                أقل عمولة في السوق (وفر فلوسك)
              </li>
              <li className="flex items-center gap-3">
                <span className="text-easy-green text-2xl">✓</span>
                قناة بيع إضافية بتجيبلك زباين جداد
              </li>
              <li className="flex items-center gap-3">
                <span className="text-easy-green text-2xl">✓</span>
                مفيش التزام حصري.. بيع براحتك
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-gray-400 font-bold text-xl italic">
            "فاست واي .. مبيعات زيادة للمطعم، وتوفير حقيقي للعميل"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trust;
