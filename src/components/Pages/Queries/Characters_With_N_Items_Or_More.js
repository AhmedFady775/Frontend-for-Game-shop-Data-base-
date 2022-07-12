import React from "react";
import { useState } from "react";
import "./Characters_With_N_Items_Or_More.css";

function Characters_With_N_Items_Or_More() {
  const [Characters_With_N_Items_Or_More, SetCharacters_With_N_Items_Or_More] =
    useState([]);
  const [data, setData] = useState(null);

  const HandelClick = () => {
    fetch(
      `"http://localhost:5000/charactersWithNItemsOrMore/:itemsNumber"${data}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        SetCharacters_With_N_Items_Or_More(data);
      });
  };

  function getData(val) {
    setData(val.target.value);
  }

  return (
    <div class="Characters_With_N_Items_Or_More__Background">
      <div class="Characters_With_N_Items_Or_More__Information">
        <h1> Characters With N Items Or More </h1>
        <br />
        <label className="BTS3" for="fname">
          Charachter name:{" "}
        </label>
        <br />
        <input className="BTS2" type="text" onChange={getData} />
        <br />
        <button className="BTS" onClick={HandelClick}>
          Show Data
        </button>
        <br />
        <table className="Player__Information__Table">
          <tr className="Descreption">
            <th style={{ color: "white" }}> Character </th>
            <th style={{ color: "white" }}> Number of owned items</th>
          </tr>
          {Characters_With_N_Items_Or_More.map((item) => (
            <tr className="Items">
              <th>{item["Character"]}</th>
              <th>{item["Number of owned items"]}</th>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Characters_With_N_Items_Or_More;
