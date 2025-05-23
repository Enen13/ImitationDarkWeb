import React from "react";
import "./LeakPriceCard.css";
import PostData from "../PostData.json";

const LeakPriceCard = ({ idx }) => {
  const dollar = PostData[idx].dollar;
  return (
    <div className="leak-detail-price-card">
      <h3>{dollar} $</h3>
      <p>Check BTC Price</p>
      <p className="leak-detail-btc">{(dollar * 0.00001).toFixed(8)} ₿</p>
      <button className="leak-detail-buy-btn">Register to Buy</button>
    </div>
  );
};

export default LeakPriceCard;