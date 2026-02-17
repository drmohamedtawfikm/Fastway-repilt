
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: '🛒',
      title: 'اطلب أكلك',
      desc: 'نقي اللي نفسك فيه من مئات المطاعم المتاحة'
    },
    {
      icon: '😋',
      title: 'استمتع بالوجبة',
      desc: 'الأكل هيوصلك سخن وسريع لحد باب البيت'
    },
    {
      icon: '💸',
      title: 'خد فلوسك',
      desc: 'الكاش باك هينزل في محفظتك فوراً بعد الطلب'
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-easy shadow-easy border border-gray-50 p-12 relative overflow-hidden">
          <div className="text-center mb-16">
            <div className="inline-block pill-badge px-6 py-2 text-easy-green font-black text-sm mb-6">
              📍 ٣ خطوات بس
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-4">إزاي بتوفر مع فاست واي؟</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-24 h-24 bg-gray-50 rounded-[30px] flex items-center justify-center text-5xl mx-auto mb-8 group-hover:bg-easy-green/10 group-hover:scale-110 transition-all duration-500">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-black mb-4">{step.title}</h3>
                <p className="text-gray-400 font-bold leading-relaxed px-4">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Background decoration inspired by easy-orders */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-easy-green/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-easy-green/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
