import React from "react";
import "../../../App.css";
import Button from "../../Button/Button";
import "./Home.css";
import Logo from "../Home/BG.jpg";
// import Getstarted from "./Getstarted";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero-container">
      <img className="IMG1" src={Logo} alt="PIC" />
      <h1> WELCOME TO DEMO </h1>
      <h2>
        This Data Base Project idea is to Make Crud Oprations on a small Game
        Shop.
      </h2>
      <br />
      <br />
      <br />
      <h2>In order to start click the button below</h2>

      <div className="hero-btns">
        <Link to="/Create_Player">
          <Button> Get STARTED </Button>
        </Link>
      </div>
      {/* <Getstarted /> */}
    </div>
  );
}
export default Home;
