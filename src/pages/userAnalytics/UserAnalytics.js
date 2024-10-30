import React from 'react'
import BarAnalytics from "../../components/bar-chart/BarAnalytics";
import { uData, xLabels } from "../../dummyData";
import './UserAnalytics.css'
import Chart from '../../components/chart/Chart';
import { userData } from '../../dummyData';
import ClientType from '../../components/pie-chart/ClientType';


export default function UserAnalytics() {
  return (
    <div className="userAnalytics">
      <div className="userChartAnalytics">
        <div className="userPayment">
          <span className="dataTitle">Payment Analytics</span>
          <BarAnalytics title='Payment per year' data={uData} labels={xLabels} />
        </div>
        <div className="genderData">
          <span className="dataTitle">Gender Analytics</span>
          <ClientType />
        </div>
      </div>
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
    </div>
  );
}
