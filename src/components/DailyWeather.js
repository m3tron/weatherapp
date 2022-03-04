import Card from "./Card";

const DailyWeather = ({ dailyData }) => {
  return (
    <Card>
      {dailyData.map(daily => (
        <div key={daily.dt}>{daily.temp.max}</div>
      ))}
    </Card>
  );
};

export default DailyWeather;
