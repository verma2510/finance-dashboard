// BarAnalytics.js
import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import "./BarAnalytics.css";

export default function BarAnalytics({
  title,
  data = [],
  labels = [],
  width = 600,
  height = 300,
  color = "#f8c676",
  showLegend = false,
  legendData = [],
}) {
  // Check if data or labels are empty to handle cases with no data
  if (data.length === 0 || labels.length === 0) {
    return <div>No data available to display.</div>;
  }

  return (
    <div className="barAnalytics">
      <BarChart
        width={width}
        height={height}
        series={[
          {
            data: data,
            label: title,
            color: color,
          },
        ]}
        xAxis={[{ data: labels, scaleType: "band" }]}
      />
      {/* Display legend if showLegend is true */}
      {showLegend && (
        <div className="forecast-legend">
          {legendData.map((item, index) => (
            <div key={index} className="legend-item">
              <span
                className="legend-color"
                style={{ backgroundColor: item.color }}
              ></span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
