import React from "react";
import { useEffect, useState } from "react";
import "./Items_Statistics.css";

function Items_Statistics() {
  const [Items_Statistics, SetItems_Statistics] = useState([]);

  const HandelClick = () => {
    console.log("Hi");
    fetch("http://localhost:5000/itemsStatistics")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        SetItems_Statistics(data);
      });
  };

  return (
    <div class="Queries__Background">
      <div class="Queries__Information">
        <h1> Items Statistics </h1>
        <br />
        <button className="BTS" onClick={HandelClick}>
          Show Data
        </button>
        <br />
        <br />

        <table className="Player__Information__Table">
          <tr className="Descreption">
            <th style={{ color: "white" }}> Character </th>
            <th style={{ color: "white" }}> Number of owned items </th>
            <th style={{ color: "white" }}>Experience gained from items </th>
            <th style={{ color: "white" }}>
              Total gold amount spent on the items
            </th>
            <th style={{ color: "white" }}>Total items selling price </th>
          </tr>
          {Items_Statistics.map((item) => (
            <tr className="Items">
              <th>{item["Character"]}</th>
              <th>{item["Number of owned items"]}</th>
              <th>{item["Experience gained from items"]}</th>
              <th>{item["Total gold amount spent on the items"]}</th>
              <th>{item["Total items selling price"]}</th>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Items_Statistics;
