/* eslint-disable max-len */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable func-names */
import React, { useContext } from 'react';
import { Context } from './context';
import style from './App.module.scss';
import Filters from './Components/Filters';
import TodoList from './Components/TodoList';
import TodoInput from './Components/TodoInput';
import ClearCompleted from './Components/ClearCompleted';

const App = function () {
  const {
    theme, getTotal,
  } = useContext(Context);

  return (
    <div className={[style.App, theme].join(' ')} data-testid="App">
      <div className={style.mainContainer}>

        <div className={style.todoHeader}>
          <div className={style.todoTitle}>T O D O</div>
          <div className={style.todoImage}>
            <img src="./icon-sun.svg" alt="desktop-sun" className={style.sunDesktop} />
            {' '}
          </div>
        </div>
        <TodoInput />
        <div className={style.listNOptions}>
          <div>
            <TodoList />
          </div>

          <div className={style.optionsContainer}>
            <div className={style.totalItems} data-testid="todoCounter">
              {getTotal}
              {' '}
              {getTotal === 1 ? 'item left' : 'items left'}
            </div>

            <div className={style.filterLinks}><Filters /></div>

            <ClearCompleted />
          </div>

        </div>
        <div className={style.filtersDiv}><Filters /></div>
      </div>
      <div className={style.dragDrop}>Drag and drop to reorder list</div>

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
