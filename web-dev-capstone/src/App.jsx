import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy loading (same as before)
const Home = lazy(() => import('./pages/Home'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Cart = lazy(() => import('./pages/Cart'));
const Login = lazy(() => import('./pages/Login'));
const Profile = lazy(() => import('./pages/Profile'));

// Loading Spinner
const LoadingSpinner = () => (
  <div className="flex h-96 w-full items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      {/* ✅ FIXED: Use HashRouter instead of BrowserRouter */}
      <HashRouter>
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />

              {/* 404 Page */}
              <Route
                path="*"
                element={
                  <div className="text-center py-20">
                    <h1 className="text-6xl font-bold text-indigo-600">404</h1>
                    <p className="text-xl text-gray-500 mt-4">
                      Oops! This page doesn't exist.
                    </p>
                  </div>
                }
              />

            </Routes>
          </Suspense>
        </Layout>
      </HashRouter>
    </ErrorBoundary>
  );
}

export default App;
