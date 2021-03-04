import React from 'react';
import { Button } from 'reactstrap';
import s from './Post-status-filter.module.css';

class PostStatusFilter extends React.Component {

	constructor(props) {
		super(props);
		this.buttons = [
			{name: 'all', lable: 'Все'},
			{name: 'like', lable: 'Понравилось'}
		];
	}
  	render() {
  		const button = this.buttons.map( ({name, lable}) => {
				const activ = this.props.filter === name;				
				const a = s.button + ' ' + s.activ
				const b = s.button + ' ' + s.not_activ
				const clazz = activ ? a : b
	  			return (
	  				<button 
	  					className={ clazz }
	  					key={name} 
	  					onClick={ () => this.props.onFilterSelect(name) }
	  				>
	  					{lable}
	  				</button>
	  			)
	  		}
  		 )
	  	return (
		    <div className={s.post_status_filter} >
		        { button }
		    </div>
		  )
  	}
}

export default PostStatusFilter;