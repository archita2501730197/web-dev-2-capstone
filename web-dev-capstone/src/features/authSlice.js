import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    role: 'guest', // guest | user | admin
  },
  reducers: {
    login: (state, action) => {
      // action.payload would contain user info like name, email, and role
      state.user = action.payload;
      state.isAuthenticated = true;
      state.role = action.payload.role || 'user';
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.role = 'guest';
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;