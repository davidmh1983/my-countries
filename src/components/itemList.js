import React, { Component } from "react";
import Item from './item.js';
import './itemList.scss';

class itemList extends Component {
  render() {
    return (
      <div className="itemList">
        {
          this.props.data.map((country) => { 
            return ( <Item changeCountry={this.props.changeCountry} key={country.name} data={country}/> )
          })
        }
      </div>
    );
  }
}
export default itemList;