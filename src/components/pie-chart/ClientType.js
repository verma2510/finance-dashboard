import { PieChart } from "@mui/x-charts/PieChart";
import { genderData } from "../../dummyData";
import "./ClientType.css";

export default function ClientType() {
  return (
    <div className="clientType">
      <PieChart
        series={[
          {
            data: genderData,
            innerRadius: 50,
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -45,
            endAngle: 360,
            cx: 95,
            cy: 150,
          },
        ]}
      />
    </div>
  );
}
