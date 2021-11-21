import React, { useContext } from 'react';
import { Context } from '../../context';
import style from './style.module.css';

export default () => {
  const { theme } = useContext(Context);
  return (
    <ul className={style.filters}>
      <li>
        <a href="javascript;" className={style.active}>
          All
        </a>
      </li>
      <li><a href="javascript;">Active</a></li>
      <li><a href="javascript;">Completed</a></li>
      <div className={style.themeIndicator}>{theme}</div>
    </ul>
  );
};
