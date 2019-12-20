import React from 'react';

import ToDoList from '../toDoList/ToDoList';
import AppHeader from '../appHeader/AppHeader';
import SearchPannel from '../searchPannel/SearchPannel';
import ItemStatusFilter from '../itemStatusFilter/ItemStatusFilter';
import ItemAddForm from '../itemAddForm/ItemAddForm';

import './app.css';

export default class App extends React.Component  {

    maxId = 100;

    state = {
      todoData: [
        this.createToDoItem('Drink Coffee'),
        this.createToDoItem('Make Awesome App'),
        this.createToDoItem('Have a lunch')
      ],
      term: '',
      filter: 'active'  //active,all,done
    };
    
    createToDoItem (label) {
      
      return {
        label,
        important: false,
        done: false,
        id: this.maxId++
      }
    }
    deleteItem = (id) => {
      this.setState(({ todoData }) => {
        const idx = todoData.findIndex((el) => el.id === id);
  
        const newArray = [
          ...todoData.slice(0, idx),
          ...todoData.slice(idx + 1)
        ];
  
        return {
          todoData: newArray
        };
      });
    };
  
    addItem = (text) => {
      // generate id ?
      const newItem = this.createToDoItem(text);
      this.setState(({ todoData }) => {
        const newArr = [
          ...todoData,
          newItem
        ];

        return {
          todoData: newArr
        };
      });
  
    };
    toggleProperty(arr, id, propName) {
      const idx = arr.findIndex((el) => el.id === id);
      const oldItem = arr[idx];
      const newItem = {...oldItem, [propName]: !oldItem[propName]}

      return [
        ...arr.slice(0,idx),
        newItem,
        ...arr.slice(idx+1)
      ]
  }
  
    onToggleImportant = (id) => {
      this.setState(({ todoData }) => {
        return {
          todoData: this.toggleProperty(todoData,id,'important')
        }
      })    
    }  

    
    onToggleDone = (id) => {
     this.setState(({ todoData }) => {
       return {
         todoData: this.toggleProperty(todoData,id,'done')
       }
     })
    }  
    
    onSearchChange = (term) => {
      this.setState({ term })
    }

    onFilterChange = (filter) => {
      this.setState({ filter })
    } 

    search (items,term) {
      if (term.length === 0) {
        return items;

      }
      return items.filter((item) => {
        return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
      })
    }



    toFilter (items,filter) {
      switch (filter) {
        case 'all':
          return items;
        case 'active':
          return items.filter((item) => !item.done);
        case 'done':
          return items.filter((item) => item.done);
        default:
          return items
      }
    }

    render() {
      const {todoData, term,filter  } =this.state;

      const visibleItems = this.toFilter(this.search(todoData,term),filter)
      const doneCount = todoData
                        .filter((el) => el.done)
                        .length;

      const todoCount = todoData.length - doneCount;

      return (
        <div className="todo-app">
          <AppHeader toDo={todoCount} done={doneCount} />
          <div className="top-panel d-flex">
            <SearchPannel 
            onSearchChange = {this.onSearchChange}/>
            <ItemStatusFilter 
            filter = {filter}
            onFilterChange =  {this.onFilterChange} />
          </div>
  
          <ToDoList
            todos={visibleItems}
            onDeleted={ this.deleteItem }
            onToggleDone = {this.onToggleDone}
            onToggleImportant = {this.onToggleImportant}/>
  
          <ItemAddForm onItemAdded={this.addItem}/>
        </div>
      );
    }
  };
    


