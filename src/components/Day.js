import { useState } from "react";

const Day = ({ daily }) => {
  const [open, setOpen] = useState(false);
  const degreesCelsius = <>&#x2103;</>;

  return (
    <div className="text-xs cursor-pointer" onClick={() => setOpen(!open)}>
      <div className="flex items-center justify-between">
        <div className="flex flex-col text-left">
          <span>
            {new Date(daily.dt * 1000).toLocaleDateString("en-US", {
              weekday: "long",
              month: "short",
              day: "numeric",
            })}
          </span>
          <span className="capitalize">{daily.weather[0].description}</span>
        </div>
        <div className="flex items-center">
          <span>{(daily.pop * 100).toFixed(0)}%</span>
          <img
            src={`http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`}
            alt="Daily weather icon"
          />
          <div className="grid grid-cols-2 grid-rows-2">
            <span>
              <i className="fa-solid fa-arrow-up mr-1" />
            </span>
            <span>
              {daily.temp.max.toFixed(1)}
              {degreesCelsius}
            </span>
            <span>
              <i className="fa-solid fa-arrow-down mr-1" />
            </span>
            <span>
              {daily.temp.min.toFixed(1)}
              {degreesCelsius}
            </span>
          </div>
        </div>
      </div>

      <div className={!open ? "hidden" : undefined}>
        <div className={"grid grid-cols-2 grid-rows-4"}>
          <span>Wind</span>
          <span>{(daily.wind_speed * (3600 / 1000)).toFixed(1)} km/h</span>
          <span>Humidity</span>
          <span>{daily.humidity}%</span>
          <span>Sunrise</span>
          <span>
            {new Date(daily.sunrise * 1000).toLocaleTimeString("en-US", {
              hour12: true,
              hour: "numeric",
              minute: "numeric",
            })}
          </span>
          <span>Sunset</span>
          <span>
            {new Date(daily.sunset * 1000).toLocaleTimeString("en-US", {
              hour12: true,
              hour: "numeric",
              minute: "numeric",
            })}
          </span>
        </div>

        <div className="grid grid-cols-4 grid-rows-2 my-2">
          <span>Morning</span>
          <span>Day</span>
          <span>Evening</span>
          <span>Night</span>
          <span>
            {daily.temp.morn.toFixed(1)}
            {degreesCelsius}
          </span>
          <span>
            {daily.temp.day.toFixed(1)}
            {degreesCelsius}
          </span>
          <span>
            {daily.temp.eve.toFixed(1)}
            {degreesCelsius}
          </span>
          <span>
            {daily.temp.night.toFixed(1)}
            {degreesCelsius}
          </span>
        </div>
      </div>

      <i
        className={`fa-solid fa-chevron-up ${open ? undefined : "rotate-180"}`}
      ></i>
      <hr className="mt-2" />
    </div>
  );
};

export default Day;
