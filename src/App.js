import React, { useState } from 'react';
import './styles/root.scss';
import Board from './components/Board';
import { calculateWinner } from './helpers';
import History from './components/History';
import StatusMsg from './components/StatusMsg';

const INITIAL_STATE = [{ board: Array(9).fill(null), isXNext: false }];
const App = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [isXNext, setIsXNext] = useState(false);
  // history=[{board:[ ], isXnext:false},
  //             {board:[], isXnext:false} ]
  const [history, setHistory] = useState(INITIAL_STATE);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  const { winner, winningSquare } = calculateWinner(current.board);

  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }
        return square;
      });

      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });

    setCurrentMove(prev => prev + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };

  const ToNewGame = () => {
    setHistory(INITIAL_STATE);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <StatusMsg winner={winner} current={current} />
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
        winningSquare={winningSquare}
      />
      <button type="button" onClick={ToNewGame}>
        Start new game
      </button>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};

export default App;
