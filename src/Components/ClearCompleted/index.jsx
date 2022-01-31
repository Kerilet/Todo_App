/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { Context } from '../../context';
import style from './style.module.scss';

export default () => {
  const {
    clearCompleted, theme,
  } = useContext(Context);

  const clearTodos = (ev) => {
    ev.preventDefault();
    clearCompleted();
  };

  return (
    <div className={theme === 'dark' ? style.dark : style.light}>
      <a href="" className={style.clearAll} onClick={(e) => clearTodos(e)}>Clear Completed</a>
    </div>
  );
};
