import Card from "./Card";
import { Line } from "react-chartjs-2";

const HourlyWeather = ({ hourlyData }) => {
  const fontColor = "#ffffff";

  const data = {
    labels: hourlyData.slice(1, 25).map(hourly =>
      new Date(hourly.dt * 1000).toLocaleTimeString("en-US", {
        hour12: true,
        hour: "numeric",
      })
    ),
    datasets: [
      {
        data: hourlyData.slice(1, 25).map(hourly => hourly.temp.toFixed(0)),
        borderColor: fontColor,
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: { display: false, borderColor: fontColor },
        ticks: { color: fontColor },
      },
      y: {
        grid: { display: false, borderColor: fontColor },
        ticks: { color: fontColor },
        grace: 1,
      },
    },
    responsive: true,
    plugins: {
      legend: false,
      tooltip: false,
    },
  };

  return (
    <Card>
      <span className="text-sm underline underline-offset-4">
        Hourly Forecast
      </span>
      <Line data={data} options={options} />
    </Card>
  );
};

export default HourlyWeather;
