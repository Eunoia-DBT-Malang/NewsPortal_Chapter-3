import { useState, useEffect } from 'react';

const WEATHER_API_KEY = 'e90e010c5e156112a0a925b04ea4a10e';
const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=Malang&appid=${WEATHER_API_KEY}`;

function Weather() {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    fetch(WEATHER_API_URL)
      .then(response => response.json())
      .then(data => setTemperature(data.main.temp - 273.15));
  }, []);

  return (
    <div className='flex gap-1'>
        <h1 className='text-clip overflow-x-hidden w-[22px]'>{temperature ? `${temperature}` : 'Loading...'}</h1>
        <h2> °C</h2>
    </div>
  );
}

export default Weather;
