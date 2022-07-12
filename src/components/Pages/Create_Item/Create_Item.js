import React from "react";
import "./Create_Item.css";
import "../../../App.css";
import { useState } from "react";

function Create_Item() {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [type, settype] = useState("");
  const [unlock_level, setunlock_level] = useState("");
  const [bonus_exp, setbonus_exp] = useState("");
  const [sell_price, setsell_price] = useState("");
  const [buy_price, setbuy_pricen] = useState("");

  const Creating_Item = (e) => {
    const Item = {
      name,
      description,
      type,
      unlock_level,
      bonus_exp,
      sell_price,
      buy_price,
    };
    console.log(Item);
    fetch("http://localhost:5000/item", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Item),
    }).then(() => {
      // history.go(-1);
      console.log("Added");
    });
  };
  return (
    <div class="signupFrm1">
      <form onSubmit={Creating_Item} action="" class="form">
        <h1 class="title">Create Item</h1>
        <div class="inputContainer">
          <input
            onChange={(e) => setname(e.target.value)}
            type="text"
            class="input"
            placeholder="a"
          />
          <label for="" class="label">
            Item Name
          </label>
        </div>
        <div class="inputContainer">
          <input
            onChange={(e) => setdescription(e.target.value)}
            type="text"
            class="input"
            placeholder="a"
          />
          <label for="" class="label">
            Item Descreption
          </label>
        </div>

        <div class="inputContainer">
          <input
            onChange={(e) => settype(e.target.value)}
            type="text"
            class="input"
            placeholder="a"
          />
          <label for="" class="label">
            Item Type
          </label>
        </div>

        <div class="inputContainer">
          <input
            onChange={(e) => setunlock_level(e.target.value)}
            type="text"
            class="input"
            placeholder="a"
          />
          <label for="" class="label">
            Item Unlock level
          </label>
        </div>

        <div class="inputContainer">
          <input
            onChange={(e) => setbonus_exp(e.target.value)}
            type="text"
            class="input"
            placeholder="a"
          />
          <label for="" class="label">
            Item Bonus XP
          </label>
        </div>
        <div class="inputContainer">
          <input
            onChange={(e) => setsell_price(e.target.value)}
            type="text"
            class="input"
            placeholder="a"
          />
          <label for="" class="label">
            Item sell price
          </label>
        </div>
        <div class="inputContainer">
          <input
            onChange={(e) => setbuy_pricen(e.target.value)}
            type="text"
            class="input"
            placeholder="a"
          />
          <label for="" class="label">
            Item Buy price
          </label>
        </div>

        <input type="submit" class="submitBtn" value="Create item" />
      </form>
    </div>
  );
}

export default Create_Item;
