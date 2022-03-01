const CurrentWeather = ({ weatherData }) => {
  console.log(weatherData);
  return (
    <div className="text-white flex flex-col p-4">
      <div className="flex flex-col">
        <span className="text-6xl flex justify-between items-center">
          {weatherData.main.temp.toFixed(1)}C
          <img
            src={`${process.env.REACT_APP_ICON_URL}${weatherData.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        </span>
        <span>
          {weatherData.main.temp_max.toFixed(1)} /{" "}
          {weatherData.main.temp_min.toFixed(1)}
        </span>
      </div>
      <div>
        <div>Feels like {weatherData.main.feels_like.toFixed(1)}C</div>
      </div>
    </div>
  );
};

export default CurrentWeather;
