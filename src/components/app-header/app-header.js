import React from 'react';
import s from './app-header.module.css';

const AppHeader = (props) => {
	// debugger
	const { allPost, liked } = props;

  return (
    <div className={s.app_header}>
      <h1 className={s.h1}>Дмитрий Гром</h1>
      <h2 className={s.h2}>{ allPost} записей, из них понравилось {liked}</h2>
    </div>
  )
}

export default AppHeader;