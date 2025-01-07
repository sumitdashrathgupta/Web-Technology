import React from "react";
import { Outlet } from "react-router-dom";

const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <br />
      <br />
      <br />
      <Outlet />
    </div>
  );
};

export default Users;
