import React, { useContext } from 'react';
import { Context } from '../../context';
import style from './style.module.scss';

export default function c({ todoNumber, completed, disabled }) {
  const {
    toggleCompleted,
  } = useContext(Context);

  return (
    <div className={`${style.todoCheckbox} ${completed ? 'completed' : ''}`}>
      <button aria-label="check" onClick={() => (disabled ? null : toggleCompleted(todoNumber))} type="button" className={style.todoCheckboxFill} />
    </div>
  );
}
