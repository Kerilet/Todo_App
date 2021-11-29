/* eslint-disable max-len */
import React, { useContext } from 'react';
import { Context } from '../../context';
import style from './style.module.css';
import Checkbox from '../Checkbox';

export default () => {
  const {
    todos, removeTodo, editTodo,
  } = useContext(Context);
  return (
    <div className={style.todoList}>
      <ul>
        {todos.map((todo, i) => (
          <li>
            <div className={style.taskGrid}>
              <Checkbox />
              <input className={style.taskName} onChange={(ev) => editTodo(i, ev.target.value)} value={todo.title} />
              <button type="button" aria-label="removeTodo" onClick={() => removeTodo(i)} className={style.taskDelete}><img alt="" src="../../icon-cross.svg" /></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
