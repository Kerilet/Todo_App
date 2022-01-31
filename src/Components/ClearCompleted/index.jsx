/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { Context } from '../../context';
import style from './style.module.css';

export default () => {
  const {
    clearCompleted,
  } = useContext(Context);

  const clearTodos = (ev) => {
    ev.preventDefault();
    clearCompleted();
  };

  return (
    <a href="" className={style.clearAll} onClick={(e) => clearTodos(e)}>Clear Completed</a>
  );
};
