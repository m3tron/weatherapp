import { useState, useEffect } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import HourlyWeather from "./HourlyWeather";
import DailyWeather from "./DailyWeather";

const Weather = ({ location }) => {
  const [weatherData, setWeatherData] = useState();
  const [forecastData, setForecastData] = useState();

  useEffect(() => {
    const getWeather = async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
      );
      setWeatherData(data);
    };

    const getForecast = async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&exclude=current,minutely&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
      );
      setForecastData(data);
    };

    if (location.lat) {
      getWeather();
      getForecast();
    }
  }, [location]);

  return (
    <>
      <div>{weatherData && <CurrentWeather weatherData={weatherData} />}</div>
      <div>
        {forecastData && <HourlyWeather hourlyData={forecastData.hourly} />}
      </div>
      <div>
        {forecastData && <DailyWeather dailyData={forecastData.daily} />}
      </div>
    </>
  );
};

export default Weather;
