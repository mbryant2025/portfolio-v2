import React, { useState, useEffect } from "react";
import BackButton from '../../components/BackButton';
import '../../components/styles/maze.css';

enum CellType {
    Wall,
    Open,
    Start,
    End,
    Path
}

interface MazeCell {
    x: number;
    y: number;
    type: CellType;
    gCost: number;
    hCost: number;
    parent?: MazeCell | null;
    fCost?: number;
}

const rows = 20;
const columns = 25;

var startPoint = { x: 3, y: 3 };
var endPoint = { x: 17, y: 11 };

var diagonalNeighbors = false;

const solveMaze = (newMaze: MazeCell[][]) => {

    const openList: MazeCell[] = [];

    // Remove all path cells, treating them as open cells
    newMaze.forEach(row => {
        row.forEach(cell => {
            if (cell.type === CellType.Path) {
                cell.type = CellType.Open;
            }
        });
    }
    );

    const closedList: MazeCell[] = [];

    const startNode = newMaze[startPoint.y][startPoint.x];
    const endNode = newMaze[endPoint.y][endPoint.x];

    openList.push(startNode);

    while (openList.length > 0) {
        // A* Algorithm implementation
        let currentNode = openList[0];
        for (let i = 1; i < openList.length; i++) {
            if (openList[i].fCost! < currentNode.fCost!) {
                currentNode = openList[i];
            }
        }

        const currentIndex = openList.indexOf(currentNode);
        openList.splice(currentIndex, 1);
        closedList.push(currentNode);

        if (currentNode === endNode) {
            // Path found, reconstruct path and update maze
            let current = currentNode;
            const path: MazeCell[] = [];
            while (current?.parent) {
                //log length of path
                // If the current is the start, don't add it to the path
                if (current === startNode) {
                    break;
                }
                console.log(path.length);
                //log the location of the parent
                console.log(current.parent.x, current.parent.y);
                path.push(current);
                current = current.parent;
            }
            path.reverse().forEach(cell => {
                newMaze[cell.y][cell.x].type = CellType.Path;
            });
            break;
        }

        const neighbors = [];
        const { x, y } = currentNode;// Fetch neighboring cells
        if (x > 0) neighbors.push(newMaze[y][x - 1]);
        if (x < columns - 1) neighbors.push(newMaze[y][x + 1]);
        if (y > 0) neighbors.push(newMaze[y - 1][x]);
        if (y < rows - 1) neighbors.push(newMaze[y + 1][x]);

        // Diagonal neighbors
        if (diagonalNeighbors) {
            if (x > 0 && y > 0) neighbors.push(newMaze[y - 1][x - 1]);
            if (x < columns - 1 && y > 0) neighbors.push(newMaze[y - 1][x + 1]);
            if (x > 0 && y < rows - 1) neighbors.push(newMaze[y + 1][x - 1]);
            if (x < columns - 1 && y < rows - 1) neighbors.push(newMaze[y + 1][x + 1]);
        }

        for (const neighbor of neighbors) {
            if (neighbor.type === CellType.Wall || closedList.includes(neighbor)) {
                continue;
            }

            // Cost is 1 if the neighbor is not diagonal, sqrt(2) if it is diagonal
            const movementCostToNeighbor = currentNode.gCost + (neighbor.x === currentNode.x || neighbor.y === currentNode.y ? 1 : 1.414);

            if (!openList.includes(neighbor) || movementCostToNeighbor < neighbor.gCost) {
                neighbor.gCost = movementCostToNeighbor;
                neighbor.hCost = Math.abs(neighbor.x - endNode.x) + Math.abs(neighbor.y - endNode.y); // Should in theory be Math.sqrt((neighbor.x - endNode.x)^2 + (neighbor.y - endNode.y)^2) but this is faster
                neighbor.fCost = neighbor.gCost + neighbor.hCost;
                neighbor.parent = currentNode;

                if (!openList.includes(neighbor)) {
                    openList.push(neighbor);
                }
            }
        }
    }

    // Reset the end so that it's not a path
    newMaze[endPoint.y][endPoint.x].type = CellType.End;

    return newMaze;
};

const MazeSolver: React.FC = () => {
    const [maze, setMaze] = useState<MazeCell[][]>([]);
    const [selectedType, setSelectedType] = useState<CellType>(CellType.Wall);
    const [isMouseDown, setIsMouseDown] = useState(false);

    const handleMouseDown = () => {
        setIsMouseDown(true);
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('maze.json'); // Replace with your JSON file path
                const data = await response.json();

                const mazeData: number[][] = data.maze;
                startPoint = data.startPoint;
                endPoint = data.endPoint;

                const newMaze: MazeCell[][] = [];
                for (let y = 0; y < mazeData.length; y++) {
                    const row = [];
                    for (let x = 0; x < mazeData[y].length; x++) {
                        row.push({
                            x,
                            y,
                            type: mazeData[y][x] === 0 ? CellType.Open : CellType.Wall,
                            gCost: 0,
                            hCost: 0,
                        });
                    }
                    newMaze.push(row);
                }

                // Set the start and end points
                newMaze[startPoint.y][startPoint.x].type = CellType.Start;
                newMaze[endPoint.y][endPoint.x].type = CellType.End;

                const solvedMaze = solveMaze(newMaze);
                setMaze(solvedMaze);
            } catch (error) {
                console.error('Error fetching maze data:', error);
            }
        };

        fetchData();
    }, []);

    const clearMaze = () => {
        const newMaze: MazeCell[][] = [];
        for (let y = 0; y < rows; y++) {
            const row = [];
            for (let x = 0; x < columns; x++) {
                row.push({
                    x,
                    y,
                    type: CellType.Open,
                    gCost: 0,
                    hCost: 0,
                });
            }
            newMaze.push(row);
        }

        // Set the start and end points
        newMaze[startPoint.y][startPoint.x].type = CellType.Start;
        newMaze[endPoint.y][endPoint.x].type = CellType.End;

        const solvedMaze = solveMaze(newMaze);

        setMaze(solvedMaze);
    }

    const loadMaze = () => {
        const fetchData = async () => {
            try {
                const response = await fetch('maze.json'); // Replace with your JSON file path
                const data = await response.json();

                const mazeData: number[][] = data.maze;
                startPoint = data.startPoint;
                endPoint = data.endPoint;

                const newMaze: MazeCell[][] = [];
                for (let y = 0; y < mazeData.length; y++) {
                    const row = [];
                    for (let x = 0; x < mazeData[y].length; x++) {
                        row.push({
                            x,
                            y,
                            type: mazeData[y][x] === 0 ? CellType.Open : CellType.Wall,
                            gCost: 0,
                            hCost: 0,
                        });
                    }
                    newMaze.push(row);
                }

                // Set the start and end points
                newMaze[startPoint.y][startPoint.x].type = CellType.Start;
                newMaze[endPoint.y][endPoint.x].type = CellType.End;

                const solvedMaze = solveMaze(newMaze);
                setMaze(solvedMaze);
            } catch (error) {
                console.error('Error fetching maze data:', error);
            }
        };

        fetchData();
    }

    const handleCellClick = (x: number, y: number) => {
        const updatedMaze = maze.map(row => row.slice()); // Create a new copy of the maze

        const clickedCell = updatedMaze[y][x];

        if (selectedType === CellType.Wall || selectedType === CellType.Open) {

            // If the clicked cell is a wall and the current type is wall, make it open
            if (clickedCell.type === CellType.Wall && selectedType === CellType.Wall) {
                clickedCell.type = CellType.Open;
            }

            // Only update the cell if it's not the start or end
            else if (clickedCell.type !== CellType.Start && clickedCell.type !== CellType.End) {
                clickedCell.type = selectedType;
            }
        }

        if (selectedType === CellType.Start) {
            const existingStart = updatedMaze.flat().find(cell => cell.type === CellType.Start && cell !== clickedCell);

            // Check that the clicked cell is not the end
            if (clickedCell.type !== CellType.End) {
                if (existingStart) existingStart.type = CellType.Open;

                clickedCell.type = CellType.Start;
                startPoint = { x, y };
            }

        } else if (selectedType === CellType.End) {
            const existingEnd = updatedMaze.flat().find(cell => cell.type === CellType.End && cell !== clickedCell);

            // Check that the clicked cell is not the start
            if (clickedCell.type !== CellType.Start) {
                if (existingEnd) existingEnd.type = CellType.Open;

                clickedCell.type = CellType.End;
                endPoint = { x, y };
            }
        }

        const solvedMaze = solveMaze(updatedMaze);

        setMaze(solvedMaze);
    };

    const handleCellEnter = (x: number, y: number) => {
        if (isMouseDown) {
            handleCellClick(x, y); // Trigger cell click when the mouse is down and entering cells
        }
    };

    const changeDiagonalNeighbors = () => {
        diagonalNeighbors = !diagonalNeighbors;

        // Make copy of maze
        const newMaze = maze.map(row => row.slice());

        const solvedMaze = solveMaze(newMaze);

        setMaze(solvedMaze);

    };

    return (
        <div>
            <BackButton />
            <h1 className="title">Maze Solver</h1>
            <div className="maze-board" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
                {maze.map((row, rowIndex) =>
                    row.map((cell, colIndex) => (
                        <div
                            className={`${cell.type === CellType.Start ? "maze-start-cell" :
                                cell.type === CellType.End ? "maze-end" :
                                    cell.type === CellType.Wall ? "maze-wall" :
                                        cell.type === CellType.Path ? "maze-path" : "maze-cell"
                                }`}
                            key={`${colIndex}-${rowIndex}`}
                            onClick={() => handleCellClick(colIndex, rowIndex)}
                            onMouseEnter={() => handleCellEnter(colIndex, rowIndex)}
                        ></div>
                    ))
                )}
            </div>

            <div className="maze-buttons">
                <button
                    className={`button ${selectedType === CellType.Wall ? 'maze-wall-button-selected' : 'maze-wall-button'}`}
                    onClick={() => setSelectedType(CellType.Wall)}
                >
                    Wall
                </button>
                <button
                    className={`button ${selectedType === CellType.Open ? 'maze-open-button-selected' : 'maze-open-button'}`}
                    onClick={() => setSelectedType(CellType.Open)}
                >
                    Open
                </button>
                <button
                    className={`button ${selectedType === CellType.Start ? 'maze-start-button-selected' : 'maze-start-button'}`}
                    onClick={() => setSelectedType(CellType.Start)}
                >
                    Start
                </button>
                <button
                    className={`button ${selectedType === CellType.End ? 'maze-end-button-selected' : 'maze-end-button'}`}
                    onClick={() => setSelectedType(CellType.End)}
                >
                    End
                </button>
            </div>
            {/* button to toggle diagonal neighbors */}
            <div className="maze-buttons">
                <button
                    className={`button ${diagonalNeighbors ? 'maze-diagonal-button-selected' : 'maze-diagonal-button'}`}
                    onClick={() => changeDiagonalNeighbors()}
                >
                    Diagonal Neighbors
                </button>

                <button
                    className={`button maze-clear-button`}
                    onClick={() => clearMaze()}
                >
                    Clear Maze
                </button>

                <button
                    className={`button maze-load-button`}
                    onClick={() => loadMaze()}
                >
                    Load Maze
                </button>

                <button
                    className={`button`}
                    onClick={() => window.location.href = 'https://michaelcbryant.com/#/projects/maze-solver'}
                >
                    Read More
                </button>


            </div>
        </div>
    );
}

export default MazeSolver;
