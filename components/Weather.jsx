import { useState, useEffect } from 'react';

const WEATHER_API_KEY = 'e90e010c5e156112a0a925b04ea4a10e';
const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=Surakarta&appid=${WEATHER_API_KEY}`;

function Weather() {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    fetch(WEATHER_API_URL)
      .then(response => response.json())
      .then(data => setTemperature(data.main.temp));
  }, []);

  return (
    <div>
        <h1>{temperature ? `${temperature} K` : 'Loading...'}</h1>
    </div>
  );
}

export default Weather;
