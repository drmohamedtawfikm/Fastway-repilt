
import React from 'react';
import { RESTAURANTS } from '../constants';
import { Restaurant } from '../types';
import RestaurantCard from './RestaurantCard';

interface Props {
  onOrder: (restaurant: Restaurant) => void;
}

const RestaurantList: React.FC<Props> = ({ onOrder }) => {
  return (
    <section className="py-20 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block pill-badge px-6 py-2 text-easy-green font-black text-sm mb-4">
            🔥 العروض الحصرية
          </div>
          <h2 className="text-4xl font-black mb-4">اطلب الآن من أفضل المطاعم</h2>
          <p className="text-gray-400 font-bold">نقدم لك قائمة مختارة بعناية لأفضل الوجبات</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {RESTAURANTS.map((restaurant) => (
            <RestaurantCard 
              key={restaurant.id} 
              restaurant={restaurant} 
              onOrder={() => onOrder(restaurant)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantList;
