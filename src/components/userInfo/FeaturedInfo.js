import React from "react";
import "./FeaturedInfo.css";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";

export default function FeaturedInfo({
  title,
  money,
  moneyRate,
  subText,
  isNegative,
}) {
  return (
    <div className="featuredInfo">
      <div className="featuredItem">
        <span className="featuredTitle">{title}</span>
        <div className="moneyContainer">
          <span className="featuredMoney">₹{money}</span>
          <span className="featuredMoneyRate">
            {moneyRate}{" "}
            {isNegative ? (
              <FaLongArrowAltDown className="featuredIcon neg" />
            ) : (
              <FaLongArrowAltUp className="featuredIcon" />
            )}
          </span>
        </div>
        <span className="featuredSub">{subText}</span>
      </div>
    </div>
  );
}
