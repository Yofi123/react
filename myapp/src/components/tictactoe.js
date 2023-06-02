import React,{useState} from 'react'
import '/home/yofi/react/myapp/src/css/tictactoe.css'

function TicTacToe(){
    const[board,setBoard] = useState(Array(9).fill(null));
    const[player,setPlayer] = useState('X');
    const[winner,setWinner] = useState(null);

    const handleClick = (index) => {
        if(winner||board[index])
        return;

        const newBoard = [...board];
        newBoard[index] = player;
        setBoard(newBoard);

        const newPlayer = player === 'x'?'o':'x';
        setPlayer(newPlayer);

        const newWinner = calculateWinner(newBoard);
        setWinner(newWinner);
    }

    const calculateWinner = (board) => {
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];

        for(let i=0;i<lines.length;i++){
            const [a,b,c] = lines[i];
            if(board[a]&&board[a] === board[b]&&board[a]===board[c]){
                return board[a];
            }
        }
        return null;
    };

    const renderSquare = (index) => {
        return(
            <button className={`square ${board[index]}`}
                onClick={()=>handleClick(index)}>
                    {board[index]}
                </button>
        )
    };

    const resetBoard = () => {
        setBoard(Array(9).fill(null));
        setPlayer('x');
        setWinner(null);
    }

    let status;
    if(winner){
        status = `The winner is ${winner}`;
    }else if(board.every((square) => square)){
        status = 'It is a tie';
    }else{
        status = ` ${player}'s turn`;
    }

    return(
        <div className = "game">
            <h1>TIC-TAC-TOE</h1>
            <div className = "game-board">
                <div className='board-row'>
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className='board-row'>
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className='board-row'>
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
            <div className='game-info'>
                <div>{status}</div>
                <button className='reset-button' onClick={resetBoard}>Reset</button>
            </div>
        </div>
    )
}
export default TicTacToe;