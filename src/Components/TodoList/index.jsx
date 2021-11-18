import React, { useContext } from 'react';
import { Context } from '../../context';
import style from './style.module.css';
import Checkbox from '../Checkbox';

export default () => {
  const { todos } = useContext(Context);

  return (
    <div className={style.todoList}>
      <ul>
        {todos.map((todo) => (
          <li>
            <Checkbox />
            <div className={style.taskName}>{todo.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
