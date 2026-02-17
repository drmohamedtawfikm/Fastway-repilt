
import React from 'react';

interface Props {
  onJoinRestaurant: () => void;
}

const Hero: React.FC<Props> = ({ onJoinRestaurant }) => {
  const scrollToOrder = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('quick-order');
    if (element) {
      // التمرير البرمجي يضمن الفعالية حتى لو تعطل السلوك الافتراضي للرابط
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative px-4 pb-20 pt-10">
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Floating Badges Style - Easy Orders Inspired */}
        <div className="hidden md:block">
          <div className="absolute -top-10 right-0 pill-badge px-5 py-2.5 flex items-center gap-2 text-sm font-black text-gray-700 animate-bounce">
            <span className="text-easy-green">💰</span> كاش باك حقيقي مش نقاط
          </div>
          <div className="absolute top-20 -right-20 pill-badge px-5 py-2.5 flex items-center gap-2 text-sm font-black text-gray-700">
            <span className="text-easy-green">🚀</span> عمولة أقل للمطاعم
          </div>
          <div className="absolute -top-5 left-0 pill-badge px-5 py-2.5 flex items-center gap-2 text-sm font-black text-gray-700">
            <span className="text-easy-green">⚡</span> طلب بضغطة واحدة
          </div>
          <div className="absolute top-40 -left-10 pill-badge px-5 py-2.5 flex items-center gap-2 text-sm font-black text-gray-700">
            <span className="text-easy-green">🍔</span> مئات المطاعم حولك
          </div>
        </div>

        <div className="mb-10 inline-block">
          <div className="w-24 h-24 bg-easy-green/10 rounded-[35%] flex items-center justify-center mx-auto mb-6 transform rotate-12 border-2 border-easy-green/20">
            <svg className="w-12 h-12 text-easy-green" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2z" />
            </svg>
          </div>
        </div>

        <h1 className="text-4xl md:text-7xl font-black text-black leading-[1.1] mb-8 px-4">
          اطلب أكلك المفضل <br />
          وخد <span className="text-easy-green">فلوس ترجعلك</span> كاش
        </h1>
        
        <p className="text-gray-500 font-bold mb-12 text-xl max-w-2xl mx-auto leading-relaxed">
          فاست واي هي أول منصة بترجعلك فلوس حقيقية في محفظتك مع كل أوردر، وبتساعد مطعمك المفضل يبيع أكتر بعمولة أقل.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a 
            href="#quick-order" 
            onClick={scrollToOrder}
            className="w-full sm:w-auto btn-black px-12 py-6 text-xl font-black flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-95 transition-all"
          >
            ابدأ التوفير الآن 💸
          </a>
          <button 
            onClick={onJoinRestaurant}
            className="w-full sm:w-auto bg-white border-2 border-black px-12 py-6 text-xl font-black rounded-xl hover:bg-gray-50 transition-all shadow-sm active:scale-95"
          >
             أنا صاحب مطعم 🍔
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-16">
          <div className="flex items-center gap-2 text-sm font-black text-gray-600">
            <div className="w-2 h-2 bg-easy-green rounded-full"></div>
            بدون رسوم خفية
          </div>
          <div className="flex items-center gap-2 text-sm font-black text-gray-600">
            <div className="w-2 h-2 bg-easy-green rounded-full"></div>
            سحب كاش فوري
          </div>
          <div className="flex items-center gap-2 text-sm font-black text-gray-600">
            <div className="w-2 h-2 bg-easy-green rounded-full"></div>
            أقل عمولة في مصر
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
