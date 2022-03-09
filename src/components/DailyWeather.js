import Card from "./Card";
import Day from "./Day";

const DailyWeather = ({ dailyData }) => {
  return (
    <Card>
      {dailyData.slice(1).map(daily => (
        <Day key={daily.dt} daily={daily} />
      ))}
    </Card>
  );
};

export default DailyWeather;
