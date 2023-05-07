import React from 'react';
import Show from './show';

const Countries = ({ countries, selectedCountry, onShowCountry }) => {

    if (selectedCountry) {
        return <Show country={selectedCountry} />;
    } else if (countries.length === 1) {
        return <Show country={countries[0]} />;
    } else if (countries.length > 10 && countries.length < 250) {
        return (
            <div>
            <p>Too many matches, specify another filter</p>
            </div>
        );  
    } else if (countries.length < 10) {
        return (
            <ul>
            {countries.map((country) => (
                <li key={country.name.common}>
                {country.name.common}
                <button onClick={() => onShowCountry(country)}>show</button>
                </li>
            ))}
            </ul>
        );
    }
};

export default Countries;