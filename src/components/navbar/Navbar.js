import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "../Button/Button";
import logo from "../navbar/img-logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="logo" width="120px" />
          </Link>
          <ul className="nav-menu active">
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Player" className="nav-links">
                Player
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Character" className="nav-links">
                Character
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Items" className="nav-links">
                Items
              </Link>
            </li>
            <li>
              <Link to="/Rewards" className="nav-links">
                Rewards
              </Link>
            </li>
            <li>
              <Link to="/Queries" className="nav-links">
                Queries
              </Link>
            </li>
          </ul>
          <div className="buttons__cont">
            <Link to="/Create_Player">
              <Button buttonStyle="btn--outline">Create Player</Button>
            </Link>
            <Link to="/Character_Item">
              <Button buttonStyle="btn--outline">Character / Item</Button>
            </Link>
            <Link to="/Create_Item">
              <Button buttonStyle="btn--outline">Create Item </Button>
            </Link>
            <Link to="/Reward_item">
              <Button buttonStyle="btn--outline">Reward / item </Button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
