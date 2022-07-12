import React from "react";
import { useState } from "react";
import "./Unowned_Items.css";

function Unowned_Items() {
  const [Unowned_Items, SetUnowned_Items] = useState([]);
  const [data, setData] = useState(null);

  const HandelClick = () => {
    console.log("Hi");
    fetch(`"http://localhost:5000/unownedItems/:name"${data}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        SetUnowned_Items(data);
      });
  };

  function getData(val) {
    setData(val.target.value);
  }

  return (
    <div class="Unowned_Items__Background">
      <div class="Unowned_Items__Information">
        <h1> Unowned Items </h1>
        <br />
        <label className="BTS5" for="fname">
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
          </tr>
          {Unowned_Items.map((item) => (
            <tr className="Items">
              <th>{item["Item name"]}</th>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Unowned_Items;
