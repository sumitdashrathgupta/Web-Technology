import React, { useState, useEffect } from "react";

const FeaturedProducts = () => {
  let [data, sedData] = useState([]);
  useEffect(() => {
    async function demo() {
      let d = await window.fetch("https://dummyjson.com/users");
      let fD = await d.json();
      console.log(fD);
      sedData(fD.users);
    }
    demo();
  }, []);
  return (
    <div>
      <h1>Featured Products</h1>
      <section>
        <article>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>IMAGES</th>
                <th>USERNAME :</th>
                <th>AGE</th>
                <th>PHONE NO: </th>
              </tr>
            </thead>
            <tbody>
              {data.map((v, i) => {
                let { id, username, age, image, phone } = v;
                return (
                  <tr key={i + 1}>
                    <td>{id}</td>
                    <td>
                      <img src={image} alt={id} />
                    </td>
                    <td>{username}</td>
                    <td>{age}</td>
                    <td>{phone}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </article>
      </section>
    </div>
  );
};

export default FeaturedProducts;
