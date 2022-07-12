import React from "react";
import "./Character.css";
import "../../../App.css";
import { useEffect, useState } from "react";

function CTable() {
  const [Character_info, setCharacter_info] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/Character")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setCharacter_info(data);
  //     });
  // }, []);

  const HandelClick = () => {
    fetch("http://localhost:5000/character")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCharacter_info(data);
      });
  };

  return (
    <>
      <button className="BTS" onClick={HandelClick}>
        Show Data
      </button>
      <br />
      <table className="Character__Information__Table">
        <tr className="Descreption">
          <th style={{ color: "white" }}>Player ID </th>
          <th style={{ color: "white" }}>Name </th>
          <th style={{ color: "white" }}>EXP </th>
          <th style={{ color: "white" }}>Gold amount </th>
        </tr>
        {Character_info.map((item) => (
          <tr className="Character">
            <th>{item.player_id}</th>
            <th>{item.name}</th>
            <th>{item.exp}</th>
            <th>{item.gold_amount}</th>
          </tr>
        ))}
      </table>
    </>
  );
}

export default CTable;
