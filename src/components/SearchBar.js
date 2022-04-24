import axios from "axios";
import { useState } from "react";

const SearchBar = ({ setLocation, setLoading }) => {
  const [search, setSearch] = useState("");
  const [locationList, setLocationList] = useState([]);

  const searchCity = async e => {
    e.preventDefault();
    const { data } = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${process.env.REACT_APP_WEATHER_API}`
    );
    setSearch("");
    setLocationList(data);
  };

  const handleCitySelection = location => {
    setLoading(true);
    setLocation({
      name: location.name,
      state: location.state,
      country: location.country,
      lat: location.lat,
      lon: location.lon,
    });
  };

  return (
    <div className="flex flex-col w-screen p-4 md:w-[768px] md:mx-auto">
      <form type="submit" onSubmit={searchCity}>
        <input
          className="w-4/5 text-center py-2 float-left rounded-l-lg"
          type="text"
          placeholder="Enter City Name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="w-1/5 float-right py-2 bg-indigo-900/80 text-white rounded-r-lg"
        >
          <i className="fa-solid fa-magnifying-glass" />
        </button>
      </form>

      {locationList && (
        <ul className="mt-4">
          {locationList.map(location => (
            <li
              key={locationList.indexOf(location)}
              className="text-center cursor-pointer p-2 my-2 bg-black/30 rounded-lg text-white"
              onClick={() => handleCitySelection(location)}
            >
              {location.name}
              {location.state && `, ${location.state}`}
              {location.country && `, ${location.country}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
