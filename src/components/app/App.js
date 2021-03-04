import React from 'react';
import AppHeader from '../app-header/app-header.js';
import SearchPanel from '../search-panel/search-panel.js';
import PostStatusFilter from '../post-status-filter/Post-status-filter.js';
import PostList from '../post-list/Post-list.js';
import PostAddForm from '../post-add-form/Post-add-form.js';
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, label: "Going to learn React", like: false, important: true },
        { id: 2, label: "Thet is so good", like: false, important: false },
        { id: 3, label: "I need abreak...", like: false, important: false }
      ],
      text: '',
      term: '',
      filter: 'all'
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.changeText = this.changeText.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);

    this.maxId = 4;
  }

  // Меняет цвет кнопки при нажатие
  onFilterSelect(names) {
    this.setState({
      filter: names
    })
  }

  // Меняем important значение на потоивоположное 
  onToggleImportant = (id) => {
    this.setState({
      ...this.state,
        data: this.state.data.map( m => {
          if ( m.id === id ) {
            return { ...m, important: !m.important }
          } return m
        } )
    })
  }

  // Меняем like значение на потоивоположное 
  // onToggleLiked = (id) => {
  //   this.setState( {
  //     ...this.state,
  //       data: this.state.data.map( m => {
  //         if ( m.id === id ) {
  //           return { ...m, like: !m.like }
  //         } return m
  //       } )
  //   } )
  // }

  onToggleLiked = (id) => {
    this.setState(({data}) => {
      const newData = [ ...data ].map( m => {
        if ( m.id === id ) {
          return { ...m, like: !m.like }
        } return m
      } )
      return {
        data: newData
      }
     }, () => console.log(this.state.data))
  }

  // Изменяем текст ввода  
  changeText = (e) => {
    this.setState({
      ...this.state,
      text: e.target.value
    })
  }

  // удаляем пост
  deleteItem = (id) => {
    this.setState( {
      ...this.state,
        data: this.state.data.filter( f => f.id !== id )
    } ) 
  }

  // добавляем пост
  addItem = (e, data) => {
    console.log(data);
    e.preventDefault();
    if ( this.state.text !== '' ) {
      this.setState({
        ...this.state,
          data: [ ...this.state.data, {
            id: this.maxId++,
            label: data,
            important: false
          } ],
          text: ''
      })
    } 
  }

  // фильтруем по нажатию кнопки
  filterPost(items, filter) {
    if(filter === 'like') {
      return items.filter(f => f.like)
    } else {
      return items
    }
  }

  //фильтруем по написанию в input
  cearchPost(items, term) {
    if(term.length === 0) {
      return items
    }

    return items.filter( (item) => {
      return item.label.indexOf(term) > -1
    } )
  }

  // Принимает из поля ввода из SearchPanel
  onUpdateSearch(term) {
    this.setState({term});
  }

  render() {
    
    const { data, text, term, filter } = this.state;

    // количество постов
    const allPost = data.length;
    // количество лайков
    const liked = data.filter( el => el.like === true ).length

    console.log('allPost - ',  allPost,'liked - ', liked);

    const visiblePost = this.filterPost(this.cearchPost(data, term), filter);

    const { deleteItem, addItem, changeText, onToggleLiked, onToggleImportant } = this;

    return (
      <div className="body">
        <div className="app container mt-50">
          <AppHeader liked={ liked } allPost={ allPost } />
          <div className="app_search_panel">
            <SearchPanel onUpdateSearch={ this.onUpdateSearch } />
            <PostStatusFilter 
              filter={filter} 
              onFilterSelect={this.onFilterSelect}
            />
          </div>
          <PostList
            posts={visiblePost}
            deleteItem={ deleteItem }
            onToggleLiked={ onToggleLiked }
            onToggleImportant={ onToggleImportant }
          />
          <PostAddForm 
            addItem={ addItem } 
            text={ text } 
            changeText={ changeText } 
          />
        </div>
      </div>
    )
  }
}

export default App;