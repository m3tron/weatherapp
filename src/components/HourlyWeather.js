import Card from "./Card";
import { Line } from "react-chartjs-2";

const HourlyWeather = ({ hourlyData }) => {
  const data = {
    labels: hourlyData.map(hourly =>
      new Date(hourly.dt * 1000).toLocaleTimeString("en-US", {
        hour12: true,
        hour: "numeric",
      })
    ),
    datasets: [
      {
        data: hourlyData.map(hourly => hourly.temp.toFixed(0)),
        borderColor: "#fff",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: false,
      tooltip: false,
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      color: "#000000",
    },
  };

  return (
    <Card>
      <Line
        className="bg-slate-500 rounded-lg"
        datasetIdKey="id"
        data={data}
        options={options}
      />
    </Card>
  );
};

export default HourlyWeather;
