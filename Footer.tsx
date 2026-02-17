
import React from 'react';

interface Props {
  onJoinRestaurant: () => void;
  onAdminLogin: () => void;
}

const Footer: React.FC<Props> = ({ onJoinRestaurant, onAdminLogin }) => {
  return (
    <footer className="bg-white py-20 px-4 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-right">
          <div className="max-w-xs">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <div className="w-10 h-10 bg-easy-green rounded-xl flex items-center justify-center text-white">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2z" />
                </svg>
              </div>
              <span className="text-3xl font-black tracking-tighter">Fastway</span>
            </div>
            <p className="text-gray-400 font-bold leading-relaxed">
              أول منصة كاش باك حقيقي في مصر لطلب الطعام. التوفير بقى بجد مع فاست واي.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-10">
             <div className="space-y-4">
                <h4 className="font-black text-lg">المنصة</h4>
                <ul className="text-gray-400 font-bold space-y-2">
                  <li><a href="#restaurants" className="hover:text-easy-green transition-colors">المطاعم</a></li>
                  <li><a href="#quick-order" className="hover:text-easy-green transition-colors">العروض</a></li>
                  <li><a href="#" className="hover:text-easy-green transition-colors">المحفظة</a></li>
                </ul>
             </div>
             <div className="space-y-4">
                <h4 className="font-black text-lg">المساعدة</h4>
                <ul className="text-gray-400 font-bold space-y-2">
                  <li><a href="#" className="hover:text-easy-green transition-colors">تواصل معنا</a></li>
                  <li><a href="#" className="hover:text-easy-green transition-colors">الأسئلة الشائعة</a></li>
                  <li>
                    <button onClick={onJoinRestaurant} className="hover:text-easy-green transition-colors">انضم كمطعم</button>
                  </li>
                </ul>
             </div>
          </div>

          <div>
             <a 
                href="https://wa.me/201234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-50 border border-gray-100 p-6 rounded-3xl font-black flex items-center gap-4 hover:border-easy-green transition-all group text-right"
             >
                <div className="w-12 h-12 bg-easy-green rounded-2xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <div className="text-xs text-gray-400">تحدث معنا</div>
                  <div className="text-lg">دعم الواتساب</div>
                </div>
             </a>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-300 font-bold text-sm">
           <p>© ٢٠٢٤ فاست واي إيجيبت. جميع الحقوق محفوظة.</p>
           <div className="flex items-center gap-6">
              <a href="#" className="hover:text-gray-500 transition-colors">الشروط والأحكام</a>
              <a href="#" className="hover:text-gray-500 transition-colors">سياسة الخصوصية</a>
              <button 
                onClick={onAdminLogin}
                className="text-gray-200 hover:text-easy-green transition-colors font-black"
              >
                دخول الإدارة 🔑
              </button>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
