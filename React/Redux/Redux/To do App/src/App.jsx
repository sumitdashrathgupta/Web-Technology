import { useState } from "react";
import "./App.css";
import { CiCircleRemove } from "react-icons/ci";
import { Add, Remove } from "./Slice/CreateSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [data, setData] = useState("");
  const items = useSelector((state) => state.item);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.trim()) {
      dispatch(Add(data));
      setData("");
    }
  };

  const handleRemove = (index) => {
    dispatch(Remove(index));
  };

  return (
    <div>
      <h1>To do App</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="text"
          placeholder="Enter Text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          type="text"
        />
        <button className="btn">Add</button>
      </form>
      <div className="data">
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <CiCircleRemove
                className="item"
                onClick={() => handleRemove(index)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
