import React, { useState, useEffect, useCallback } from "react";
import BackButton from "../../components/BackButton";
import "../../components/styles/snake.css";

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
    { x: 10, y: 11 }
];

const intialEnemySnake: SnakeSegment[] = [
    { x: 5, y: 10 },
    { x: 5, y: 11 },
    { x: 5, y: 12 },
    { x: 5, y: 13 }
];

const rows = 20;
const columns = 30;
const enemySpeed = 25;

const SnakePlusPlusPlus: React.FC = () => {
    const [snake, setSnake] = useState<SnakeSegment[]>(initialSnake);
    const [direction, setDirection] = useState(Direction.Right);
    const [apple, setApple] = useState(generateRandomApplePosition());
    const [startGame, setStartGame] = useState(false);
    const [score, setScore] = useState<number>(0);
    const [desiredLength, setDesiredLength] = useState<number>(2);
    const [enemySnake, setEnemySnake] = useState<SnakeSegment[]>(intialEnemySnake);

    function generateRandomApplePosition() {
        // If the snake is as long as there are cells on the board, the game is won
        if (snake.length === rows * columns) {
            return { x: -1, y: -1 };
        }
        let newApple: SnakeSegment;

        // First, try the four corners
        const corners = [
            { x: 0, y: 0 },
            { x: columns - 1, y: 0 },
            { x: 0, y: rows - 1 },
            { x: columns - 1, y: rows - 1 }
        ];

        // Shuffle the corners
        for (let i = corners.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [corners[i], corners[j]] = [corners[j], corners[i]];
        }

        for (const corner of corners) {
            if (
                !snake.some(
                    segment => segment.x === corner.x && segment.y === corner.y
                )
            ) {
                return corner;
            }
        }

        do {
            newApple = {
                x: Math.floor(Math.random() * columns),
                y: Math.floor(Math.random() * rows)
            };
        } while (
            snake.some(
                segment => segment.x === newApple.x && segment.y === newApple.y
            )
        );
        return newApple;
    }

    const handleStartGame = () => {
        setScore(2);
        setDesiredLength(2);
        setSnake(initialSnake);
        setEnemySnake(intialEnemySnake);
        setDirection(Direction.Right);
        setApple(generateRandomApplePosition());
        setStartGame(true);
    };

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
            snake.some(segment => segment.x === head.x && segment.y === head.y) ||
            snake.some(
                segment =>
                    enemySnake.some(
                        enemySegment =>
                            enemySegment.x === segment.x && enemySegment.y === segment.y
                    )
            )
        ) {
            // Snake hits the edge or itself, reset the game
            setStartGame(false);
            return;
        }

        const newSnake = [head, ...snake];

        if (head.x === apple.x && head.y === apple.y) {
            // Snake eats the apple, generate a new apple and double the score
            setApple(generateRandomApplePosition());
            setDesiredLength(prevLength => prevLength * 2); // Double the desired length
        } else if (newSnake.length > desiredLength) {
            // Remove the last segment of the snake if it exceeds the desired length
            newSnake.pop();
        }

        setScore(newSnake.length);

        setSnake(newSnake);
    }, [snake, direction, apple, desiredLength, score]);

    const moveEnemySnake = useCallback(() => {
        const enemyHead = { ...enemySnake[0] };
        const playerHead = { ...snake[0] };

        if (playerHead.x < enemyHead.x) {
            enemyHead.x -= 1;
        } else if (playerHead.x > enemyHead.x) {
            enemyHead.x += 1;
        } else if (playerHead.y < enemyHead.y) {
            enemyHead.y -= 1;
        } else if (playerHead.y > enemyHead.y) {
            enemyHead.y += 1;
        }

        const newEnemySnake = [enemyHead, ...enemySnake.slice(0, -1)];

        setEnemySnake(newEnemySnake);
    }, [enemySnake, snake]);

    // const moveSnakes = useCallback(() => {
    //     moveSnake();
    //     moveEnemySnake();
    // }, [moveSnake, moveEnemySnake]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!startGame && event.key === " ") {
                handleStartGame();
            }

            // Hehe
            switch (event.key) {
                case "ArrowUp":
                    setDirection(Direction.Right);
                    break;
                case "ArrowDown":
                    setDirection(Direction.Up);
                    break;
                case "ArrowLeft":
                    setDirection(Direction.Down);
                    break;
                case "ArrowRight":
                    setDirection(Direction.Left);
                    break;
            }
        };

        document.body.addEventListener("keydown", handleKeyDown);

        if (startGame) {
            const interval = setInterval(moveSnake, 20);
            return () => {
                document.body.removeEventListener("keydown", handleKeyDown);
                clearInterval(interval);
            };
        }
    }, [startGame, moveSnake]);

    useEffect(() => {
        if (startGame) {
            const enemyInterval = setInterval(moveEnemySnake, enemySpeed);
            return () => {
                clearInterval(enemyInterval);
            };
        }
    }, [startGame, moveEnemySnake]);

    return (
        <div>
            <BackButton />
            <div className="App">
                <h1 className="title">Snake+++</h1>
                <div className="score">{`Score: ${score}`}</div>
                <div className="game-board">
                    {Array.from(Array(rows), (_, row) =>
                        Array.from(Array(columns), (_, col) => {
                            const isSnake = snake.some(
                                segment => segment.x === col && segment.y === row
                            );
                            const isApple = apple.x === col && apple.y === row;
                            const isEnemySnake = enemySnake.some(
                                segment => segment.x === col && segment.y === row
                            );

                            return (
                                <div
                                    className={`cell ${isSnake ? "snake" : ""} ${isApple ? "apple" : ""
                                        } ${isEnemySnake ? "enemy-snake" : ""}`}
                                    key={`${col}-${row}`}
                                ></div>
                            );
                        })
                    )}
                </div>
                {!startGame && (
                    <button className="button start" onClick={handleStartGame}>
                        Start
                    </button>
                )}
            </div>
        </div>
    );
};

export default SnakePlusPlusPlus;
