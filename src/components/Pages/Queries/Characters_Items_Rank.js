import React from "react";
import { useState } from "react";
import "./Characters_Items_Rank.css";

function Characters_Items_Rank() {
  const [Characters_Items_Rank, SetCharacters_Items_Rank] = useState([]);
  const [data, setData] = useState(null);

  const HandelClick = () => {
    console.log("Hi");
    fetch(`"http://localhost:5000/charactersItemsRank/:itemsNumber"${data}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        SetCharacters_Items_Rank(data);
      });
  };

  function getData(val) {
    setData(val.target.value);
  }

  return (
    <div class="Characters_Items_Rank__Background">
      <div class="Characters_Items_Rank__Information">
        <h1> Characters Items Rank </h1>
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
            <th style={{ color: "white" }}> Character </th>
            <th style={{ color: "white" }}> Max item level </th>
          </tr>
          {Characters_Items_Rank.map((item) => (
            <tr className="Items">
              <th>{item["Character"]}</th>
              <th>{item["Max item levele"]}</th>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Characters_Items_Rank;
