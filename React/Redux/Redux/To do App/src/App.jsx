import React from "react";
import "./App.css";
import { CiCircleRemove } from "react-icons/ci";

function App() {
  return (
    <>
      <h1>To do App</h1>
      <form>
        <input className="text" placeholder="Enter Text" type="text" name="text" />
        <button className="btn">Add</button>
      </form>
      <div className="data">
        <ul>
          <li>Apple</li>
          <li>Apple</li>
        </ul>
        <CiCircleRemove  className="item"/>
      </div>
    </>
  );
}

export default App;
