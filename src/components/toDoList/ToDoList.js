import React from 'react';

import ToDoListItem from '../toDoListItem/ToDoListItem';
import './toDoList.css';

const ToDoList = ( {todos, onDeleted, onToggleImportant, onToggleDone} ) => {
    const elements = todos.map((item) => {
        return (
            // <li> <ToDoListItem  
            // label = {item.label}
            // important = {item.important} /></li>
            // kam uxxaki ogtvel vor uzum enq verrcnel items 
            // obyekti yuraqanchyur key iren hamarjeq value-ov ev tal 
            // ayn vorpes property ToDoItem tegin   
            
            <li key = {item.id}
             className = 'list-group-item'>
                <ToDoListItem {... item} 
                onDeleted = { () => onDeleted (item.id)}
                onToggleDone = {() => onToggleDone(item.id)}
                onToggleImportant = {() => onToggleImportant(item.id)} />
            </li>
        );
    })
    return (
        <ul className = 'list-group todo-list'>
            {elements} 
        </ul>
    );
}

export default ToDoList