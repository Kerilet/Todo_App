/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable func-names */
import React from 'react';
import Checkbox from './Components/Checkbox';
import style from './App.module.css';

const App = function () {
  const num = Math.floor(Math.random() * 30);
  return (
    <div className={style.App}>
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

        <div>
          <div className={style.todoList}>
            <ul>
              <li>
                <Checkbox />
                <div className={style.taskName}>Task Number One</div>
              </li>
              <li>
                <Checkbox />
                <div className={style.taskName}>Task Number Two</div>
              </li>
              <li>
                <Checkbox />
                <div className={style.taskName}>Task Number Three</div>
              </li>
              <li>
                <Checkbox />
                <div className={style.taskName}>Task Number Four</div>
              </li>
              <li>
                <Checkbox />
                <div className={style.taskName}>Task Number Five</div>
              </li>
              <li>
                <Checkbox />
                <div className={style.taskName}>Task Number Six</div>
              </li>
            </ul>
          </div>

          <div className={style.optionsContainer}>
            <div className={style.totalItems}>
              {num}
              {' '}
              items left
            </div>
            <ul className={style.filters}>
              <li><a href="javascript;" className={style.active}>All</a></li>
              <li><a href="javascript;">Active</a></li>
              <li><a href="javascript;">Completed</a></li>
            </ul>
            <div className={style.clearAll}>Clear Completed</div>
          </div>
        </div>

        <div className={style.dragDrop}>Drag and drop to reorder list</div>
      </div>

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
