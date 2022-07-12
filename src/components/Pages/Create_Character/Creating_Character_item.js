import React from "react";
import "./Create_Character.css";
import "../../../App.css";
import { useState } from "react";

function Create_Character() {
  const [player_id, setplayer_id] = useState("");
  const [character_name, setcharacter_name] = useState("");
  const [item_id, setitem_id] = useState("");
  const [quantity, setquantity] = useState("");
  const [aquirement_date, setaquirement_date] = useState("");

  const Creating_Character_item = (e) => {
    const Character_item = {
      character_name,
      player_id,
      item_id,
      quantity,
      aquirement_date,
    };
    console.log(Character_item);
    fetch("http://localhost:5000/character/item", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Character_item),
    }).then(() => {
      // history.go(-1);
      console.log("Added");
    });
  };

  return (
    <div class="signupFrm2">
      {/* //////////////////////////////////////////////////////////////////////////////////////////// */}
      <form onSubmit={Creating_Character_item} action="" class="form2">
        <h1 class="title">Create a Character item</h1>
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
        <div class="inputContainer">
          <input
            onChange={(e) => setaquirement_date(e.target.value)}
            type="text"
            class="input"
            placeholder="a"
          />
          <label for="" class="label">
            Aquirement Date
          </label>
        </div>
        <input
          type="submit"
          class="submitBtn"
          value="Create a Character item"
        />
      </form>
      {/* //////////////////////////////////////////////////////////////////////////////////////////// */}
    </div>
  );
}

export default Create_Character;
