import React, { Component } from "react";
import './select.scss';

class select extends Component {

  constructor(props) {
    super(props);
    this.state = {
      option: ''
    }
  };

  updateOption=(e)=> {
    this.setState({
      option: e.target.value
    })
    this.props.sortData(e.target.value)
  }

  render() {
    return(
      <div className="select">
        <label>{this.props.text}</label>
        <select onChange={this.updateOption} value={this.state.option}>
        {
            this.props.sortOptions.map((options) => {
                return(
                    <option value={options}>{options}</option>
                )
            })
        }
        </select>
      </div>
      
    )
  }
}
export default select;