import React from "react";
import "./Create_Character.css";
import "../../../App.css";
import { useState } from "react";

function Create_Character() {
  const [player_id, setplayer_id] = useState("");
  const [character_name, setcharacter_name] = useState("");
  const [reward_id, setreward_id] = useState("");
  const [status, setstatus] = useState(false);

  const Creating_Character_reward = (e) => {
    const Character_reward = {
      character_name,
      player_id,
      reward_id,
      status,
    };
    console.log(Character_reward);
    fetch("http://localhost:5000/character/reward", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Character_reward),
    }).then(() => {
      // history.go(-1);
      console.log("Added");
    });
  };

  return (
    <div class="signupFrm2">
      {/* //////////////////////////////////////////////////////////////////////////////////////////// */}
      <form onSubmit={Creating_Character_reward} action="" class="form3">
        <h1 class="title">Create a Character reward</h1>
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
            onChange={(e) => setcharacter_name(e.target.value)}
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
            onChange={(e) => setreward_id(e.target.value)}
            type="text"
            class="input"
            placeholder="a"
          />
          <label for="" class="label">
            Reward ID
          </label>
        </div>
        <div class="inputContainer">
          <input
            onChange={(e) => setstatus(e.target.value)}
            type="text"
            class="input"
            placeholder="a"
          />
          <label for="" class="label">
            Status
          </label>
        </div>

        <input
          type="submit"
          class="submitBtn"
          value="Create a Character reward"
        />
      </form>
    </div>
  );
}

export default Create_Character;
