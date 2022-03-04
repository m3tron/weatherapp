const CurrentWeather = ({ weatherData }) => {
  const date = new Date(Date(weatherData.dt + weatherData.timezone));
  const localDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  const localTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <div className="text-white flex flex-col p-4">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <span>{localDate}</span>
          <span>{localTime}</span>
        </div>
        <span className="text-6xl flex justify-between items-center">
          {weatherData.main.temp.toFixed(1)}&#x2103;
          <img
            src={`${process.env.REACT_APP_ICON_URL}${weatherData.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        </span>
        <div className="flex justify-between">
          <span>
            Feels like {weatherData.main.feels_like.toFixed(1)}&#x2103;
          </span>
          <span className="capitalize">
            {weatherData.weather[0].description}
          </span>
        </div>
        <div className="flex justify-between">
          <span>
            &#8593;{weatherData.main.temp_max.toFixed(1)}&#x2103; / &#8595;
            {weatherData.main.temp_min.toFixed(1)}&#x2103;
          </span>
          <span>{weatherData.name}</span>
        </div>
      </div>
      <div className="flex flex-col mt-12">
        <span className="underline underline-offset-2 mb-2 text-center">
          More Details
        </span>
        <span>Humidity: {weatherData.main.humidity} %</span>
        <span>Pressure: {weatherData.main.pressure / 10} kPa</span>
        <span>
          Wind speed: {(weatherData.wind.speed * (3600 / 1000)).toFixed(1)} km/h
        </span>
        <span>
          Wind gust: {(weatherData.wind.gust * (3600 / 1000)).toFixed(1)} km/h
        </span>
      </div>
    </div>
  );
};

export default CurrentWeather;
