import React from "react";
import "./Create_Player.css";
import "../../../App.css";
import { useState } from "react";

function Create_Player() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password_digest, setpassword_digest] = useState("");
  const [start_date, setstart_date] = useState("");

  const Creating_Player = (e) => {
    const Player = { name, email, password_digest, start_date };
    console.log(Player);
    fetch("http://localhost:5000/player", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Player),
    }).then(() => {
      // history.go(-1);
      console.log("Added");
    });
  };

  return (
    <div class="signupFrm">
      <form onSubmit={Creating_Player} action="" class="form">
        <h1 class="title">Create Player</h1>
        <div class="inputContainer">
          <input
            onChange={(e) => setname(e.target.value)}
            type="text"
            class="input"
            placeholder="a"
          />
          <label for="" class="label">
            Player Name
          </label>
        </div>
        <div class="inputContainer">
          <input
            onChange={(e) => setemail(e.target.value)}
            type="email"
            class="input"
            placeholder="a"
          />
          <label for="" class="label">
            Player Email
          </label>
        </div>
        <div class="inputContainer">
          <input
            onChange={(e) => setpassword_digest(e.target.value)}
            type="text"
            class="input"
            placeholder="a"
          />
          <label for="" class="label">
            Player Password
          </label>
        </div>
        <div class="inputContainer">
          <input
            onChange={(e) => setstart_date(e.target.value)}
            type="date"
            class="input"
            placeholder="a"
          />
          <label for="" class="label">
            Player Start Date
          </label>
        </div>
        <input type="submit" class="submitBtn" value="Create Player" />
      </form>
    </div>
  );
}

export default Create_Player;
