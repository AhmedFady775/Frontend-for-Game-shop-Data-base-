import React from "react";
import { useState } from "react";
import "./Popular_Items.css";

function Popular_Items() {
  const [Popular_Items, SetPopular_Items] = useState([]);
  const [data, setData] = useState(null);

  const HandelClick = () => {
    fetch(`"http://localhost:5000/popularItems/:itemsNumber"${data}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        SetPopular_Items(data);
      });
  };

  function getData(val) {
    setData(val.target.value);
  }

  return (
    <div class="Popular_Items__Background">
      <div class="Popular_Items__Information">
        <h1> Popular Items </h1>
        <br />
        <label className="BTS4" for="fname">
          Charachter name:
        </label>
        <input className="BTS2" type="text" onChange={getData} />
        <br />
        <button className="BTS" onClick={HandelClick}>
          Show Data
        </button>
        <br />
        <table className="Player__Information__Table">
          <tr className="Descreption">
            <th style={{ color: "white" }}> Item </th>
            <th style={{ color: "white" }}> Number of owner characters </th>
          </tr>
          {Popular_Items.map((item) => (
            <tr className="Items">
              <th>{item["Item name"]}</th>
              <th>{item["Number of owner characters"]}</th>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Popular_Items;
