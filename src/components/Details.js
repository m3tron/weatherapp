import Card from "./Card";

const Details = ({ weatherData }) => {
  return (
    <>
      <Card>
        <div className="flex justify-between sm:justify-evenly">
          <div className="flex flex-col space-y-4">
            <span>Humidity</span>
            <span>
              <i className="fa-solid fa-droplet text-5xl" />
            </span>
            <span>{weatherData.main.humidity}%</span>
          </div>
          <div className="flex flex-col space-y-4">
            <span>Wind</span>
            <span>
              <i className="fa-solid fa-wind text-5xl" />
            </span>
            <span className="flex">
              <span className="mr-1">
                {(weatherData.wind.speed * (3600 / 1000)).toFixed(1)} km/h
              </span>
              <div style={{ transform: `rotate(${weatherData.wind.deg}deg)` }}>
                <i className="fa-solid fa-circle-up" />
              </div>
            </span>
          </div>
          <div className="flex flex-col space-y-4">
            <span>Pressure</span>
            <span>
              <i className="fa-solid fa-water text-5xl" />
            </span>
            <span>{weatherData.main.pressure / 10} kPa</span>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex justify-evenly">
          <div className="flex flex-col space-y-4">
            <span>Sunrise</span>
            <span>
              <i className="fa-solid fa-sun text-5xl" />
            </span>
            <span>
              {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
                "en-US",
                {
                  hour12: true,
                  hour: "numeric",
                  minute: "numeric",
                }
              )}
            </span>
          </div>
          <div className="flex flex-col space-y-4">
            <span>Sunset</span>
            <span>
              <i className="fa-solid fa-moon text-5xl" />
            </span>
            <span>
              {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
                "en-US",
                {
                  hour12: true,
                  hour: "numeric",
                  minute: "numeric",
                }
              )}
            </span>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Details;
