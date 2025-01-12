import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  let { userId } = useParams();
  let [data, setData] = useState({});
  useEffect(() => {
    let x = async () => {
      let d = await window.fetch("https://dummyjson.com/users");
      let fD = await d.json();
      console.log(fD.users);
      setData(fD);
    };
    x();
  }, []);
  return (
    <div>
      <h1>User Details</h1>
      <h2>Name: {data.firstName}</h2>
      <h3>Age: {data.age}</h3>
    </div>
  );
};

export default UserDetails;
