/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable func-names */
import React, { useContext } from 'react';
import { Context } from './context';
import Checkbox from './Components/Checkbox';
import style from './App.module.css';
import Filters from './Components/Filters';
import TodoList from './Components/TodoList';

const App = function () {
  const {
    theme, toggleTheme, addTodo, getTotal,
  } = useContext(Context);
  return (
    <div className={[style.App, theme].join(' ')}>
      <div className={style.mainContainer}>

        <div className={style.todoHeader}>
          <div className={style.todoTitle}>T O D O</div>
          <div>
            <img src="./icon-sun.svg" alt="desktop-sun" className={style.sunDesktop} />
            {' '}
          </div>
        </div>

        <div className={style.todoInput}>
          <Checkbox />
          <input type="text" />
        </div>
        <div className={style.listNOptions}>
          <div>
            <TodoList />
          </div>

          <div className={style.optionsContainer}>
            <div className={style.totalItems}>
              {getTotal}
              {' '}
              items left
            </div>
            <Filters />
            <div className={style.clearAll}>Clear Completed</div>
          </div>
        </div>
      </div>
      <div className={style.dragDrop}>Drag and drop to reorder list</div>
      <div>{theme}</div>
      <div><button type="button" onClick={toggleTheme}>Toggle theme</button></div>
      <div><button type="button" onClick={() => addTodo(`Todo number ${getTotal}`)}>Add todo</button></div>

      <div className={style.attribution}>
        Challenge by
        {' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>
        .
        Coded by Kerilet.
      </div>
    </div>
  );
};

export default App;
