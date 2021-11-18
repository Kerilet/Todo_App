/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState, useMemo } from 'react';

export const Context = createContext();

export default function ctx({ children }) {
  // Theme
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Todos
  const [todos, setTodos] = useState([{ title: 'Todo 1', completed: false, order: 1 }]);

  const addTodo = (title) => {
    const newTodos = [...todos];
    newTodos.push({ title });
    setTodos(newTodos);
  };

  const getTotal = useMemo(() => todos.length);

  const values = {
    theme, toggleTheme, todos, addTodo, getTotal,
  };

  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  );
}
