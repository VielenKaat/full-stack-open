import { useState, useEffect } from "react";
import axios from "axios";
import "./flagstyles.css"

const CountrySearch = ({ data, search }) => {

  const countries = data.map((element) => {
    let country = {
      name: element.name.official,
      key: element.cca2,
      capital: element.capital,
      area: element.area,
      languages: element.languages,
      flag: element.flags.svg
    }

    return country
  })

  const filteredCountries = countries.filter((element) => {
    return element.name.toLowerCase().includes(search.toLowerCase())
  })


  // check if length of filitered countries is 1, less than 10 or more than 10
  const checkLength = () => {
    if (filteredCountries.length > 10) {
      return 'Too much countries, be more specific!'
    }

    if (filteredCountries.length !== 1) {
      return (
        <ul>
          {filteredCountries.map(element =>
            <li key={element.key}>
              {element.name}
            </li>
          )}
        </ul>
      )
    }

    // if there is only 1 filteredCountries, extract it for easier use later
    const filteredCountry = filteredCountries.length === 1 ? filteredCountries[0] : undefined
    return (
      <div>
        captial: {filteredCountry.capital} <br />
        area: {filteredCountry.area}
        <div>
          <h2>Languages</h2>
          <ul>
            {Object.values(filteredCountry.languages).map((element, index) => {
              return (
                <li key={index}>
                  {element}
                </li>
              )
            })}
          </ul>
          <img src={filteredCountry.flag} />
        </div>
      </div>
    )

  }

  return (
    <div>
      <h2>array length: {filteredCountries.length}</h2>
      {checkLength()}
    </div>
  )
}
const App = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      // .get('https://restcountries.com/v3.1/all')
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setData(response.data)
      })
  }, [])

  const searchHandler = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      find countries: <input value={search} onChange={searchHandler} />
      <CountrySearch data={data} search={search} />

    </div>
  )
}

export default App;
