import React from "react";
import {Link} from "react-router-dom";
import check from '../images/icon-check.svg';

const Read = () => {
  return <div className="home flex">
  <div className="home-sub  read-white">
  <h2 className="flex">Rules</h2>
  <h3>Objective</h3>
  <p>Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).</p>
  <h3 >How to Play</h3>
  <div className="read-play">
    <p><span>1</span>Red goes first in the first game</p>
    <p><span>2</span>Players must alternate turns, and only one disc can be dropped in each turn.</p>
    <p><span>3</span>The game ends when there is a 4-in-a-row or a stalemate.</p>
    <p><span>4</span>The starter of the previous game goes second on the next game.</p>
  </div>
  <Link to='/' className=" flex tick"><img src={check} alt="" /></Link>
  </div>
</div>;
};

export default Read;
