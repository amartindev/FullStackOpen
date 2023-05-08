import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({capital}) => {
    const [data, setData] = useState([]);
    const api_key = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, [api_key, capital]);

      return (
        <div>
            <p><b>Temperature: </b>{data.current.temperature}° Celsius</p>
            <img src={data.current.weather_icons} alt='icon_weather' />
            <p><b>Wind:</b> {data.current.wind_speed} mph direction {data.current.wind_dir}</p>
        </div>
      )
}

export default Weather;