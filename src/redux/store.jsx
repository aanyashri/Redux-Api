// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slice/todo'; // Path to your todo slice

export const store = configureStore({
  reducer: {
    todos: todoReducer, // Ensure this matches the state you're accessing
  },
});
