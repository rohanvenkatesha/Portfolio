import React, { useRef, useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ChartData } from "chart.js";

// Register required components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const RingChart = () => {
  // Use a specific ref type for a Doughnut chart
  const chartRef = useRef<ChartJS<'doughnut', number[], unknown>>(null);

  // Define the correct ChartData type for the Doughnut chart
  const [chartData, setChartData] = useState<ChartData<'doughnut', number[], unknown>>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const chartInstance = chartRef.current;
    if (chartInstance && chartInstance.ctx) {
      const ctx = chartInstance.ctx;

      // Create gradient colors
      const gradient1 = ctx.createLinearGradient(0, 0, 0, 300);
      gradient1.addColorStop(0, "#0BD11B");
      gradient1.addColorStop(1, "#00FF7F");

      const gradient2 = ctx.createLinearGradient(0, 0, 0, 300);
      gradient2.addColorStop(0, "#FFD700");
      gradient2.addColorStop(1, "#FFA500");

      const gradient3 = ctx.createLinearGradient(0, 0, 0, 300);
      gradient3.addColorStop(0, "#1E90FF");
      gradient3.addColorStop(1, "#00BFFF");

      setChartData({
        labels: ["Full-time", "Part-time", "Internship"],
        datasets: [
          {
            data: [3.6, 1.5, 0.9], // Replace with actual values
            backgroundColor: [gradient1, gradient2, gradient3],
            borderWidth: 0,
            hoverBackgroundColor: [gradient1, gradient2, gradient3],
          },
        ],
      });
    }
  }, []);

  const options = {
    responsive: true,
    cutout: "75%", // Creates the ring effect
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,
        labels: {
          color: "#FFFFFF",
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            const value = tooltipItem.raw;
            return `${tooltipItem.label}: ${value} years`;
          },
        },
      },
    },
  };

  return (
    <div className="w-[300px] h-[300px] mx-auto mt-10">
      <h3 className="text-center text-xl font-semibold text-white mb-4">
        Experience Breakdown
      </h3>
      <Doughnut
        ref={chartRef}
        data={chartData}
        options={options}
      />
    </div>
  );
};

export default RingChart;
