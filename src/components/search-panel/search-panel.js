import React from 'react';
import s from './search-panel.module.css';

class SearchPanel extends React.Component {


  render() {
  	return (
	    <input 
	    	className={s.search_panel}
			type="text"
			placeholder="Поиск по записи"
			onChange={(e) => this.props.onUpdateSearch(e.target.value)}
	    />
	  )
  }
}

export default SearchPanel;