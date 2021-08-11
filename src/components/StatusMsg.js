import React from 'react';

const StatusMsg = ({ winner, current }) => {
  // const msg = winner
  // ? `The winner is ${winner}`
  // : `The next player is ${current.isXNext ? 'X' : 'O'}`;
  const NoMovesLeft = current.board.every(el => el !== null);
  return (
    <div className="status-message">
      {winner && (
        <>
          The Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && NoMovesLeft && (
        <>
          <span className="text-green">X</span> and{' '}
          <span className="text-orange">O</span> tied
        </>
      )}
      {!winner && !NoMovesLeft && (
        <>
          The next player is{' '}
          <span className={current.isXNext ? 'text-green' : 'text-orange'}>
            {current.isXNext ? 'X' : 'O'}
          </span>
        </>
      )}
    </div>
  );
};

export default StatusMsg;
