import { useEffect, useState } from "react";
import Weather from "./components/Weather";

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
    <div className="bg-slate-700">
      <Weather location={!location ? defaultLocation : location} />
    </div>
  );
};

export default App;
