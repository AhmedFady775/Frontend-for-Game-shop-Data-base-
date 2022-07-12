import React from "react";
import "./Rewards.css";
import RTable from "./RTable";
import RITable from "./RITable";

function Rewards() {
  return (
    <div class="Background_Reward">
      <div action="" class="Reward_Information">
        <h1 class="Reward_Title">Rewards Information </h1>
        <RTable />
        <br />
        <h1 class="Reward_Title">Reward Items Information </h1>
        <RITable />
      </div>
    </div>
  );
}

export default Rewards;
