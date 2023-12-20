import React, { useState, useRef, useEffect } from 'react';
import BackButton from '../../components/BackButton';
import '../../components/styles/queens.css';

interface Square {
    row: number;
    col: number;
}

const MazeSolver: React.FC = () => {
    const initialQueens = [
        { row: 0, col: 0 },
        { row: 1, col: 4 },
        { row: 2, col: 7 },
        { row: 3, col: 2 },
        { row: 4, col: 2 },
        { row: 5, col: 6 },
        { row: 6, col: 1 },
        { row: 7, col: 3 },
    ];

    // The 12 fundamental solutions to the eight queens problem, with a few repeats from symmetry
    const solutions = [
        [
            { row: 0, col: 0 },
            { row: 1, col: 4 },
            { row: 2, col: 7 },
            { row: 3, col: 5 },
            { row: 4, col: 2 },
            { row: 5, col: 6 },
            { row: 6, col: 1 },
            { row: 7, col: 3 },
        ],
        [
            { row: 0, col: 0 },
            { row: 1, col: 5 },
            { row: 2, col: 7 },
            { row: 3, col: 2 },
            { row: 4, col: 6 },
            { row: 5, col: 3 },
            { row: 6, col: 1 },
            { row: 7, col: 4 },
        ],
        [
            { row: 0, col: 0 },
            { row: 1, col: 6 },
            { row: 2, col: 3 },
            { row: 3, col: 5 },
            { row: 4, col: 7 },
            { row: 5, col: 1 },
            { row: 6, col: 4 },
            { row: 7, col: 2 },
        ],
        [
            { row: 0, col: 0 },
            { row: 1, col: 6 },
            { row: 2, col: 4 },
            { row: 3, col: 7 },
            { row: 4, col: 1 },
            { row: 5, col: 3 },
            { row: 6, col: 5 },
            { row: 7, col: 2 },
        ],
        [
            { row: 0, col: 1 },
            { row: 1, col: 3 },
            { row: 2, col: 5 },
            { row: 3, col: 7 },
            { row: 4, col: 2 },
            { row: 5, col: 0 },
            { row: 6, col: 6 },
            { row: 7, col: 4 },
        ],
        [
            { row: 0, col: 1 },
            { row: 1, col: 4 },
            { row: 2, col: 6 },
            { row: 3, col: 0 },
            { row: 4, col: 2 },
            { row: 5, col: 7 },
            { row: 6, col: 5 },
            { row: 7, col: 3 },
        ],
        [
            { row: 0, col: 1 },
            { row: 1, col: 4 },
            { row: 2, col: 6 },
            { row: 3, col: 3 },
            { row: 4, col: 0 },
            { row: 5, col: 7 },
            { row: 6, col: 5 },
            { row: 7, col: 2 },
        ],
        [
            { row: 0, col: 1 },
            { row: 1, col: 5 },
            { row: 2, col: 0 },
            { row: 3, col: 6 },
            { row: 4, col: 3 },
            { row: 5, col: 7 },
            { row: 6, col: 2 },
            { row: 7, col: 4 },
        ],
        [
            { row: 0, col: 1 },
            { row: 1, col: 5 },
            { row: 2, col: 7 },
            { row: 3, col: 2 },
            { row: 4, col: 0 },
            { row: 5, col: 3 },
            { row: 6, col: 6 },
            { row: 7, col: 4 },
        ],
        [
            { row: 0, col: 1 },
            { row: 1, col: 6 },
            { row: 2, col: 2 },
            { row: 3, col: 5 },
            { row: 4, col: 7 },
            { row: 5, col: 4 },
            { row: 6, col: 0 },
            { row: 7, col: 3 },
        ],
        [
            { row: 0, col: 1 },
            { row: 1, col: 6 },
            { row: 2, col: 4 },
            { row: 3, col: 7 },
            { row: 4, col: 0 },
            { row: 5, col: 3 },
            { row: 6, col: 5 },
            { row: 7, col: 2 },
        ],
        [
            { row: 0, col: 1 },
            { row: 1, col: 7 },
            { row: 2, col: 5 },
            { row: 3, col: 0 },
            { row: 4, col: 2 },
            { row: 5, col: 4 },
            { row: 6, col: 6 },
            { row: 7, col: 3 },
        ],
        [
            { row: 0, col: 4 },
            { row: 1, col: 2 },
            { row: 2, col: 0 },
            { row: 3, col: 6 },
            { row: 4, col: 1 },
            { row: 5, col: 7 },
            { row: 6, col: 5 },
            { row: 7, col: 3 },
        ],
    ];

    const [board, setBoard] = useState<Square[][]>([]);
    const [queens, setQueens] = useState<Square[]>(initialQueens);
    const isMouseDownRef = useRef(false);
    const currentQueenRef = useRef<Square | null>(null);

    useEffect(() => {
        const newBoard: Square[][] = [];
        for (let i = 0; i < 8; i++) {
            const newRow: Square[] = [];
            for (let j = 0; j < 8; j++) {
                newRow.push({ row: i, col: j });
            }
            newBoard.push(newRow);
        }
        setBoard(newBoard);
    }, []);

    const handleMouseDown = (row: number, col: number) => {
        isMouseDownRef.current = true;
        currentQueenRef.current = { row, col };
    };

    const handleMouseUp = () => {
        isMouseDownRef.current = false;
        currentQueenRef.current = null;
    };

    const handleMouseMove = (row: number, col: number) => {
        if (isMouseDownRef.current && currentQueenRef.current) {
            const { row: initialRow, col: initialCol } = currentQueenRef.current;
            if ((row !== initialRow || col !== initialCol) && !queens.some(queen => queen.row === row && queen.col === col)) {
                const updatedQueens = queens.map((queen) => {
                    if (queen.row === initialRow && queen.col === initialCol) {
                        return { ...queen, row, col };
                    }
                    return queen;
                });
                setQueens(updatedQueens);
                currentQueenRef.current = { row, col };
            }
        }
    };

    const isAttacked = (row: number, col: number) => {
        return queens.some((queen) => {
            if (queen.row === row && queen.col === col) {
                return false;
            }
            if (queen.row === row || queen.col === col) {
                return true;
            }
            return Math.abs(queen.row - row) === Math.abs(queen.col - col);
        });
    };

    const randomizeQueens = () => {
        const newQueens: Square[] = [];
        while (newQueens.length < 8) {
            const row = Math.floor(Math.random() * 8);
            const col = Math.floor(Math.random() * 8);
            if (!newQueens.some((queen) => queen.row === row && queen.col === col)) {
                newQueens.push({ row, col });
            }
        }
        setQueens(newQueens);
    }

    const solve = () => {
        const newQueens = solutions[Math.floor(Math.random() * solutions.length)];
        setQueens(newQueens);
    }

    return (
        <div>
            <BackButton />
            <h1 className="title">Eight Queens</h1>
            <h3 className="subtitle">Drag the queens so that none of them are being attacked!</h3>
            <div className="chess-board">
                {board.map((row, rowIndex) => (
                    row.map((square, colIndex) => (
                        <div
                            className={`${square.row % 2 === square.col % 2 ? 'white' : 'black'}`}
                            key={`${rowIndex}-${colIndex}`}
                            onMouseEnter={() => handleMouseMove(square.row, square.col)}
                            onMouseDown={() => handleMouseDown(square.row, square.col)}
                            onMouseUp={handleMouseUp}
                        >
                            {queens.some((queen) => queen.row === square.row && queen.col === square.col) ? (
                                isAttacked(square.row, square.col) ? (
                                    <img
                                        src="/img/games/eight-queens/red-queen.png"
                                        className="queen-image"
                                        alt="queen"
                                        draggable="false"
                                    />
                                ) : (
                                    <img
                                        src="/img/games/eight-queens/green-queen.png"
                                        className="queen-image"
                                        alt="queen"
                                        draggable="false"
                                    />
                                )
                            ) : (
                                ''
                            )}
                        </div>
                    ))
                ))}
            </div>

            <div className="button-container">
                <button className="button" onClick={randomizeQueens}>
                    Randomize Queens
                </button>
                <button className="button" onClick={solve}>
                    Random Solution
                </button>
        </div>
        </div>
    );
};

export default MazeSolver;