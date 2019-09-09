import React, { Component } from "react";
import Data from './data.js';
import Continents from './continents';
import CountryDetails from './countryDetails';

class pickCountry extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentContinent: 'Europe',
      currentCountry: '',
      showDetails: false,
      data: null,
      treatedData: null,
    };
    this.callApi()
  }

  callApi() {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then(data => this.setState( {data}),this.treatData())
  }

  treatData() {
    this.setState({treatedData:this.state.data});
  }

  changeContinent = (continent) => {
    this.setState({
      currentContinent: continent,
      currentCountry: ''
    })
  }
 
  changeCountry = (country) => {
    this.setState({
      currentCountry: country,
      showDetails: true
    })
  }

  showList = () => {
    this.setState({
      showDetails: false
    })
  }

  render() {
    if(!this.state.showDetails) {
      return(
        <div>
          <Continents currentContinent={this.state.currentContinent} changeContinent={this.changeContinent}/>
          <Data 
            data={this.state.data} 
            currentCountry={this.state.currentCountry} 
            currentContinent={this.state.currentContinent} 
            changeCountry={this.changeCountry} />
        </div>
      )
    }else{
      const dataCountry = this.state.data.filter(selectedCountry => selectedCountry.name === this.state.currentCountry)
      return(
        <div>
          <CountryDetails showList={this.showList} data={dataCountry[0]}/>
        </div>
      )
    }
  }
}
export default pickCountry;