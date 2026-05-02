import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';

// 1. PERFORMANCE REQUIREMENT: Lazy Loading for better page speed
const Home = lazy(() => import('./pages/Home'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Cart = lazy(() => import('./pages/Cart'));
const Login = lazy(() => import('./pages/Login'));
const Profile = lazy(() => import('./pages/Profile'));

// Loading component shown while pages are being fetched
const LoadingSpinner = () => (
  <div className="flex h-96 w-full items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      {/* 2. FUTURE FLAGS: This removes the yellow warnings seen in your console */}
      <Router 
        future={{ 
          v7_startTransition: true, 
          v7_relativeSplatPath: true 
        }}
      >
        <Layout>
          {/* 3. SUSPENSE: Required when using Lazy Loading */}
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Main Products Page */}
              <Route path="/" element={<Home />} />
              
              {/* Product Info Page */}
              <Route path="/product/:id" element={<ProductDetail />} />
              
              {/* Shopping Cart (CRUD Page) */}
              <Route path="/cart" element={<Cart />} />
              
              {/* Auth & Profile Pages */}
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              
              {/* 404 Page for extra marks */}
              <Route path="*" element={
                <div className="text-center py-20">
                  <h1 className="text-6xl font-bold text-indigo-600">404</h1>
                  <p className="text-xl text-gray-500 mt-4">Oops! This page doesn't exist.</p>
                </div>
              } />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
}

export default App;