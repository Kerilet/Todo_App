import React from 'react';
import style from './App.module.css';

function App() {
  const num = Math.floor(Math.random() * 30);
  return (
    <div className={style.App}>
      <div className={style.todoTitle}>T O D O</div>
      <div><img src="./icon-sun.svg" alt="desktop-sun" className={style.sunDesktop}/> </div>
      <div><img src="./bg-desktop-dark.jpg" alt="bg-desktop-dark" className={style.bgDesktop}/></div>

      <div className={style.todoInput}>
        <input type="text"></input>
      </div>

      <div>
        <div>{num} items left</div>
        Clear Completed
      </div>

      <div className="optionsContainer">
        <div>All</div>
        <div>Active</div>
        <div>Completed</div>         
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
