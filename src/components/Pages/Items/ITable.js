import React from "react";
import "./Items.css";
import "../../../App.css";
import { useEffect, useState } from "react";

function ITable() {
  const [Items_info, setItems_info] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/Item")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setItems_info(data);
  //     });
  // }, []);

  const HandelClick = () => {
    fetch("http://localhost:5000/item")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems_info(data);
      });
  };

  return (
    <>
      <button className="BTS" onClick={HandelClick}>
        Show Data
      </button>
      <br />
      <table className="Items__Information__Table">
        <tr className="Descreption">
          <th style={{ color: "white" }}>IID </th>
          <th style={{ color: "white" }}>Name </th>
          <th style={{ color: "white" }}>Description </th>
          <th style={{ color: "white" }}>Type </th>
          <th style={{ color: "white" }}>Unlock level</th>
          <th style={{ color: "white" }}>Bonus EXP</th>
          <th style={{ color: "white" }}>Sell Price</th>
          <th style={{ color: "white" }}>Buy Price</th>
        </tr>
        {Items_info.map((item) => (
          <tr className="Items">
            <th>{item.id}</th>
            <th>{item.name}</th>
            <th>{item.description}</th>
            <th>{item.type}</th>
            <th>{item.unlock_level}</th>
            <th>{item.bonus_exp}</th>
            <th>{item.sell_price}</th>
            <th>{item.buy_price}</th>
          </tr>
        ))}
      </table>
    </>
  );
}

export default ITable;
