import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!user) return <div className="text-center py-20">Please log in to view profile.</div>;

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-10 rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <div className="space-y-2">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> <span className="capitalize text-blue-500 font-bold">{role}</span></p>
      </div>
      <button 
        onClick={() => { dispatch(logout()); navigate('/'); }}
        className="mt-10 bg-red-500 text-white px-6 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;