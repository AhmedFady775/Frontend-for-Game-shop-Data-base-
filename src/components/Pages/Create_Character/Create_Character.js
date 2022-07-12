import React from "react";
import "./Create_Character.css";
import "../../../App.css";
import { useState } from "react";

function Create_Character() {
  const [player_id, setplayer_id] = useState("");
  const [name, setname] = useState("");
  const [exp, setexp] = useState("");
  const [gold_amount, setgold_amount] = useState("");

  const Creating_Character = (e) => {
    const Character = { name, player_id, exp, gold_amount };
    console.log(Character);
    fetch("http://localhost:5000/character", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Character),
    }).then(() => {
      // history.go(-1);
      console.log("Added");
    });
  };

  return (
    <div class="signupFrm2">
      <form onSubmit={Creating_Character} action="" class="form">
        <h1 class="title">Create Character</h1>
        <div class="inputContainer">
          <input
            onChange={(e) => setplayer_id(e.target.value)}
            type="text"
            class="input"
            placeholder="a"
          />
          <label for="" class="label">
            Player ID
          </label>
        </div>
        <div class="inputContainer">
          <input
            onChange={(e) => setname(e.target.value)}
            type="text"
            class="input"
            placeholder="a"
          />
          <label for="" class="label">
            Character Name
          </label>
        </div>
        <div class="inputContainer">
          <input
            onChange={(e) => setexp(e.target.value)}
            type="text"
            class="input"
            placeholder="a"
          />
          <label for="" class="label">
            Character EXP
          </label>
        </div>
        <div class="inputContainer">
          <input
            onChange={(e) => setgold_amount(e.target.value)}
            type="text"
            class="input"
            placeholder="a"
          />
          <label for="" class="label">
            Character Gold amount
          </label>
        </div>
        <input type="submit" class="submitBtn" value="Create Character" />
      </form>
    </div>
  );
}

export default Create_Character;
