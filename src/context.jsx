/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext, useState, useEffect, useMemo,
} from 'react';

export const Context = createContext('');

export default function ctx({ children }) {
  // Theme
  const [theme] = useState('dark');

  // const toggleTheme = () => {
  //   setTheme(theme === 'dark' ? 'light' : 'dark');
  // };
  const toggleTheme = null;

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

  useEffect(() => {
    const todosString = JSON.stringify(todos);
    window.localStorage.setItem('todos', todosString);
  }, [todos]);

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
    theme, toggleTheme, todos, addTodo, getTotal, removeTodo, editTodo, toggleCompleted, activeFilter, setActiveFilter, filteredTodos,
  };

  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  );
}
