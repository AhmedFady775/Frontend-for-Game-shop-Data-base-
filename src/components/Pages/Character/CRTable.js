import React from "react";
import "./Character.css";
import "../../../App.css";
import { useEffect, useState } from "react";

function CRTable() {
  const [Character_Reward_info, setCharacter_Reward_info] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/Character")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setCharacter_Reward_info(data);
  //     });
  // }, []);

  const HandelClick = () => {
    fetch("http://localhost:5000/character/reward/all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCharacter_Reward_info(data);
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
          <th style={{ color: "white" }}>Character Name </th>
          <th style={{ color: "white" }}>Reward ID </th>
          <th style={{ color: "white" }}>Status </th>
        </tr>
        {Character_Reward_info.map((item) => (
          <tr className="Character">
            <th>{item.player_id}</th>
            <th>{item.character_name}</th>
            <th>{item.reward_id}</th>
            <th>{item.status}</th>
          </tr>
        ))}
      </table>
    </>
  );
}

export default CRTable;
