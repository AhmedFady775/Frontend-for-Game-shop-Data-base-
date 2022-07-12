import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Player from "./components/Pages/Player/Player";
import Character from "./components/Pages/Character/Character";
import Create_Character from "./components/Pages/Create_Character/Create_Character";
import Create_Item from "./components/Pages/Create_Item/Create_Item";
import Create_Player from "./components/Pages/Create_Player/Create_Player";
import Create_Reward from "./components/Pages/Create_Reward/Create_Reward";
import Items from "./components/Pages/Items/Items";
import Rewards from "./components/Pages/Rewards/Rewards";
import Queries from "./components/Pages/Queries/Queries";
import Acquirable_Items from "./components/Pages/Queries/Acquirable_Items";
import Characters_Items_Rank from "./components/Pages/Queries/Characters_Items_Rank";
import Items_Statistics from "./components/Pages/Queries/Items_Statistics";
import Characters_With_N_Items_Or_More from "./components/Pages/Queries/Characters_With_N_Items_Or_More";
import Unowned_Items from "./components/Pages/Queries/Unowned_Items";
import Popular_Items from "./components/Pages/Queries/Popular_Items";
import Creating_Character_item from "./components/Pages/Create_Character/Creating_Character_item";
import Creating_Character_reward from "./components/Pages/Create_Character/Creating_Character_reward";
import Character_Item from "./components/Pages/Create_Character/Character_Item";
import Reward_item from "./components/Pages/Create_Reward/Reward_item";
import Creating_Reward_item from "./components/Pages/Create_Reward/Creating_Reward_item";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Player" element={<Player />} />
        <Route path="Character" element={<Character />} />
        <Route path="Items" element={<Items />} />
        <Route path="Rewards" element={<Rewards />} />
        <Route path="Create_Reward" element={<Create_Reward />} />
        <Route path="Create_Item" element={<Create_Item />} />
        <Route path="Create_Player" element={<Create_Player />} />
        <Route path="Create_Character" element={<Create_Character />} />
        <Route path="Queries" element={<Queries />} />
        <Route path="Acquirable_Items" element={<Acquirable_Items />} />
        <Route
          path="Characters_Items_Rank"
          element={<Characters_Items_Rank />}
        />
        <Route path="Items_Statistics" element={<Items_Statistics />} />
        <Route
          path="Characters_With_N_Items_Or_More"
          element={<Characters_With_N_Items_Or_More />}
        />
        <Route path="Unowned_Items" element={<Unowned_Items />} />
        <Route path="Popular_Items" element={<Popular_Items />} />
        <Route
          path="Creating_Character_reward"
          element={<Creating_Character_reward />}
        />
        <Route
          path="Creating_Character_item"
          element={<Creating_Character_item />}
        />
        <Route path="Character_Item" element={<Character_Item />} />
        <Route path="Reward_item" element={<Reward_item />} />
        <Route path="Creating_Reward_item" element={<Creating_Reward_item />} />
        <Route path="Creating_Reward_item" element={<Creating_Reward_item />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
