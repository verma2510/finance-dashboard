import AtmCard from '../../components/atm-card/AtmCard'
import FeaturedInfo from '../../components/userInfo/FeaturedInfo'
import './Transaction.css'

export default function Transaction() {
  return (
    <>
      <div className="transaction">
        <div className="txWrapper">
          <AtmCard />
        </div>
        <div className="txDetails">
          <div className="cardsContainer">
            <FeaturedInfo
              title="Withdrawal"
              money="3,675"
              moneyRate="-1.4"
              subText="Compared to last month"
              isNegative={true}
            />
            <FeaturedInfo
              title="Deposit"
              money="1,20,415"
              moneyRate="+2.7"
              subText="Compared to last month"
              isNegative={true}
            />
            <FeaturedInfo
              title="Balance"
              money="20,415"
              moneyRate="+10.6"
              subText="Compared to last month"
              isNegative={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}
