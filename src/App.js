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
import Landing from "./components/Landing";

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

  // const searchComponent = (
  //   <div className="h-screen flex flex-col">
  //     <SearchBar setLocation={setLocation} setLoading={setLoading} />

  //     <div className="text-white text-center w-screen md:max-w-[768px] md:mx-auto">
  //       <div className="underline mt-4 underline-offset-4">
  //         Favorite Locations
  //       </div>
  //       {favoriteLocations.map(favoriteLocation => (
  //         <div
  //           key={favoriteLocations.indexOf(favoriteLocation)}
  //           className="cursor-pointer p-2 my-2 mx-4 bg-black/30 rounded-lg"
  //           onClick={() => {
  //             setLocation(favoriteLocation);
  //           }}
  //         >
  //           {`${favoriteLocation.name}, ${favoriteLocation.state}, ${favoriteLocation.country}`}
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

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
    <>
      {loading ? (
        <Loader />
      ) : !location ? (
        <Landing
          setLocation={setLocation}
          favoriteLocations={favoriteLocations}
          setLoading={setLoading}
        />
      ) : (
        weatherComponent
      )}
    </>
  );
};

export default App;
