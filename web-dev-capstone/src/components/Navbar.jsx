import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingBag, Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
  const [isDark, setIsDark] = useDarkMode();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black text-indigo-600">ELECTRO<span className="text-gray-900 dark:text-white">NEXT</span></Link>
        
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-indigo-600">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <Link to="/cart" className="relative p-2 bg-indigo-600 text-white rounded-xl">
            <ShoppingBag size={20} />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;