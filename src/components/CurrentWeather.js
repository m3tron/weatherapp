import { useState, useEffect } from "react";
import { setDefault, setFavorites } from "../storage";

const CurrentWeather = ({
  weatherData,
  location,
  defaultLocation,
  setDefaultLocation,
  setFavoriteLocations,
  favoriteLocations,
}) => {
  const [isDefault, setIsDefault] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (
      defaultLocation.lat === location.lat &&
      defaultLocation.lon === location.lon
    )
      setIsDefault(true);

    if (
      favoriteLocations.find(
        favoriteLocation =>
          favoriteLocation.lon === location.lon &&
          favoriteLocation.lat === location.lat
      )
    )
      setIsFavorite(true);
  }, [defaultLocation, location, favoriteLocations]);

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

  const handleDefault = () => {
    setDefault(location);
    setDefaultLocation(location);
    setIsDefault(true);
  };

  const handleFavorite = () => {
    if (isFavorite) {
      setFavorites(
        favoriteLocations.filter(
          favoriteLocation =>
            favoriteLocation.lon !== location.lon &&
            favoriteLocation.lat !== location.lat
        )
      );
      setFavoriteLocations(
        favoriteLocations.filter(
          favoriteLocation =>
            favoriteLocation.lon !== location.lon &&
            favoriteLocation.lat !== location.lat
        )
      );
      setIsFavorite(false);
    } else {
      setFavorites([...favoriteLocations, location]);
      setFavoriteLocations([...favoriteLocations, location]);
      setIsFavorite(true);
    }
  };

  return (
    <div className="text-white flex flex-col p-4 pt-8">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <span>{localDate}</span>
          <span>{localTime}</span>
        </div>
        <span className="text-6xl flex justify-between items-center">
          {weatherData.main.temp.toFixed(1)}&#x2103;
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
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
            {!isDefault && (
              <div>
                <i
                  className="fa-solid fa-star text-yellow-500 text-xl p-2 cursor-pointer"
                  onClick={handleDefault}
                />
                <span className="text-[0.6rem] align-middle">
                  Set to Default
                </span>
              </div>
            )}
          </span>
          <span className="text-right">
            {weatherData.name}
            <div>
              <span className="text-[0.6rem] align-middle">
                {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
              </span>
              <i
                className={`fa-solid fa-heart text-xl p-2 cursor-pointer ${
                  isFavorite ? "text-red-500" : "text-white"
                }`}
                onClick={handleFavorite}
              />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
