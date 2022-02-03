import { useEffect, useState } from "react";
import axios from "axios";
import CurrentWeather from "./components/CurrentWeather";

const App = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [metric, setMetric] = useState(true);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        console.log(position.coords.latitude, position.coords.longitude);
      });
    } else {
      console.log("not permitted");
    }
  };

  const getWeather = async () => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=`
    );
    setWeatherData(data);
  };

  useEffect(() => {
    getLocation();
    getWeather();
  }, []);

  return (
    <div>
      <CurrentWeather weatherData={weatherData} />
    </div>
  );
};

export default App;
