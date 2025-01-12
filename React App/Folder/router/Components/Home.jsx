import React, { useState } from "react";

const Home = () => {
  let [data, setData] = useState({
    username: "",
    email: "",
    age: "",
    file: "",
    image: "",
  });
  let handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter Name"
          onChange={handleChange}
          value={data.username}
        />{" "}
        <input
          type="file"
          name="file"
          id="file"
          placeholder="Upload Your File"
          onChange={handleChange}
          value={data.file}
        />
        <input type="image" name="image" src="" alt="" value={data.image} onChange={handleChange}/>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          onChange={handleChange}
          value={data.email}
        />
        <input
          type="number"
          name="age"
          id="age"
          placeholder="Enter Age"
          onChange={handleChange}
          value={data.age}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
