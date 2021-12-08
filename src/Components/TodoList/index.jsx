/* eslint-disable max-len */
import React, { useContext } from 'react';
import { Context } from '../../context';
import style from './style.module.scss';
import Checkbox from '../Checkbox';

export default () => {
  const {
    todos, removeTodo, editTodo,
  } = useContext(Context);
  return (
    <div className={style.todoList}>
      <ul data-testid="taskList" aria-labelledby="todos">
        {todos ? todos.map((todo, i) => (
          <li className={`${style.taskList} ${todo.completed ? 'completed' : ''}`} key={todo}>
            <div className={style.taskGrid}>
              <Checkbox todoNumber={i} completed={todo.completed} />
              <input className={style.taskName} onChange={(ev) => editTodo(i, ev.target.value)} value={todo.title} />
              <button type="button" title="deleteButton" aria-label="removeTodo" onClick={() => removeTodo(i)} className={style.taskDelete}><img alt="" src="./icon-cross.svg" /></button>
            </div>
          </li>
        )) : <div className={style.taskGrid} />}
      </ul>
    </div>
  );
};
