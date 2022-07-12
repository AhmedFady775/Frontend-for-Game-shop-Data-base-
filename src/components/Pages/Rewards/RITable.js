import React from "react";
import "./Rewards.css";
import "../../../App.css";
import { useEffect, useState } from "react";

function RITable() {
  const [Rewards_item_info, setRewards_item_info] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/Reward")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setRewards_item_info(data);
  //     });
  // }, []);

  const HandelClick = () => {
    fetch("http://localhost:5000/reward/item")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRewards_item_info(data);
      });
  };

  return (
    <>
      <button className="BTS" onClick={HandelClick}>
        Show Data
      </button>
      <br />
      <table className="Reward__Information__Table">
        <tr className="Descreption">
          <th style={{ color: "white" }}>RID </th>
          <th style={{ color: "white" }}>Item ID</th>
          <th style={{ color: "white" }}>Quantity </th>
        </tr>
        {Rewards_item_info.map((item) => (
          <tr className="Items">
            <th>{item.reward_id}</th>
            <th>{item.item_id}</th>
            <th>{item.quantity}</th>
          </tr>
        ))}
      </table>
    </>
  );
}

export default RITable;
