import { useState, useEffect } from "react";

function Weather() {
  const [location, setLocation] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const WEATHER_API_KEY = "e90e010c5e156112a0a925b04ea4a10e";

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Panggil API GeoLocation untuk mendapatkan kota saat ini
        fetch(
          `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${WEATHER_API_KEY}`
        )
          .then((response) => response.json())
          .then((data) => {
            setLocation(data[0].name);

            // Panggil API cuaca untuk mendapatkan suhu saat ini
            fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${data[0].name}&appid=${WEATHER_API_KEY}`
            )
              .then((response) => response.json())
              .then((data) => setTemperature(data.main.temp - 273.15));
          });
      });
    } else {
      setLocation("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="flex gap-1">
      <h1>{location}</h1>
      <div className="mx-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-cloud"
          viewBox="0 0 16 16"
        >
          <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
        </svg>
      </div>
      <h1 className="text-clip overflow-x-hidden w-[21.8px]">
        {temperature ? `${temperature}` : "Loading..."}
      </h1>
      <h2> °C</h2>
    </div>
  );
}

export default Weather;
