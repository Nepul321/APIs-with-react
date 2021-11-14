import { useState, useEffect } from "react";
import Coffee from "./Coffee";

function Coffeelist() {
  const [coffee, setCoffee] = useState([]);

  useEffect(() => {
    const url = "https://api.sampleapis.com/coffee/hot";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCoffee(data);
      });
  }, []);

  return (
    <div className="container App">
      <h1 className="my-3">Coffee</h1>
      <div id="coffee">
        {coffee.map((item) => {
          return (
          <Coffee item={item} key={item.id} />
          );
        })}
      </div>
    </div>
  );
}

export default Coffeelist;