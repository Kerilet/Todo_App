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
  const todoArray = JSON.parse(todoArrayString);
  const [todos, setTodos] = useState(todoArray);
  const [filtered, setFiltered] = useState(todoArray);

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
    const filteredTodosString = JSON.stringify(filtered);
    window.localStorage.setItem('todos', todosString);
    window.localStorage.setItem('filteredTodos', filteredTodosString);
    const updatedTodos = [...todos];
    setFiltered(updatedTodos);
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

  // Filters
  const filterAll = () => {
    const temp = [...todos];
    setFiltered(temp);
  };

  const filterActive = () => {
    const temp = [];
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].completed === false) {
        temp.push(todos[i]);
      }
    }
    setFiltered(temp);
  };

  const filterCompleted = () => {
    const temp = [];
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].completed) {
        temp.push(todos[i]);
      }
    }
    setFiltered(temp);
  };

  const values = {
    theme, toggleTheme, todos, addTodo, getTotal, removeTodo, editTodo, toggleCompleted, filterAll, filterActive, filterCompleted,
  };

  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  );
}
