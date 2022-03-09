import { useState } from "react";

const Day = ({ daily }) => {
  const [open, setOpen] = useState(false);

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
          <img
            src={`${process.env.REACT_APP_ICON_URL}${daily.weather[0].icon}@2x.png`}
            alt="Daily weather icon"
          />
          <div className="flex flex-col">
            <span>{daily.temp.max.toFixed(1)}</span>
            <span>{daily.temp.min.toFixed(1)}</span>
          </div>
        </div>
      </div>

      <div className={!open && "hidden"}>
        <div className={"grid grid-cols-2 grid-rows-5"}>
          <span>Wind</span>
          <span>{(daily.wind_speed * (3600 / 1000)).toFixed(1)} km/h</span>
          <span>Humidity</span>
          <span>{daily.humidity}%</span>
          <span>POP</span>
          <span>{daily.pop * 100}%</span>
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
          <span>{daily.temp.morn.toFixed(1)}</span>
          <span>{daily.temp.day.toFixed(1)}</span>
          <span>{daily.temp.eve.toFixed(1)}</span>
          <span>{daily.temp.night.toFixed(1)}</span>
        </div>
      </div>

      <i className={`fa-solid fa-chevron-${open ? "up" : "down"}`}></i>
      <hr className="mt-2" />
    </div>
  );
};

export default Day;
