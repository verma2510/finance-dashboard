import { PieChart } from "@mui/x-charts/PieChart";
import { genderData } from "../../dummyData";
import "./ClientType.css";

export default function ClientType() {
  return (
    <div className="clientType" style={{ maxWidth: '100%', overflowX: 'auto' }}>
      <div style={{ minWidth: 300 }}>
        <PieChart
          width={300}
          height={300}
          series={[
            {
              data: genderData,
              innerRadius: 50,
              outerRadius: 100,
              paddingAngle: 5,
              cornerRadius: 5,
              startAngle: -45,
              endAngle: 360,
              cx: 150,
              cy: 150,
            },
          ]}
        />
      </div>
    </div>
  );
}
