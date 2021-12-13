/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { Context } from '../../context';
import style from './style.module.css';

export default () => {
  const {
    theme, filterAll, filterActive, filterCompleted,
  } = useContext(Context);
  return (
    <ul className={style.filters}>
      <li>
        <button type="button" onClick={() => filterAll} className={style.filterButton}>
          All
        </button>
      </li>
      <li><button type="button" className={style.filterButton} onClick={() => filterActive()}>Active</button></li>
      <li><button type="button" className={style.filterButton} onClick={() => filterCompleted()}>Completed</button></li>
      <div className={style.themeIndicator}>{theme}</div>
    </ul>
  );
};
