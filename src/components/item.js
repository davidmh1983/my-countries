import React, { Component } from "react";
import './item.scss';

class item extends Component {
  
  handleClick=()=>{
    this.props.changeCountry(this.props.data.name)
  }

  render() {
    return (  
      <div onClick={this.handleClick} className="item">
        <label>{this.props.data.name}</label>
        <img alt="" src={this.props.data.flag}></img>
      </div>
    )
  }
}
export default item;