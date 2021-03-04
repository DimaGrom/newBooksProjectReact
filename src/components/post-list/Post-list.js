import React from 'react';
import PostListItem from '../post-list-item/Post-list-item.js';
import s from './post-list.module.css';

const PostList = ({ posts, deleteItem, onToggleImportant, onToggleLiked }) => {
	// debugger
	const elements = posts.map(items => {
		const { id, ...itemsProps } = items;
		// debugger
		return (
			<PostListItem
				key={id} 
				{...itemsProps}
				deleteItem={ () => deleteItem(id) }
				onToggleImportant={ () => onToggleImportant(id) }
				onToggleLiked={ () => onToggleLiked(id) }
			/>
		)
	})

	return (
		<div className="post_list">
			{ elements}
		</div>
	);
}

export default PostList;