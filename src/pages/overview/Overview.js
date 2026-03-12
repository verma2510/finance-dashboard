import React from 'react';
import './Overview.css';
import FeaturedInfo from '../../components/userInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import ClientType from '../../components/pie-chart/ClientType';
import { userData } from '../../dummyData';

export default function Overview() {
  return (
    <div className="overview">
      <h1 className="overviewTitle">Financial Overview</h1>
      <div className="overviewCards">
        <FeaturedInfo
          title="Current Balance"
          money="85,250"
          moneyRate="+4.2"
          subText="Compared to last month"
          isNegative={false}
        />
        <FeaturedInfo
          title="Total Income"
          money="120,430"
          moneyRate="+1.4"
          subText="Compared to last month"
          isNegative={false}
        />
        <FeaturedInfo
          title="Total Expenses"
          money="35,180"
          moneyRate="-2.1"
          subText="Compared to last month"
          isNegative={true}
        />
      </div>
      
      <div className="overviewCharts">
        <div className="overviewChartItem" style={{ flex: 2 }}>
          <Chart
            data={userData}
            title="Monthly Cashflow"
            grid
            dataKey="Active User"
          />
        </div>
        <div className="overviewChartItem" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h3>Client Distribution</h3>
          <ClientType />
        </div>
      </div>
    </div>
  );
}
