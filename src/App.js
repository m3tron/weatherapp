import { useEffect, useState } from "react";
import axios from "axios";
import CurrentWeather from "./components/CurrentWeather";

const App = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [metric, setMetric] = useState(true);

  const { REACT_APP_WEATHER_API } = process.env;

  const getLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        console.log(position);
      });
    } else {
      console.log("not permitted");
    }
  };

  const getWeather = async () => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${REACT_APP_WEATHER_API}`
    );
    setWeatherData(data);
  };

  useEffect(() => {
    getLocation();
    getWeather();
  }, []);

  return (
    <div>
      {!latitude ? <>Loading</> : <CurrentWeather weatherData={weatherData} />}
    </div>
  );
};

export default App;
