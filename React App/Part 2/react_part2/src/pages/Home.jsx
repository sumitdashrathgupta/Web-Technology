import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Home Components</h1> <br />
      <button onClick={() => navigate("OrderSummery")}>Place Holder</button>
    </div>
  );
};

export default Home;
