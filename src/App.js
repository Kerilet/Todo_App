import React from 'react';
import style from './App.module.css';

function App() {
  const num = Math.floor(Math.random() * 30);
  return (
    <div className={style.App}>
      <div className={style.todoTitle}>T O D O</div>
      <div><img src="./icon-sun.svg" alt="desktop-sun" className={style.sunDesktop}/> </div>
      <div className={style.todoInput}>
        <input type="text"></input>
      </div>
      <div><img src="./bg-desktop-dark.jpg" alt="bg-desktop-dark" className={style.bgDesktop}/></div>

      <div>
        <div>{num} items left</div>
        <div className={style.todoList}>
          <ul>
            <li><input type="checkbox" className={style.todoCheckbox} />Task Number One</li>
            <li><input type="checkbox" className={style.todoCheckbox} />Task Number Two</li>
            <li><input type="checkbox" className={style.todoCheckbox} />Task Number Three</li>
            <li><input type="checkbox" className={style.todoCheckbox} />Task Number Four</li>
          </ul>
        </div>
        <div className="optionsContainer">
          <div>All</div>
          <div>Active</div>
          <div>Completed</div>         
        </div>
        <div>Clear Completed</div>
      </div>



      <div>Drag and drop to reorder list</div>

      <div className={style.attribution}>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by Kerilet.
      </div>
    </div>
  );
}

export default App;
