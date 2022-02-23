import { useState, useEffect } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";

const Weather = ({ location }) => {
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    const getWeather = async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
      );
      setWeatherData(data);
    };

    if (location.lat) getWeather();
  }, [location]);

  return (
    <div>{weatherData && <CurrentWeather weatherData={weatherData} />}</div>
  );
};

export default Weather;
