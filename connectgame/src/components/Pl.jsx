import React,{useState} from "react";
import logo from "../images/logo.svg";
import playerOne from "../images/player-one.svg";
import playerTwo from "../images/player-two.svg";
import ConnectBox from "./ConnectBox";
import PlayerBox from "./PlayerBox";
import red from "../images/counter-red-large.svg";
import yellow from "../images/counter-yellow-large.svg";
import redSmall from "../images/counter-red-small.svg";
import yellowSmall from "../images/counter-yellow-small.svg";
import Continue from "./Continue";

const Pl = () => {
  const [board, setBoard] = useState(Array(42).fill(null));
  const [resetBoard,setResetBoard]=useState(false);
  const [redTurn, setRedTurn] = useState(true);
  const [continueBtn,setContinueBtn]=useState(false);
  const [redWin,SetRedWin]=useState(0);
  const [yellWin,SetYellWin]=useState(0);

  const WIN_CONDITIONS = [
    [1, 2, 3, 4],
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
    [7, 8, 9, 10],
    [8, 9, 10, 11],
    [9, 10, 11, 12],
    [10, 11, 12, 13],
    [14, 15, 16, 17],
    [15, 16, 17, 18],
    [16, 17, 18, 19],
    [17, 18, 19, 20],
    [21, 22, 23, 24],
    [22, 23, 24, 25],
    [23, 24, 25, 26],
    [24, 25, 26, 27],
    [28, 29, 30, 31],
    [29, 30, 31, 32],
    [30, 31, 32, 33],
    [31, 32, 33, 34],
    [35, 36, 37, 38],
    [36, 37, 38, 39],
    [37, 38, 39, 40],
    [38, 39, 40, 41],
    [0, 7, 14, 21],
    [1, 8, 15, 22],
    [2, 9, 16, 23],
    [3, 10, 17, 24],
    [4, 11, 18, 25],
    [5, 12, 19, 26],
    [6, 13, 20, 27],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
    [14, 21, 28, 35],
    [15, 22, 29, 36],
    [16, 23, 30, 37],
    [17, 24, 31, 38],
    [18, 25, 32, 39],
    [19, 26, 33, 40],
    [20, 27, 34, 41],
    [0, 8, 16, 24],
    [1, 9, 17, 25],
    [2, 10, 18, 26],
    [3, 11, 19, 27],
    [7, 15, 23, 31],
    [14, 22, 30, 38],
    [15, 23, 31, 39],
    [8, 16, 24, 32],
    [16, 24, 32, 40],
    [9, 17, 25, 33],
    [17, 25, 33, 41],
    [10, 18, 26, 34],
    [21, 15, 9, 3],
    [28, 22, 16, 10],
    [22, 16, 10, 4],
    [35, 29, 23, 17],
    [29, 23, 17, 11],
    [23, 17, 11, 5],
    [36, 30, 24, 18],
    [30, 24, 18, 12],
    [24, 18, 12, 6],
    [37, 31, 25, 19],
    [31, 25, 19, 13],
    [31, 25, 19, 13],
    [38, 32, 26, 20],
  ];

  const handleSubmit = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (boxIdx === idx && redTurn && value == null) {
        setRedTurn(!redTurn);
        value=red;
        if( window.innerWidth <'902px'){
          value=redSmall;
        }
        return value;
      } else if (boxIdx === idx && !redTurn && value == null) {
        setRedTurn(!redTurn);
        value=yellow
        if(window.innerWidth <'902px'){
          value=yellowSmall;
        }

        return value;
      } else {
        return value;
      }
    });
    const checkWinner = (board) => {
      for (let i = 0; i < WIN_CONDITIONS.length; i++) {
        const [a, b, c, d] = WIN_CONDITIONS[i];
        if (
          board[a] &&
          board[a] === board[b] &&
          board[b] === board[c] &&
          board[c] === board[d]
        ) {
          setResetBoard(true)
          return board[a];
        }
      }
    };
    const winner=checkWinner(updatedBoard);
    if(winner){
      if(winner===red){
        SetRedWin(redWin+1)
        // setResetBoard(true)
      }
      else{
        SetYellWin(yellWin+1)
        // setResetBoard(true)
      }
    }
    setBoard(updatedBoard)
    // resetBoard?setBoard(Array(42).fill(null)) :  setBoard(updatedBoard)
  };
  const gameOver=()=>{
    setResetBoard(false)
  setBoard(Array(42).fill(null))
  }
  const restartGame=()=>{
    setResetBoard(false)
    setBoard(Array(42).fill(null))
    SetYellWin(0);
    SetRedWin(0);
    setContinueBtn(false)
  }
  return( <div className="pl-main">
   <div className=" flex pl-head">
    <button className="pl-btn" onClick={()=>setContinueBtn(true)}>menu</button>
    <img src={logo} alt="logo" className="logo"/>
    <button className="pl-btn" onClick={restartGame}>Restart</button>
    </div>
    <div className="pl-body flex">
      <PlayerBox name="Player1" img={playerOne} wins={redWin} redTurn={redTurn}/>
      <ConnectBox handleSubmit={handleSubmit} submitBtn={resetBoard? gameOver:  handleSubmit} board={board} />
      <PlayerBox name="Player2" img={playerTwo} wins={yellWin} redTurn={redTurn}/>
      
    </div>
    {continueBtn?<Continue setContinueBtn={setContinueBtn} restartGame={restartGame}/>:null}
  </div>);
};

export default Pl;
