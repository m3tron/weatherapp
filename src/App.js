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
import { getDefault } from "./storage";
import Loader from "./components/Loader";

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
  const [defaultLocation, setDefaultLocation] = useState({
    lat: 43.65107,
    lon: -79.347015,
  });
  const [loading, setLoading] = useState(true);

  //const [metric, setMetric] = useState(true);

  useEffect(() => {
    setLocation(getDefault);
    setLoading(false);
  }, []);

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
    <div className="h-screen flex flex-col justify-center">
      <SearchBar defaultLocation={defaultLocation} setLocation={setLocation} />
      <div className="text-center text-white">
        Search by entering the name of a city
      </div>
    </div>
  );

  const weatherComponent = (
    <>
      <SearchBar defaultLocation={defaultLocation} setLocation={setLocation} />
      <Weather location={location} />
    </>
  );

  return (
    <div className="bg-gradient-to-br bg-fixed from-sky-500 to-indigo-500 pb-4 ">
      {loading ? <Loader /> : !location ? searchComponent : weatherComponent}
    </div>
  );
};

export default App;
