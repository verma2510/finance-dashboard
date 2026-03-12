import "./Chart.css";
import {LineChart, Line,YAxis, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart" style={{ width: '100%', padding: '20px 0' }}>
      <h3 className="chartTitle" style={{ paddingLeft: '20px' }}>{title}</h3>
      <div style={{ width: '100%', height: 300, minWidth: 250 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd" />
            <YAxis stroke="#5550bd" />
            <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
            <Tooltip />
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
