import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulation of role-based authentication
    dispatch(login({ name: 'Student Name', email, role: 'admin' }));
    navigate('/profile');
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Login to ElectroNext</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input 
          type="email" placeholder="Email Address" required
          className="w-full p-3 border rounded-lg dark:bg-gray-700"
          value={email} onChange={(e) => setEmail(e.target.value)}
        />
        <input type="password" placeholder="Password" required className="w-full p-3 border rounded-lg dark:bg-gray-700" />
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold">Login</button>
      </form>
    </div>
  );
};

export default Login;