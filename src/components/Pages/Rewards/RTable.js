import React from "react";
import "./Rewards.css";
import "../../../App.css";
import { useEffect, useState } from "react";

function RTable() {
  const [Rewards_info, setRewards_info] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/Reward")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setRewards_info(data);
  //     });
  // }, []);

  const HandelClick = () => {
    fetch("http://localhost:5000/reward")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRewards_info(data);
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
          <th style={{ color: "white" }}>Name </th>
          <th style={{ color: "white" }}>Description </th>
        </tr>
        {Rewards_info.map((item) => (
          <tr className="Items">
            <th>{item.id}</th>
            <th>{item.name}</th>
            <th>{item.description}</th>
          </tr>
        ))}
      </table>
    </>
  );
}

export default RTable;
