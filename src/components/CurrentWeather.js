const CurrentWeather = ({ weatherData }) => {
  console.log(weatherData);
  return (
    <div>
      <p>Currently it is: {(weatherData.main.temp - 273.15).toFixed(2)}C</p>
      <p>Feels like {(weatherData.main.feels_like - 273.15).toFixed(2)}C</p>
    </div>
  );
};

export default CurrentWeather;
