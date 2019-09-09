import React, { Component } from "react";
import "./continents.scss";

class continents extends Component {

  handleEvent(e){
    if(this.props.currentContinent !== e.target.id){
      this.props.changeContinent(e.target.id);
    }
  }

  render() {
    const continents = ['Europe','Asia','Polar','Africa','Americas','Oceania']
    return(
      <ul className="continents">
        {
          continents.map((continent) => { 
            let classe = continent !== this.props.currentContinent ? '' : 'continents__item--selected';
            return( <li className={'continents__item ' + classe} onClick={this.handleEvent.bind(this)} id={continent} key={continent}>{continent}</li> )
          })
        }
      </ul>
    );
  }
}
export default continents;