import React, { Component } from "react";
import ItemList from './itemList.js';
import Filter from './filter.js';
import Select from './select.js';
import './data.scss';
class itemList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      filter: '',
      sortOption: 'name',
      treatedData: null,
      selectedOption: 'name'
    }
  };

  filterData=(filterName)=> {
    this.setState({
      filter: filterName
    })
    this.treatedData();
  }

  sortData=(sortOption)=> {
    this.setState({
      sortOption
    })
    this.treatedData()
  }
  
  treatedData=()=>{
    const continentCountries = this.props.data.filter(country => country.region === this.props.currentContinent)
    let filteredData = continentCountries;
    if(this.state.filter !== ''){
      filteredData = continentCountries.filter(filtered => filtered[this.state.selectedOption].includes(this.state.filter))
    }
    return filteredData.sort((a, b) => (a[this.state.sortOption] > b[this.state.sortOption]) ? 1 : -1)
  }
  selectedOption=(option)=> {
    this.setState({
      selectedOption: option
    })
  }

  render() { 
    if(!this.props.data){
      return ('CARGANDO PAÍSES ... ')
    }
    if(this.props.data){
      let treatedData = this.treatedData(); 
      return(
        <>
          <div className="options">
            <Filter filterData={this.filterData} selectedOption={this.selectedOption}/>
            <Select text="Ordenar por " sortData={this.sortData} sortOptions={['name', 'population', 'area']} />
          </div>
          <ItemList data={treatedData} changeCountry={this.props.changeCountry}/>
        </>
      );
    }
  }
}
export default itemList;