import { useEffect, useState } from "react";
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
import SearchBar from "./components/SearchBar";

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

  //const [metric, setMetric] = useState(true);

  const defaultLocation = { lat: 43.65107, lon: -79.347015 };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  }, []);

  return (
    <div className="bg-gradient-to-br bg-fixed from-sky-500 to-indigo-500 pb-4">
      <SearchBar setLocation={setLocation} />
      <Weather location={!location ? defaultLocation : location} />
    </div>
  );
};

export default App;
