import React, { useState, useEffect, useCallback } from "react";
import BackButton from '../../../components/BackButton';
import '../../../styles/snake.css'

enum Direction {
    Up,
    Down,
    Left,
    Right
}

interface SnakeSegment {
    x: number;
    y: number;
}

const initialSnake: SnakeSegment[] = [
    { x: 10, y: 10 },
    { x: 10, y: 11 },
    { x: 10, y: 12 }
];

const rows = 20;
const columns = 30;

const SnakeMinusMinusMinus: React.FC = () => {
    const [snake, setSnake] = useState<SnakeSegment[]>(initialSnake);
    const [direction, setDirection] = useState(Direction.Right);
    const [startGame, setStartGame] = useState(false);
    const [score, setScore] = useState<number>(0);
    const [showWholeSnake, setShowWholeSnake] = useState(false);
    const [desiredLength, setDesiredLength] = useState<number>(2);

    const generateRandomApplePosition = useCallback(() => {
        // If the snake is as long as there are cells on the board, the game is won
        if (snake.length === rows * columns) {
            return { x: -1, y: -1 };
        }
    
        let newApple: SnakeSegment | undefined;
    
        const isOccupied = (segment: SnakeSegment) => segment.x === newApple!.x && segment.y === newApple!.y;
    
        do {
            newApple = {
                x: Math.floor(Math.random() * columns),
                y: Math.floor(Math.random() * rows)
            };
        } while (snake.some(isOccupied));
    
        return newApple!;
    }, [snake]);

    const [apple, setApple] = useState(generateRandomApplePosition());

    const handleStartGame = useCallback(() => {
        setScore(2);
        setDesiredLength(2);
        setSnake(initialSnake);
        setDirection(Direction.Right);
        setApple(generateRandomApplePosition());
        setStartGame(true);
    }, [generateRandomApplePosition]);

    const moveSnake = useCallback(() => {
        const head = { ...snake[0] };
    
        switch (direction) {
            case Direction.Up:
                head.y -= 1;
                break;
            case Direction.Down:
                head.y += 1;
                break;
            case Direction.Left:
                head.x -= 1;
                break;
            case Direction.Right:
                head.x += 1;
                break;
        }
    
        if (
            head.x < 0 ||
            head.x >= columns ||
            head.y < 0 ||
            head.y >= rows ||
            snake.some(segment => segment.x === head.x && segment.y === head.y)
        ) {
            // Snake hits the edge or itself, reset the game
            setStartGame(false);
            setShowWholeSnake(true);
            return;
        }
    
        const newSnake = [head, ...snake];
    
        if (head.x === apple.x && head.y === apple.y) {
            // Snake eats the apple, generate a new apple and double the score
            setApple(generateRandomApplePosition());
            setShowWholeSnake(true);
            setDesiredLength(prevLength => prevLength * 2); // Double the desired length
        } else if (newSnake.length > desiredLength) {
            // Remove the last segment of the snake if it exceeds the desired length
            newSnake.pop();
        }

        setScore(newSnake.length);
    
        setSnake(newSnake);
    }, [snake, direction, apple, desiredLength, generateRandomApplePosition]);
    
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!startGame && event.key === " ") {
                handleStartGame();
            }

            switch (event.key) {
                case "ArrowUp":
                    setDirection(Direction.Up);
                    break;
                case "ArrowDown":
                    setDirection(Direction.Down);
                    break;
                case "ArrowLeft":
                    setDirection(Direction.Left);
                    break;
                case "ArrowRight":
                    setDirection(Direction.Right);
                    break;
            }
        };

        document.body.addEventListener("keydown", handleKeyDown);

        if (startGame) {
            const interval = setInterval(moveSnake, 50);
            return () => {
                document.body.removeEventListener("keydown", handleKeyDown);
                clearInterval(interval);
            };
        }
    }, [startGame, moveSnake, handleStartGame]);

    useEffect(() => {
        if (showWholeSnake && startGame) {
            const timeout = setTimeout(() => {
                if(startGame) {
                    setShowWholeSnake(false);
                }
            }, 1000);
            return () => {
                clearTimeout(timeout);
            };
        }
    }, [showWholeSnake, startGame]);

    return (
        <div>
            <BackButton />
            <div className="App">
                <h1 className="title">Snake---</h1>
                <div className="score">{`Score: ${score}`}</div>
                <div className="game-board">
                    {Array.from(Array(rows), (_, row) =>
                        Array.from(Array(columns), (_, col) => {
                            const isHead = snake[0].x === col && snake[0].y === row;
                            const isSnake = isHead || (showWholeSnake && snake.some(segment => segment.x === col && segment.y === row));
                            const isApple = apple.x === col && apple.y === row;

                            return (
                                <div
                                    className={`cell ${isSnake ? "snake" : ""} ${isHead ? "head" : ""} ${isApple ? "apple" : ""}`}
                                    key={`${col}-${row}`}
                                ></div>
                            );
                        })
                    )}
                </div>
                {!startGame && (
                    <button className="button start" onClick={handleStartGame}>
                        Start (Space)
                    </button>
                )}
            </div>
        </div>
    );
};

export default SnakeMinusMinusMinus;
