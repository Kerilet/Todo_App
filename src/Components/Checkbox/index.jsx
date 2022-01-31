import React, { useContext } from 'react';
import { Context } from '../../context';
import style from './style.module.scss';

export default function c({ todoNumber, completed, disabled }) {
  const {
    toggleCompleted, theme,
  } = useContext(Context);

  return (
    <div className={theme === 'dark' ? style.dark : style.light}>
      <div className={`${style.todoCheckbox} ${completed ? style.completed : ''} ${disabled ? style.disabled : ''}`}>
        <input type="checkbox" disabled={disabled} checked={completed} onChange={() => (disabled ? null : toggleCompleted(todoNumber))} />
        {completed && <img src="./icon-check.svg" alt="Checked" />}
      </div>
    </div>
  );
}
