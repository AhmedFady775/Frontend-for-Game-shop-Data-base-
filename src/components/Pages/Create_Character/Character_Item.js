import React from "react";
import "./Character_Item.css";
import { Link } from "react-router-dom";

function Character_Item() {
  return (
    <div class="Character_Item__Background">
      <div action="" class="Character_Item__Information">
        <h1 class="title2"> Choose an Opration:</h1>
        <ul className="list1">
          <Link className="list2" to="/Create_Character">
            <li className="list">Create Character</li>
          </Link>
          <Link className="list2" to="/Creating_Character_item">
            <li className="list">Creating Character item</li>
          </Link>
          <Link className="list2" to="/Creating_Character_reward">
            <li className="list">Creating Character reward</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Character_Item;
