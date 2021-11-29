/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext, useState, useEffect, useMemo,
} from 'react';

export const Context = createContext();

export default function ctx({ children }) {
  // Theme
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Todos
  const todoArrayString = window.localStorage.getItem('todos') || '[]';
  const todoArray = JSON.parse(todoArrayString);
  const [todos, setTodos] = useState(todoArray);
  const [todoInfo, setTodoInfo] = useState('');

  const changeTodo = (ev) => {
    ev.preventDefault();
    const { value } = ev.target;
    setTodoInfo(value);
  };

  const editTodo = (i, todoTitle) => {
    for (let x = 0; x < todos.length; x++) {
      console.log('here');
      todos[i].title = todoTitle;
      const todosString = JSON.stringify(todos);
      window.localStorage.setItem('todos', todosString);
    }
  };

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

  const submitTodo = (ev) => {
    ev.preventDefault();
    if (todoInfo) {
      addTodo(todoInfo);
      setTodoInfo('');
    }
  };

  const removeTodo = (i) => {
    setTodos(() => {
      const temp = [...todos];
      temp.splice(i, 1);
      return temp;
    });
  };

  useEffect(() => {
    const todosString = JSON.stringify(todos);
    window.localStorage.setItem('todos', todosString);
  }, [todos]);

  const getTotal = useMemo(() => todos.length);

  const values = {
    theme, toggleTheme, todos, todoInfo, setTodoInfo, addTodo, getTotal, removeTodo, changeTodo, submitTodo, editTodo,
  };

  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  );
}
