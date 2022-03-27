import axios from "axios";
import { useState } from "react";

const SearchBar = ({ setLocation, favorites }) => {
  const [search, setSearch] = useState("");
  const [locationList, setLocationList] = useState([]);
  const [open, setOpen] = useState(false);

  const searchCity = async e => {
    e.preventDefault();
    const { data } = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${process.env.REACT_APP_WEATHER_API}`
    );
    console.log(data);
    setSearch("");
    setLocationList(data);
  };

  return (
    <form
      className="flex-col items-center w-auto p-4 md:w-[768px] md:mx-auto"
      type="submit"
      onSubmit={searchCity}
    >
      <input
        className="w-full rounded-xl text-center py-2"
        type="text"
        placeholder="Enter city name"
        value={search}
        onChange={e => setSearch(e.target.value)}
        onFocus={() => setOpen(true)}
        onBlur={() => {
          // setOpen(false);
          // setLocationList();
        }}
      />
      {open && locationList && (
        <div
          className={`flex flex-col items-center bg-white rounded-xl overflow-hidden transition-all ease-in-out duration-500 ${
            open ? undefined : " h-0"
          }`}
        >
          {locationList.map(location => (
            <span
              key={`${location.lat},${location.lon}`}
              className="hover:bg-slate-400 w-full text-center cursor-pointer"
              onClick={e => {
                e.preventDefault();
                setLocation({ lat: location.lat, lon: location.lon });
                setOpen(false);
                setLocationList([]);
              }}
            >
              {location.name}, {location.state && `${location.state}, `}
              {location.country}
            </span>
          ))}
        </div>
      )}
    </form>
  );
};

export default SearchBar;
