import React from "react";
import "./Character.css";
import "../../../App.css";
import { useEffect, useState } from "react";

function CITable() {
  const [Character_Item_info, setCharacter_Item_info] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/Character")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setCharacter_Item_info(data);
  //     });
  // }, []);

  const HandelClick = () => {
    fetch("http://localhost:5000/character/item/all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCharacter_Item_info(data);
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
          <th style={{ color: "white" }}>Character Name</th>
          <th style={{ color: "white" }}>Item ID </th>
          <th style={{ color: "white" }}>Quantity </th>
          <th style={{ color: "white" }}>Aquirement Date</th>
        </tr>
        {Character_Item_info.map((item) => (
          <tr className="Character">
            <th>{item.player_id}</th>
            <th>{item.character_name}</th>
            <th>{item.item_id}</th>
            <th>{item.quantity}</th>
            <th>{item.aquirement_date}</th>
          </tr>
        ))}
      </table>
    </>
  );
}

export default CITable;
