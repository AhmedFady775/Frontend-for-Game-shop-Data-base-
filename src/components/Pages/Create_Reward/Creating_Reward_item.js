import React from "react";
import "./Create_Reward.css";
import { useState } from "react";
import "../../../App.css";

function Create_Reward() {
  const [reward_id, setreward_id] = useState("");
  const [item_id, setitem_id] = useState("");
  const [quantity, setquantity] = useState("");

  const Creating_Reward_item = (e) => {
    const Reward = { reward_id, item_id, quantity };
    console.log(Reward);
    fetch("http://localhost:5000/reward/item", {
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
      <form onSubmit={Creating_Reward_item} action="" class="form2">
        <h1 class="title">Create a Reward item</h1>
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
            onChange={(e) => setitem_id(e.target.value)}
            type="text"
            class="input"
            placeholder="a"
          />
          <label for="" class="label">
            Item ID
          </label>
        </div>

        <div class="inputContainer">
          <input
            onChange={(e) => setquantity(e.target.value)}
            type="text"
            class="input"
            placeholder="a"
          />
          <label for="" class="label">
            Quantity
          </label>
        </div>
        <input type="submit" class="submitBtn" value="Create Reward" />
      </form>
    </div>
  );
}

export default Create_Reward;
