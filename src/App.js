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
    <div className="bg-slate-700 pb-4">
      <Weather location={!location ? defaultLocation : location} />
    </div>
  );
};

export default App;
