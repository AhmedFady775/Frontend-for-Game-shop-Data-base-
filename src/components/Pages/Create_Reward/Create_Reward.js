import React from "react";
import "./Create_Reward.css";
import { useState } from "react";
import "../../../App.css";

function Create_Reward() {
  const [name, setReward_Name] = useState("");
  const [description, setReward_Descreption] = useState("");

  const Creating_Reward = (e) => {
    const Reward = { name, description };
    console.log(Reward);
    fetch("http://localhost:5000/reward", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Reward),
    }).then(() => {
      // history.go(-1);
      console.log("Added");
    });
  };

  return (
    <div class="signupFrm_Reward">
      <form onSubmit={Creating_Reward} action="" class="form">
        <h1 class="title">Create Reward</h1>
        <div class="inputContainer">
          <input
            onChange={(e) => setReward_Name(e.target.value)}
            type="text"
            value={name}
            class="input"
            placeholder="a"
          />
          <label for="" class="label">
            Reward Name
          </label>
        </div>
        <div class="inputContainer">
          <input
            onChange={(e) => setReward_Descreption(e.target.value)}
            type="text"
            value={description}
            class="input"
            placeholder="a"
          />
          <label for="" class="label">
            Reward Descreption
          </label>
        </div>

        <input type="submit" class="submitBtn" value="Create Reward" />
      </form>
    </div>
  );
}

export default Create_Reward;
