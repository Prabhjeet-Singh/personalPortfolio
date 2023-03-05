import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import player from "../images/player-vs-player.svg"

const Home = () => {
  return <div className="home flex">
    <div className="home-sub flex">
    <img src={logo} alt="logo" className=" home-logo logo"/>
    
    <Link to='/pl'  className="name" >
      <span className="home-sp">Player vs Player</span>
      <img src={player} alt="player" /> 
      </Link>
    <Link to='/read'  className="name name3" >
      <span className="home-sp">How to play</span> 
      </Link>
    </div>
  </div>
};

export default Home;
