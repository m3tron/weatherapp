import Card from "./Card";
import Day from "./Day";

const DailyWeather = ({ dailyData }) => {
  return (
    <Card>
      <span className="underline underline-offset-4 text-sm">
        7 Day Forecast
      </span>
      {dailyData.slice(1).map(daily => (
        <Day key={daily.dt} daily={daily} />
      ))}
    </Card>
  );
};

export default DailyWeather;
