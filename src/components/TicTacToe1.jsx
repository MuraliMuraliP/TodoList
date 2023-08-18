import React, { useState } from 'react';
import './TicTac.css';
function TicTacToe1() {
    const [turn, setTurn] = useState('x');
    const [cells, setCells] = useState(Array(25).fill(''));
    const [winner, setWinner] = useState('');
    const checkWinner = (squares) => {
        let combos = {
            across: [
                [0, 1, 2,3,4],
                [5,6,7,8,9],
                [10,11,12,13,14],
                [15,16,17,18,19],
                [20,21,22,23,24]
            ],
            down: [
                [0, 5, 10,15,20],
                [1,6,11,16,21],
                [2,7,12,17,22],
                [3,8,13,18,23],
                [4,9,14,19,24]
            ],
            diagnol: [
                [0, 6, 12,18,24],
                [4,8,12,16,20],
            ]
        };
        for (let combo in combos) {
            combos[combo].forEach((pattern) => {
                // console.log(pattern)
                if (
                    squares[pattern[0]] === '' ||
                    squares[pattern[1]] === '' ||
                    squares[pattern[2]] === ''||
                    squares[pattern[3]] === '' ||
                    squares[pattern[4]] === '' 
                ) {

                }
                else if (
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]]&&
                    squares[pattern[2]] === squares[pattern[3]]&&
                    squares[pattern[3]] === squares[pattern[4]]
                ) {
                    setWinner(squares[pattern[0]])
                }
            });
        }
    }
    const handleClick = (num) => {
        if (cells[num] !== '') {
            alert('already clicked')
            return;
        }
        let squares = [...cells];
        if (turn === 'x') {
            squares[num] = 'x'
            setTurn('o');
        } else {
            squares[num] = 'o'
            setTurn('x');
        }
        checkWinner(squares)
        setCells(squares);
        //console.log(squares);
    }
    const handleRestart = () => {
        setWinner(null);
        setCells(Array(25).fill(''));
    }
    const Button = ({ num }) => {
        return <td onClick={() => handleClick(num)}>{cells[num]}</td>
    }
    return (
        <>
            <div className="container">
                <table>
                    Turn:{turn}
                    <tbody>
                        <tr>
                            <Button num={0} />
                            <Button num={1} />
                            <Button num={2} />
                            <Button num={3} />
                            <Button num={4} />
                        </tr>

                        <tr>
                            <Button num={5} />
                            <Button num={6} />
                            <Button num={7} />
                            <Button num={8} />
                            <Button num={9} />
                        </tr>
                        <tr>
                            <Button num={10} />
                            <Button num={11} />
                            <Button num={12} />
                            <Button num={13} />
                            <Button num={14} />
                        </tr>
                        <tr>
                            <Button num={15} />
                            <Button num={16} />
                            <Button num={17} />
                            <Button num={18} />
                            <Button num={19} />
                        </tr>
                        <tr>
                            <Button num={20} />
                            <Button num={21} />
                            <Button num={22} />
                            <Button num={23} />
                            <Button num={24} />
                        </tr>
                    </tbody>
                </table>
                {winner && (
                    <>
                        <p>{winner} : is the winner!</p>
                        <button onClick={() => handleRestart()}>Play Again</button>
                    </>
                )}
            </div>
        </>
    )
}
export default TicTacToe1;