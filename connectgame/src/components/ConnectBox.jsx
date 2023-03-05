import React from "react";

const ConnectBox = ({board,submitBtn}) => {
 

  return (
    <div className="connectbox">
      <div className="btn-click-2">
        <div className="btn-click" >
          {board.map((value, idx) => {
            return (
              <div
                className="board"
                key={idx}
                onClick={()=>submitBtn(idx)}
              >
                <img src={value} className="board-img" alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ConnectBox;
