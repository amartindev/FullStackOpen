import React from "react";
import Weather from "./weather"

const Show = ({country}) => {
    return (
        <div>
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
            <div>
                <h3>Weather in {country.capital}</h3>
                <Weather capital={country.capital} />
            </div>
        </div>
    )
}

export default Show