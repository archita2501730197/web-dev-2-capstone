import React from 'react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900 rounded-3xl mb-12">
      <div className="max-w-7xl mx-auto py-16 px-8 lg:flex lg:items-center">
        <div className="lg:w-1/2">
          <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">New Arrival 2026</span>
          <h1 className="mt-4 text-5xl font-extrabold text-gray-900 dark:text-white sm:text-6xl tracking-tight">
            Archita sales  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> Capstone Project </span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-lg">
            Experience the future of technology with our curated collection of high-performance gadgets.
          </p>
          <div className="mt-10 flex gap-4">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-200">
              Shop Now
            </button>
            <button className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-200 transition">
              View Deals
            </button>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2">
            {/* You can put a nice floating image here */}
            <div className="bg-gradient-to-tr from-indigo-200 to-purple-200 rounded-full h-96 w-96 blur-3xl absolute opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;