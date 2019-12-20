import React from 'react';

import './toDoListItem.css';

export default class ToDoListItem extends React.Component {

    // constructor () {
    //     super ();

    //     this.state = {
    //         done: false;
    //     }
    // }

    //kam parzapes`

    

   
    render () {
        const { label,
                onDeleted,
                onToggleImportant,
                onToggleDone,
                done,important } = this.props;

        let classNames = 'todo-list-item';
        if(done) {
            classNames += ' done';    //henc span-i className-a darnum 'done'
                       // bar@, ashxatuma css@ u text decoration line-through
        };

        if (important) {
            classNames += ' important';
        }
        
            return (
            <span className = {classNames}> 
                <span 
                    className = 'todo-list-item-label'
                    onClick = {onToggleDone }>
                    { label }
                </span>
        
                <button 
                    type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick = {onToggleImportant}>
                    <i className="fa fa-exclamation" />
                </button>
        
                <button 
                    type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick = {onDeleted}>
                    <i className="fa fa-trash-o"/>
                </button>
                
            </span>
           
            );
    }
}

    // kam el argumenti mej karox enq grel uxxaki (props), isk spani mej` 
    // {props.label},bayc ogtvum enq destrukturizaciai metodic



