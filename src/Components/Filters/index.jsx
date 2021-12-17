/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { Context } from '../../context';
import style from './style.module.css';

export default () => {
  const {
    theme, activeFilter, setActiveFilter,
  } = useContext(Context);

  const isActive = (filter) => `${style.filterButton} ${activeFilter === filter ? style.active : ''}`;
  const setFilter = (ev, filter) => {
    ev.preventDefault();
    setActiveFilter(filter);
  };

  return (
    <ul className={style.filters}>
      <li>
        <a href="" onClick={(ev) => setFilter(ev, 'ALL')} className={isActive('ALL')}>
          All
        </a>
      </li>
      <li><a href="" className={isActive('ACTIVE')} onClick={(ev) => setFilter(ev, 'ACTIVE')}>Active</a></li>
      <li><a href="" className={isActive('COMPLETED')} onClick={(ev) => setFilter(ev, 'COMPLETED')}>Completed</a></li>
      <div className={style.themeIndicator}>{theme}</div>
    </ul>
  );
};
