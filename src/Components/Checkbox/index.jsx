import React from 'react';
import style from './style.module.css';

export default function c() {
  return (
    <div className={style.todoCheckbox}>
      <div className={style.todoCheckboxFill} />
    </div>
  );
}
