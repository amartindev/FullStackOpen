import React, { useState, useEffect } from 'react';
import Countries from './components/countries';
import axios from 'axios';

const App = () => {
    const [countries, setCountries] = useState([]);
    const [findCountry, setFindCountry] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
      axios
            .get('https://restcountries.com/v3.1/all')
            .then(response => {
            setCountries(response.data);
          });
    }, []);

    const findedCountry = countries.filter(country =>
        country.name.common.toLowerCase().includes(findCountry.toLowerCase())
    );

    const handleFindCountryChange = (event) => {
        setFindCountry(event.target.value);
        setSelectedCountry(null);
    };

    const handleShowCountry = (country) => {
        setSelectedCountry(country);
        setFindCountry('');
    };

    return (
        <div>
            <h2>Countries</h2>
            <div>
                Search: <input value={findCountry} onChange={handleFindCountryChange} />
            </div>
        <Countries
            countries={findedCountry}
            selectedCountry={selectedCountry}
            onShowCountry={handleShowCountry}
        />
        </div>
    );
};

export default App;