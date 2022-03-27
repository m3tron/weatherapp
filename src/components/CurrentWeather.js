import { setDefault } from "../storage";

const CurrentWeather = ({ weatherData, setDefaultLocation }) => {
  const date = new Date(weatherData.dt * 1000);

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

  const addFavorite = () => {
    console.log("favorited");
  };

  const handleDefault = () => {
    setDefault({
      lat: weatherData.coord.lat,
      lon: weatherData.coord.lon,
      name: weatherData.name,
      country: weatherData.sys.country,
    });
    setDefaultLocation({
      lat: weatherData.coord.lat,
      lon: weatherData.coord.lon,
      name: weatherData.name,
      country: weatherData.sys.country,
    });
  };

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
            <i className="fa-solid fa-arrow-up mr-1" />
            {weatherData.main.temp_max.toFixed(1)}&#x2103; /{" "}
            <i className="fa-solid fa-arrow-down mr-1" />
            {weatherData.main.temp_min.toFixed(1)}&#x2103;
          </span>
          <span className="text-right">
            {weatherData.name}
            <div>
              <span className="text-[0.6rem]">Set to Default</span>
              <i
                className="fa-solid fa-star text-yellow-500 text-xl p-2 cursor-pointer"
                onClick={handleDefault}
              />
            </div>
            <div>
              <span className="text-[0.6rem]">Add to Favorites</span>
              <i
                className="fa-solid fa-heart text-red-500 text-xl p-2 cursor-pointer"
                onClick={addFavorite}
              />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
