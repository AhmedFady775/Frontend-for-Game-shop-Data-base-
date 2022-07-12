import React from "react";
import "./Character.css";
import CTable from "./CTable";
import CRTable from "./CRTable";
import CITable from "./CITable";

function Items() {
  return (
    <div class="Background_Character">
      <div action="" class="Character_Information">
        <h1 class="Character_Title">Character Information </h1>
        <CTable />
        <br />
        <h1 class="Character_Title">Character Rewards</h1>
        <CRTable />
        <br />
        <h1 class="Character_Title">Character Items</h1>
        <CITable />
      </div>
    </div>
  );
}

export default Items;
