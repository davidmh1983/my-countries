import React, { Component } from "react";
import Select from './select.js';

import './filter.scss';
class filter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  };


  updateInput=(e)=> {
    this.setState({
      input: e.target.value
    })
    this.props.filterData(e.target.value)
  }

  render() {
    return(
      <div className="filter">
        <Select text="Filtrar por " sortData={this.props.selectedOption} sortOptions={['name', 'capital']} />
        <input onChange={this.updateInput} value={this.state.input} placeholder="Por ejemplo: Spain o Madrid"></input>
      </div>
      
    )
  }
}
export default filter;