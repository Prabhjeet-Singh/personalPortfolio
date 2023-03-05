import React from "react";
import { Link } from "react-router-dom";

const Continue = ({setContinueBtn,restartGame}) => {
  return (<div className="flex container-btn">
    <div className="flex  continue-btn">
    <span>PAUSE</span>
    <button onClick={()=>setContinueBtn(false)}>Continue Game</button>
    <button onClick={restartGame}>Restart</button>
    <Link to='/' className="flex">Quit Game</Link>
  </div>
    </div>);
};

export default Continue;
