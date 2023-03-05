import React from "react";

const PlayerBox = ({name,img,wins,redTurn}) => {
  return <div className={redTurn?`flex ${name} playerBox ${name}-red `:`flex ${name} playerBox ${name}-yellow`}>
    <img src={img} className="playerBox-img" alt="player" />
   <span className="playerBox-name">{name}</span> 
    <span className="playerBox-num">{wins}</span>
  </div>;
};

export default PlayerBox;
