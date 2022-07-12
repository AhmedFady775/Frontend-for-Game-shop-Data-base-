import React from "react";
import "./Reward_item.css";
import { Link } from "react-router-dom";

function Reward_item() {
  return (
    <div class="Reward_item__Background">
      <div action="" class="Reward_item__Information">
        <h1 class="title2"> Choose an Opration:</h1>
        <ul className="list1">
          <Link className="list2" to="/Create_Reward">
            <li className="list">Create Reward</li>
          </Link>
          <Link className="list2" to="/Creating_Reward_item">
            <li className="list">Creating Reward item</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Reward_item;
