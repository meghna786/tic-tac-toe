import React from 'react'

const StatusMsg = ({winner, current}) => {
      // const msg = winner
      // ? `The winner is ${winner}`
      // : `The next player is ${current.isXNext ? 'X' : 'O'}`;
      const NoMovesLeft=current.board.every(el=> el!==null);
      return (
            <h2>{winner && `The winner is ${winner}`}
            {!winner && NoMovesLeft && `X and O tied`}
            {!winner && !NoMovesLeft && `The next player is ${current.isXNext ? 'X' : 'O'}`}</h2>
      )
}

export default StatusMsg
