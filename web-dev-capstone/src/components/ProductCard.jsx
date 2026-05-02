import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { ShoppingBag, Star } from 'lucide-react';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  // Calculate original price (20% higher)
  const originalPrice = (product.price * 1.2).toFixed(2);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all p-4">
      {/* Product Image */}
      <div className="h-56 bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden mb-4">
        <img src={product.thumbnail} alt={product.title} className="w-full h-full object-contain" />
      </div>

      <h3 className="font-bold text-gray-900 dark:text-white truncate">{product.title}</h3>
      <p className="text-gray-500 text-xs uppercase mb-4">{product.category}</p>

      {/* FIXED PRICE SECTION */}
      <div className="flex items-center justify-between mt-auto">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-indigo-600">${product.price}</span>
            <span className="text-white/50 line-through italic text-[10px]">M.R.P: ${originalPrice}</span>
          </div>
          <p className="text-[10px] text-green-600 font-bold">You save 20% today!</p>
        </div>

        <button 
          onClick={() => dispatch(addToCart(product))}
          className="p-3 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 shadow-md"
        >
          <ShoppingBag size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;