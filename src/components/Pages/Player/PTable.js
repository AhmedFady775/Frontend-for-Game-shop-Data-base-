import React from "react";
import "./Player.css";
import "../../../App.css";
import { useEffect, useState } from "react";

function PTable() {
  const [Player_info, setPlayer_info] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/Player")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setPlayer_info(data);
  //     });
  // }, []);

  const HandelClick = () => {
    fetch("http://localhost:8000/Player")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPlayer_info(data);
      });
  };

  return (
    <>
      <button className="BTS" onClick={HandelClick}>
        Show Data
      </button>
      <br />
      <table className="Player__Information__Table">
        <tr className="Descreption">
          <th style={{ color: "white" }}>PID </th>
          <th style={{ color: "white" }}>Name </th>
          <th style={{ color: "white" }}>Email </th>
          <th style={{ color: "white" }}>Password </th>
          <th style={{ color: "white" }}>Start Date</th>
        </tr>
        {Player_info.map((item) => (
          <tr className="Items">
            <th>{item.id}</th>
            <th>{item.name}</th>
            <th>{item.email}</th>
            <th>{item.password_digest}</th>
            <th>{item.start_date}</th>
          </tr>
        ))}
      </table>
    </>
  );
}

export default PTable;
