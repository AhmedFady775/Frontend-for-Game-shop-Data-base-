import React from "react";
import { useState } from "react";
import "./Acquirable_Items.css";

function Acquirable_Items() {
  const [Acquire_Items, SetAcquire_Items] = useState([]);
  const [data, setData] = useState(null);

  const HandelClick = () => {
    fetch(`http://localhost:5000/acquirableItems/:name${data}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        SetAcquire_Items(data);
      });
  };

  function getData(val) {
    setData(val.target.value);
  }

  return (
    <div class="Acquirable_Items__Background">
      <div class="Acquirable_Items__Information">
        <h1> Acquirable Items </h1>
        <br />
        <label className="BTS3" for="fname">
          Character name:
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
            <th style={{ color: "white" }}> Price </th>
            <th style={{ color: "white" }}> Level </th>
          </tr>
          {Acquire_Items.map((item) => (
            <tr className="Items">
              <th>{item["Item name"]}</th>
              <th>{item["Item price"]}</th>
              <th>{item["Item level"]}</th>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Acquirable_Items;
