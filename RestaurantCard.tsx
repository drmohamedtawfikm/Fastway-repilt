
import React from 'react';
import { Restaurant } from '../types';

interface Props {
  restaurant: Restaurant;
  onOrder: () => void;
}

const RestaurantCard: React.FC<Props> = ({ restaurant, onOrder }) => {
  return (
    <div className="bg-white rounded-[32px] overflow-hidden border border-gray-50 shadow-easy hover:translate-y-[-8px] transition-all duration-500 group">
      <div className="relative h-48">
        <img 
          src={restaurant.imageUrl} 
          alt={restaurant.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-black px-4 py-1.5 rounded-full text-xs font-black shadow-sm">
           كاش باك {restaurant.cashbackPercentage}% ✨
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-black">{restaurant.name}</h3>
          <span className="text-easy-green text-xs font-black bg-green-50 px-2 py-1 rounded-lg">
            {restaurant.deliveryTime}
          </span>
        </div>
        <p className="text-gray-400 text-xs font-bold mb-6">{restaurant.category}</p>
        
        <button 
          onClick={onOrder}
          className="w-full bg-black text-white py-3.5 rounded-2xl font-black text-sm hover:bg-gray-800 transition-all shadow-lg"
        >
          تفاصيل الطلب ➔
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;
