import React from 'react';
import  s from './post-add-form.module.css';

const PostAddForm = ({addItem, text, changeText}) => {
  return (
    <form className={s.pist_add_form} >
      <input 
        type="text"
        placeholder="О чём вы думаете сейчас?"
        className={s.search_panel}
        value={ text }
        onChange={ (e) => changeText(e) }
      />
      <button
        type="submit"
        className={s.button}
        onClick={ (e) => addItem(e, text) }
      >
        Добавить
      </button>
    </form>
  )
}

export default PostAddForm;