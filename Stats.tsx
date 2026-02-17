
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    {
      label: 'مطعم مشترك',
      value: '+٥٠٠',
      icon: '🏪',
      sub: 'في جميع أنحاء مصر'
    },
    {
      label: 'أوردر تم توصيله',
      value: '+٥٠,٠٠٠',
      icon: '📦',
      sub: 'بأعلى جودة وسرعة'
    },
    {
      label: 'كاش باك مدفوع',
      value: '+١,٠٠٠,٠٠٠',
      icon: '💰',
      sub: 'جنيه مصري توفير حقيقي'
    }
  ];

  return (
    <section id="stats" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block pill-badge px-6 py-2 text-easy-green font-black text-sm mb-6">
            📈 نجاحنا بالأرقام
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            ثقة آلاف العملاء والمطاعم
          </h2>
          <p className="text-gray-400 font-bold max-w-xl mx-auto">
            إحنا مش مجرد أبلكيشن طلب أكل، إحنا أكبر مجتمع توفير في مصر.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-gray-50/50 border border-gray-100 p-10 rounded-[40px] text-center hover:shadow-easy transition-all group">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-black text-black mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xl font-black text-easy-green mb-4">
                {stat.label}
              </div>
              <p className="text-gray-400 font-bold text-sm">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
