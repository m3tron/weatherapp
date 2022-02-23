const CurrentWeather = ({ weatherData }) => {
  return (
    <div className="text-center text-white">
      <p>Currently it is: {weatherData.main.temp}C</p>
      <p>Feels like {weatherData.main.feels_like}C</p>
    </div>
  );
};

export default CurrentWeather;
