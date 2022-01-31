/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext } from 'react';
import { Context } from '../../context';
import style from './style.module.scss';

export default () => {
  const {
    theme, toggleTheme,
  } = useContext(Context);

  const inverseTheme = (ev) => {
    ev.preventDefault();
    toggleTheme();
  };

  return (
    <div className={style.todoImage}>
      <img href="" src={theme === 'dark' ? './icon-sun.svg' : './icon-moon.svg'} alt={theme === 'dark' ? 'desktop-sun' : 'desktop-moon'} className={theme === 'dark' ? style.sunDesktop : style.moonDesktop} onClick={(e) => inverseTheme(e)} />
    </div>
  );
};
