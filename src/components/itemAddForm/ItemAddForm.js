import React from 'react';

import './itemAddForm.css';

export default class ItemAddForm extends React.Component {
    state = {
        label: ''
    }

    onLabelChange = event => {
        this.setState({ label: event.target.value })
    }
    onSubmit = ev => {
        ev.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({ label: '' });
    }
    render () {
        
        return (
            <form className = 'item-add-form d-flex'
                  onSubmit = {this.onSubmit} >
                <input
                    type="text"
                    className="form-control" 
                    onChange = {this.onLabelChange}
                    placeholder="What needs to be done?" 
                    value ={this.state.label}
                    required
                />
                <button 
                    className = 'btn btn-outline-secondary'>
                    Add item
                </button>
            </form>
        )
    }
}