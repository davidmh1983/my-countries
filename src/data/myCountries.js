class myCountries {
  static getAllCountries() {
    return fetch("https://restcountries.eu/rest/v2/regionalbloc/eu")
    .then(response => response.json())
    .then(return data)
  }
    
  }
}

export default myCountries;
