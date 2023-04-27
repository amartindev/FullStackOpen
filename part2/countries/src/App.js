import React, { useState, useEffect } from 'react'
import Countries from './components/countries'
import axios from 'axios'

const App = () => {
  const [countries, setCountry] = useState([])
  const [findCountry, setFindCountry] =useState('')

  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      setCountry(response.data)
    })
  }, [])

  const findedCountry = countries.filter(id => id.name.common.toLowerCase().includes(findCountry.toLowerCase()));
  const search = findCountry ? findedCountry : [];

  const findCountryChange =(event) => {
    setFindCountry(event.target.value)
  }

  return (
    <div>
      <h2>Countries</h2>
      <div>
        Search: <input value={findCountry} onChange={findCountryChange}/>
      </div>
      <Countries  countries={search} />
    </div>
  )
}

export default App