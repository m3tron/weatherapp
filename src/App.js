import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getDefault, getFavorites } from "./storage";
import Loader from "./components/Loader";
import Menu from "./components/Menu";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const App = () => {
  const [location, setLocation] = useState();
  const [loading, setLoading] = useState(true);
  const [favoriteLocations, setFavoriteLocations] = useState(getFavorites);
  const [defaultLocation, setDefaultLocation] = useState(getDefault);

  //const [metric, setMetric] = useState(true);

  useEffect(() => {
    if (defaultLocation) setLocation(defaultLocation);
    setLoading(false);
  }, [defaultLocation]);

  useEffect(() => {
    if (location) setLoading(false);
  }, [location]);

  useEffect(() => {
    if (!favoriteLocations) setFavoriteLocations([]);
  }, [favoriteLocations]);

  // use to get user location
  // const getCurrentLocation = () => {
  //   navigator.geolocation.getCurrentPosition(position => {
  //     setLocation({
  //       lat: position.coords.latitude,
  //       lon: position.coords.longitude,
  //     });
  //   });
  // };

  const searchComponent = (
    <div className="h-screen flex">
      <SearchBar
        setLocation={setLocation}
        favoriteLocations={favoriteLocations}
        setLoading={setLoading}
      />
    </div>
  );

  const weatherComponent = (
    <>
      <Menu
        favoriteLocations={favoriteLocations}
        defaultLocation={defaultLocation}
        setLocation={setLocation}
        setLoading={setLoading}
        location={location}
      />
      <Weather
        location={location}
        defaultLocation={defaultLocation}
        setDefaultLocation={setDefaultLocation}
        favoriteLocations={favoriteLocations}
        setFavoriteLocations={setFavoriteLocations}
        loading={loading}
        setLoading={setLoading}
      />
    </>
  );

  return (
    <>{loading ? <Loader /> : !location ? searchComponent : weatherComponent}</>
  );
};

export default App;
