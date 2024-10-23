import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './redux/slice/todo';
import './App.css';

export default function App() {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="app">
      <h1 className="text-center text-2xl font-bold mb-4">Todo List</h1>
      
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching todos.</p>}
      
      <div className="card-container">
        {data && data.slice(0, 10).map((todo) => (
          <div key={todo.id} className="card">
            <h3 className="card-title">{todo.title}</h3>
            <p className={`status ${todo.completed ? 'completed' : 'pending'}`}>
              {todo.completed ? 'Completed' : 'Pending'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
