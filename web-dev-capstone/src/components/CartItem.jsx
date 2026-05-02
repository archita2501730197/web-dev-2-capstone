import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../features/cartSlice';
import { Trash2, Plus, Minus } from 'lucide-react';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
      <div className="flex items-center space-x-4">
        <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover rounded" />
        <div>
          <h4 className="font-medium">{item.title}</h4>
          <p className="text-blue-500 font-bold">${item.price}</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center border dark:border-gray-600 rounded">
          <button 
            onClick={() => dispatch(updateQuantity({ id: item.id, qty: Math.max(1, item.quantity - 1) }))}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700"><Minus size={16} /></button>
          <span className="px-3">{item.quantity}</span>
          <button 
            onClick={() => dispatch(updateQuantity({ id: item.id, qty: item.quantity + 1 }))}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700"><Plus size={16} /></button>
        </div>
        <button 
          onClick={() => dispatch(removeFromCart(item.id))}
          className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 p-2 rounded">
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;