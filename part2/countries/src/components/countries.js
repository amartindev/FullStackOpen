import React from 'react'

const Countries = ({ countries }) => {
    if(countries.length === 1){
        let country=countries[0];
        return (
            <div>
                <h2>{country.name.common}</h2>
                <p>Capital: {country.capital} </p>
                <p>Population: {country.population} </p>
                <h3>Languages</h3>
                <ul>
                    {Object.values(country.languages).map(item => (
                        <li key={item}> {item}</li>
                    ))}
                </ul>
                <img src={country.flags.png} alt='flag' />
            </div>
        )
    }else if(countries.length > 10){
        return (
        <div>
            <p>Too many matches, specify another filter</p>
        </div>
        )
    }else {
        return (
            <ul>
            {countries.map(country => (
                <li key={country.name.common}>{country.name.common}</li>
            ))}
            </ul>
        )
    }
}

export default Countries