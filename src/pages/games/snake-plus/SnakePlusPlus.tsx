import React, { useState, useEffect, useCallback } from "react";
import BackButton from "../../../components/BackButton";
import "../../../styles/snake.css";

// import React from 'react';

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
const enemySpeed = 50;
const enemyKillableDuration = 3000; // ms

const SnakePlusPlus: React.FC = () => {
    const [snake, setSnake] = useState<SnakeSegment[]>(initialSnake);
    const [direction, setDirection] = useState(Direction.Right);
    const [startGame, setStartGame] = useState(false);
    const [score, setScore] = useState<number>(0);
    const [desiredLength, setDesiredLength] = useState<number>(2);
    const [enemySnake, setEnemySnake] = useState<SnakeSegment[]>(intialEnemySnake);
    const [enemyKillable, setEnemyKillable] = useState<boolean>(false);

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
        setEnemySnake(intialEnemySnake);
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

        const hitEnemySnake = snake.some(
            segment =>
                enemySnake.some(
                    enemySegment =>
                        enemySegment.x === segment.x && enemySegment.y === segment.y
                )
        )

        if (
            head.x < 0 ||
            head.x >= columns ||
            head.y < 0 ||
            head.y >= rows ||
            snake.some(segment => segment.x === head.x && segment.y === head.y) ||
            (!enemyKillable && hitEnemySnake)
        ) {
            // Snake hits the edge or itself, reset the game
            setStartGame(false);
            return;
        }

        // If the snakes collide and the enemy is killable, remove the last enemy segment
        if (hitEnemySnake && enemyKillable) {
            setEnemySnake(enemySnake.slice(0, -1));
        }

        const newSnake = [head, ...snake];

        if (head.x === apple.x && head.y === apple.y) {
            // Snake eats the apple, generate a new apple and double the score
            setApple(generateRandomApplePosition());
            setDesiredLength(prevLength => prevLength * 2); // Double the desired length
            // Set enemy as killable
            setEnemyKillable(true);
            setTimeout(() => {
                // Technically problematic if a new game is started before the timeout, but it's fine for now
                setEnemyKillable(false);
            }, enemyKillableDuration);
        } else if (newSnake.length > desiredLength) {
            // Remove the last segment of the snake if it exceeds the desired length
            newSnake.pop();
        }

        setScore(newSnake.length);

        setSnake(newSnake);
    }, [snake, direction, apple, desiredLength, enemyKillable, enemySnake, generateRandomApplePosition]);

    const moveEnemySnake = useCallback(() => {

        // If the enemy is length 0 (dead), return
        if (enemySnake.length === 0) {
            return;
        }

        const enemyHead = { ...enemySnake[0] };
        const playerHead = { ...snake[0] };

        if (!enemyKillable) {

            if (playerHead.x < enemyHead.x) {
                enemyHead.x -= 1;
            } else if (playerHead.x > enemyHead.x) {
                enemyHead.x += 1;
            } else if (playerHead.y < enemyHead.y) {
                enemyHead.y -= 1;
            } else if (playerHead.y > enemyHead.y) {
                enemyHead.y += 1;
            }
        }

        else {
            // If killable, move in the opposite direction -- that is, away from the player

            if (playerHead.x < enemyHead.x) {
                enemyHead.x += 1;
            }
            else if (playerHead.x > enemyHead.x) {
                enemyHead.x -= 1;
            }
            else if (playerHead.y < enemyHead.y) {
                enemyHead.y += 1;
            }
            else if (playerHead.y > enemyHead.y) {
                enemyHead.y -= 1;
            }

        }

        const newEnemySnake = [enemyHead, ...enemySnake.slice(0, -1)];

        setEnemySnake(newEnemySnake);


    }, [enemySnake, snake, enemyKillable]);

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
                <h1 className="title">Snake++</h1>
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
                                    className={`cell ${isSnake ? "snake" : ""
                                        } ${isApple ? "apple" : ""} ${isEnemySnake ? (enemyKillable ? "enemy-snake-killable" : "enemy-snake") : ""
                                        }`}
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

export default SnakePlusPlus;
