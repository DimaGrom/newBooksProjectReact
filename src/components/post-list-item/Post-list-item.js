import React from 'react';
import './Post-list-item.css';


class PostListItem extends React.Component {

  render() {
    const { label, deleteItem, onToggleImportant, onToggleLiked, important, like } = this.props;
    // debugger
    let className = 'post-list-item';

      if(important) {
        className += ' important';
      }

      if(like) {
        className += ' like';
      }

    return (
      <div className={ className }>
        <span
          onClick={ () => onToggleImportant() }
        >{ label }</span>
        <div className="post-list-item_icon">
          <button className="buttonFa"
            onClick={ onToggleLiked }
          >
            <i className="fa fa-star" aria-hidden="true"></i>
          </button>
          <button  className="buttonFa"
            onClick={ deleteItem }
          >
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
          <i className="fa fa-heart hart_params" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}


export default PostListItem;