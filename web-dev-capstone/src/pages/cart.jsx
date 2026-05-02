import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { formatPrice } from '../utils/formatters';

const Cart = () => {
  const { items, totalAmount } = useSelector((state) => state.cart);

  if (items.length === 0) return <div className="text-center py-20">Your cart is empty.</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        {items.map((item) => <CartItem key={item.id} item={item} />)}
        <div className="mt-8 text-right">
          <p className="text-xl">Total: <span className="font-bold text-2xl">{formatPrice(totalAmount)}</span></p>
          <button className="mt-4 bg-green-600 text-white px-10 py-3 rounded-lg font-bold">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;