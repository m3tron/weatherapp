const CurrentWeather = ({ weatherData }) => {
  const date = new Date(Date(weatherData.dt + weatherData.timezone));

  return (
    <div className="text-white flex flex-col p-4">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <span>
            {date.toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span>
            {date.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </span>
        </div>
        <span className="text-6xl flex justify-between items-center">
          {weatherData.main.temp.toFixed(1)}C
          <img
            src={`${process.env.REACT_APP_ICON_URL}${weatherData.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        </span>
        <div className="flex justify-between">
          <span>
            {weatherData.main.temp_max.toFixed(1)} /{" "}
            {weatherData.main.temp_min.toFixed(1)}
          </span>
          <span className="capitalize">
            {weatherData.weather[0].description}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Feels like {weatherData.main.feels_like.toFixed(1)}C</span>
          <span>{weatherData.name}</span>
        </div>
        <span>Humidity {weatherData.main.humidity}%</span>
        <span>Pressure {weatherData.main.pressure / 10} kPa</span>
      </div>
    </div>
  );
};

export default CurrentWeather;
