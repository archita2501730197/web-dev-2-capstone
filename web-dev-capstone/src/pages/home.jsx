import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../features/productSlice';
import ProductCard from '../components/ProductCard';
import Hero from '../components/Hero';
import Pagination from '../components/Pagination';

const Home = () => {
  const dispatch = useDispatch();
  const { items, total, status } = useSelector((state) => state.products);
  
  // 1. STATE FOR PAGINATION
  const [skip, setSkip] = useState(0);
  const limit = 12; // Show 12 items at a time

  // 2. FETCH DATA WHENEVER 'SKIP' CHANGES
  useEffect(() => {
    dispatch(getProducts({ limit, skip }));
    // Scroll to top when page changes for better UX
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [dispatch, skip]);

  return (
    <div className="min-h-screen pb-20 bg-gray-50 dark:bg-gray-950">
      <Hero />
      
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
           <h2 className="text-3xl font-black dark:text-white">Our Collection</h2>
           <span className="text-sm font-bold text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 px-4 py-2 rounded-full">
             {total} Products Available
           </span>
        </div>
        
        {status === 'loading' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-96 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-3xl" />
            ))}
          </div>
        ) : (
          <>
            {/* 3. PRODUCT GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* 4. PAGINATION COMPONENT */}
            <Pagination 
              total={total} 
              limit={limit} 
              skip={skip} 
              onPageChange={(newSkip) => setSkip(newSkip)} 
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;