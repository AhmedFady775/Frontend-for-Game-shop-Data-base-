import React from "react";
import "./Queries.css";
import { Link } from "react-router-dom";

function Queries() {
  return (
    <div class="Queries__Background">
      <div action="" class="Queries__Information">
        <h1 class="title2"> Choose a Querie:</h1>
        <ul className="list1">
          <Link className="list2" to="/Popular_Items">
            <li className="list">popular Items</li>
          </Link>
          <Link className="list2" to="/Unowned_Items">
            <li className="list">unowned Items</li>
          </Link>
          <Link className="list2" to="/acquirable_Items">
            <li className="list">acquirable Items</li>
          </Link>
          <Link className="list2" to="/Characters_Items_Rank">
            <li className="list">characters Items Rank</li>
          </Link>
          <Link className="list2" to="/Characters_With_N_Items_Or_More">
            <li className="list">characters With N Items Or More</li>
          </Link>
          <Link className="list2" to="/Items_Statistics">
            <li className="list">items Statistics</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Queries;
