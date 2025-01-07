import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Order placed !!!</h1>
      <button onClick={() => navigate(-1)}>Backe</button>
    </div>
  );
};

export default OrderSummary;
