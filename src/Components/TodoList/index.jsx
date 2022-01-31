/* eslint-disable max-len */
import React, { useContext } from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import { ReactSortable } from 'react-sortablejs';
import { Context } from '../../context';
import style from './style.module.scss';
import Checkbox from '../Checkbox';

export default () => {
  const {
    filteredTodos, removeTodo, editTodo, theme, todos, changeOrder,
  } = useContext(Context);
  return (
    <div className={theme === 'dark' ? style.dark : style.light}>
      <div className={style.todoList}>
        <ul data-testid="taskList" aria-labelledby="todos">
          <TransitionGroup className={style.transitionList}>
            <ReactSortable list={todos} setList={changeOrder}>
              {filteredTodos.map((todo, i) => (
                <CSSTransition
                  key={todo.order}
                  timeout={500}
                  classNames={{
                    enter: style.itemEnter,
                    enterActive: style.itemEnterActive,
                    exit: style.itemExit,
                    exitActive: style.itemExitActive,
                  }}
                >
                  <li className={`${style.taskList} ${todo.completed ? 'completed' : ''}`} key={todo}>
                    <div className={style.taskGrid}>
                      <Checkbox todoNumber={i} completed={todo.completed} />
                      <input className={`${style.taskName} ${todo.completed ? style.taskCompleted : ''}`} completed={todo.completed ? 'completed' : undefined} onChange={(ev) => editTodo(i, ev.target.value)} value={todo.title} />
                      <button type="button" title="deleteButton" aria-label="removeTodo" onClick={() => removeTodo(i)} className={style.taskDelete}><img alt="deleteBtn" src="./icon-cross.svg" /></button>
                    </div>
                  </li>
                </CSSTransition>
              ))}
            </ReactSortable>
          </TransitionGroup>
        </ul>
      </div>
    </div>
  );
};
