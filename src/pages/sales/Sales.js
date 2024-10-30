import React from 'react'
import BarAnalytics from '../../components/bar-chart/BarAnalytics'
import {
  data,
  labels
} from "../../dummyData";
import { salesData } from '../../dummyData';
import './Sales.css'


export default function Sales() {
  return (
    <div className="sales">
      <h2>Bank Sales</h2>
      <div className="sales-dashboard">
        <div className="metrics-overview">
          <div className="metric">
            <span>Total Revenue</span>
            <h3>₹{salesData.totalRevenue.toLocaleString()}</h3>
          </div>

          <div className="metric">
            <span>Quarterly Growth</span>
            <h3>{salesData.quarterlyGrowth}%</h3>
          </div>

          <div className="metric">
            <span>Annual Growth</span>
            <h3>{salesData.annualGrowth}%</h3>
          </div>

          <div className="metric">
            <span>Net Profit</span>
            <h3>₹{salesData.netProfit.toLocaleString()}</h3>
          </div>
        </div>

        <div className="sales-chart">
          <h3>Quarterly Revenue</h3>
          <BarAnalytics
            title="Revenue Over Time"
            data={salesData.revenueOverTime}
            labels={salesData.quarters}
            color="#4CAF50"
            width={600}
            height={300}
          />
        </div>
        <div className="salesWrapper">
          <h3>New Deals</h3>
          <BarAnalytics
            title="New Deals by Month"
            data={data}
            labels={labels}
            color="#d4d4f6"
          />
        </div>
      </div>
    </div>
  );
}
