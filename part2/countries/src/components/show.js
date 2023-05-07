import React from "react";

const Show = ({country}) => {
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
}

export default Show