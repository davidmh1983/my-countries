import React, { Component } from "react";
import './countryDetails.scss';

class countryDetails extends Component {

  render(){
    return (
      <div className="details">
        <div className="details__back" onClick={this.props.showList}>Back to List</div>
        <div className="details__data">
          <div className="details__data__text">
            <p><label className="black">Nombre: </label><label>{this.props.data.name}</label></p>
            <p><label className="black">Capital: </label><label> {this.props.data.capital}</label></p>
            <p><label className="black">Nombre Nativo: </label><label> {this.props.data.nativeName}</label></p>
            <p><label className="black">Poblacion: </label><label> {this.props.data.population.toLocaleString('es')}</label></p>
            <p><label className="black">Tamaño: </label><label> {this.props.data.area.toLocaleString('es')} km2</label></p>
            <p><label className="black">Región: </label><label> {this.props.data.region}</label></p>
            <p><label className="black">Subregión: </label><label> {this.props.data.subregion}</label></p>
          </div>
          <img src={this.props.data.flag} alt=""/>
        </div>
      </div>
    )
  }
}

export default countryDetails;