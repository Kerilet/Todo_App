/* eslint-disable max-len */
import React, { useContext, useState } from 'react';
import { Context } from '../../context';
import style from './style.module.scss';
import Checkbox from '../Checkbox';

export default () => {
  const [todoInfo, setTodoInfo] = useState('');
  const { addTodo } = useContext(Context);

  const changeTodo = (ev) => {
    ev.preventDefault();
    const { value } = ev.target;
    setTodoInfo(value);
  };

  const submitTodo = (ev) => {
    ev.preventDefault();
    if (todoInfo) {
      addTodo(todoInfo);
      setTodoInfo('');
    }
  };
  return (

    <div className={style.todoInput}>
      <div className={style.todoList}>
        <form onSubmit={submitTodo} data-testid="formTodo">
          <Checkbox disabled />
          <input data-testid="todoInput" type="text" onChange={changeTodo} value={todoInfo} />
        </form>
      </div>
    </div>

  );
};
