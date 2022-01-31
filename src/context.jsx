/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext, useState, useEffect, useMemo,
} from 'react';

export const Context = createContext('');

export default function ctx({ children }) {
  // Theme
  const currentTheme = window.localStorage.getItem('theme');
  const [theme, setTheme] = useState(JSON.parse(currentTheme));

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Todos
  const todoArrayString = window.localStorage.getItem('todos') || '[]';
  const [todos, setTodos] = useState(JSON.parse(todoArrayString));
  const [activeFilter, setActiveFilter] = useState('ALL');

  const addTodo = (title) => {
    const todo = {
      title,
      completed: false,
      order: todos.length + 1,
    };
    const newTodos = [...todos];
    newTodos.push(todo);
    setTodos(newTodos);
  };

  const editTodo = (i, todoTitle) => {
    const temp = [...todos];
    temp[i].title = todoTitle;
    setTodos(temp);
  };

  const toggleCompleted = (i) => {
    const temp = [...todos];
    temp[i].completed = !temp[i].completed;
    setTodos(temp);
  };

  const removeTodo = (i) => {
    const temp = [...todos];
    temp.splice(i, 1);
    setTodos(temp);
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const changeOrder = (orderedList) => {
    const newList = orderedList.map((item, i) => ({ ...item, order: i + 1 }));
    setTodos(newList);
  };

  // LocalStorage
  useEffect(() => {
    const todosString = JSON.stringify(todos);
    window.localStorage.setItem('todos', todosString);
  }, [todos]);

  useEffect(() => {
    const themeString = JSON.stringify(theme);
    window.localStorage.setItem('theme', themeString);
  }, [theme]);

  // Counting
  const getTotal = useMemo(() => {
    const total = [];
    const temp = [...todos];
    for (let i = 0; i < temp.length; i++) {
      if (!temp[i].completed) {
        total.push(temp[i]);
      }
    }
    return total.length;
  });

  // Filters
  const filteredTodos = useMemo(() => todos.filter((todo) => {
    if (activeFilter === 'ACTIVE') {
      return !todo.completed;
    }
    if (activeFilter === 'COMPLETED') {
      return todo.completed;
    }
    return true;
  }));

  const values = {
    theme, toggleTheme, todos, addTodo, getTotal, removeTodo, editTodo, toggleCompleted, activeFilter, setActiveFilter, filteredTodos, clearCompleted, changeOrder,
  };

  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  );
}
