import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <Link className="n1" to={"new"}>
        New Products
      </Link>{" "}
      <Link className="n1" to={"features"}>
        Feature Products
      </Link>{" "}
      <br />
      <br />
      <br />
      <Outlet />
    </div>
  );
};

export default Products;
