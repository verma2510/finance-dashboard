import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/userInfo/FeaturedInfo'
import './Home.css'
import { userData } from '../../dummyData'
import WidgetLarge from '../../components/widgetLarge/WidgetLarge'
import WidgetSmall from '../../components/widgetSmall/WidgetSmall'

export default function Home() {
  return (
    <div className="home">
      <div className="cards">
        <FeaturedInfo
          title="Revenue"
          money="2,415"
          moneyRate="-11.4"
          subText="Compared to last month"
          isNegative={true}
        />
        <FeaturedInfo
          title="Sales"
          money="955"
          moneyRate="-11.4"
          subText="Compared to last month"
          isNegative={true}
        />
        <FeaturedInfo
          title="Cost"
          money="215"
          moneyRate="+2.4"
          subText="Compared to last month"
          isNegative={false}
        />
      </div>
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidget">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
}
