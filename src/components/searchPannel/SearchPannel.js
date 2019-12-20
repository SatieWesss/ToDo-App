import React from 'react';

import './searchPannel.css';

export default class SearchPannel extends React.Component {

        state = {
            term: ''
        }
   
        onSearchChange = (event) => {
            const term = event.target.value;
            this.setState({ term })
            this.props.onSearchChange(term)
        }
    render (){
        return <input 
        placeholder = 'Type here to search' 
        className="form-control search-input"
        value = {this.state.term}
        onChange = {this.onSearchChange}
        />
    }
  
}

