"use client";
import type { JSX } from "react";
import { useState, useCallback } from "react";
import styles from "./TicTacToe.module.css";

type Player = "X" | "O" | null;
type Board = Player[];
type GameStatus = "waiting" | "playing" | "won" | "lost" | "draw";

const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function checkWinner(board: Board): Player {
    for (const [a, b, c] of WINNING_COMBINATIONS) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}

function isBoardFull(board: Board): boolean {
    return board.every((cell) => cell !== null);
}

function getAvailableMoves(board: Board): number[] {
    return board.map((cell, index) => (cell === null ? index : -1)).filter((index) => index !== -1);
}

// https://en.wikipedia.org/wiki/Tic-tac-toe#Strategy
function minimax(board: Board, isMaximizing: boolean): number {
    const winner = checkWinner(board);

    if (winner === "X") return 10;
    if (winner === "O") return -10;
    if (isBoardFull(board)) return 0;

    const availableMoves = getAvailableMoves(board);

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (const move of availableMoves) {
            const newBoard = [...board];
            newBoard[move] = "X";
            const score = minimax(newBoard, false);
            bestScore = Math.max(score, bestScore);
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (const move of availableMoves) {
            const newBoard = [...board];
            newBoard[move] = "O";
            const score = minimax(newBoard, true);
            bestScore = Math.min(score, bestScore);
        }
        return bestScore;
    }
}

function getBestMove(board: Board): number {
    let bestScore = -Infinity;
    let bestMove = -1;
    const availableMoves = getAvailableMoves(board);

    for (const move of availableMoves) {
        const newBoard = [...board];
        newBoard[move] = "X";
        const score = minimax(newBoard, false);
        if (score > bestScore) {
            bestScore = score;
            bestMove = move;
        }
    }

    return bestMove;
}

function getRandomMove(board: Board): number {
    const availableMoves = getAvailableMoves(board);
    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
}

export default function TicTacToe(): JSX.Element {
    const [board, setBoard] = useState<Board>(Array(9).fill(null));
    const [gameStatus, setGameStatus] = useState<GameStatus>("waiting");
    const [computerGoesFirst, setComputerGoesFirst] = useState(true);
    const [isComputerTurn, setIsComputerTurn] = useState(false);
    const [score, setScore] = useState({ computer: 0, player: 0, draws: 0 });

    const makeComputerMove = useCallback((currentBoard: Board, isFirstMove: boolean) => {
        const move = isFirstMove ? getRandomMove(currentBoard) : getBestMove(currentBoard);

        if (move === -1) return;

        const newBoard = [...currentBoard];
        newBoard[move] = "X";
        setBoard(newBoard);

        const winner = checkWinner(newBoard);
        if (winner === "X") {
            setGameStatus("lost");
            setScore((s) => ({ ...s, computer: s.computer + 1 }));
        } else if (isBoardFull(newBoard)) {
            setGameStatus("draw");
            setScore((s) => ({ ...s, draws: s.draws + 1 }));
        } else {
            setIsComputerTurn(false);
        }
    }, []);

    const startGame = useCallback(() => {
        const newBoard: Board = Array(9).fill(null);
        setBoard(newBoard);
        setGameStatus("playing");

        if (computerGoesFirst) {
            setIsComputerTurn(true);
            setTimeout(() => makeComputerMove(newBoard, true), 300);
        } else {
            setIsComputerTurn(false);
        }
    }, [computerGoesFirst, makeComputerMove]);

    const handleToggleFirst = (computerFirst: boolean) => {
        setComputerGoesFirst(computerFirst);
    };

    const handleCellClick = (index: number) => {
        if (board[index] || isComputerTurn || gameStatus !== "playing") return;

        const newBoard = [...board];
        newBoard[index] = "O";
        setBoard(newBoard);

        const winner = checkWinner(newBoard);
        if (winner === "O") {
            setGameStatus("won");
            setScore((s) => ({ ...s, player: s.player + 1 }));
        } else if (isBoardFull(newBoard)) {
            setGameStatus("draw");
            setScore((s) => ({ ...s, draws: s.draws + 1 }));
        } else {
            setIsComputerTurn(true);
            setTimeout(() => makeComputerMove(newBoard, false), 300);
        }
    };

    const getStatusMessage = () => {
        switch (gameStatus) {
            case "waiting":
                return "";
            case "won":
                return "You won! (This shouldn't happen...)";
            case "lost":
                return "Computer wins!";
            case "draw":
                return "It's a draw!";
            default:
                return isComputerTurn ? "Computer is thinking..." : "Your turn (O)";
        }
    };

    const isGameOver = gameStatus === "won" || gameStatus === "lost" || gameStatus === "draw";
    const showStartButton = gameStatus === "waiting" || isGameOver;

    return (
        <div className={styles.container}>
            <div className={styles.gameArea}>
                <div className={styles.sidebar}>
                    <div className={styles.scoreboard}>
                        <h3 className={styles.scoreTitle}>Score</h3>
                        <div className={styles.scoreRow}>
                            <span className={styles.scoreLabel}>
                                Computer <span className={styles.scoreMarker}>(X)</span>:
                            </span>
                            <span className={styles.scoreValue}>{score.computer}</span>
                        </div>
                        <div className={styles.scoreRow}>
                            <span className={styles.scoreLabel}>
                                You <span className={styles.scoreMarker}>(O)</span>:
                            </span>
                            <span className={styles.scoreValue}>{score.player}</span>
                        </div>
                        <div className={styles.scoreRow}>
                            <span className={styles.scoreLabel}>Draws</span>
                            <span className={styles.scoreValue}>{score.draws}</span>
                        </div>
                    </div>

                    <div className={styles.toggleContainer}>
                        <span className={styles.toggleLabel}>Who goes first:</span>
                        <div className={styles.toggle}>
                            <button className={`${styles.toggleButton} ${computerGoesFirst ? styles.active : ""}`} onClick={() => handleToggleFirst(true)}>
                                Computer
                            </button>
                            <button className={`${styles.toggleButton} ${!computerGoesFirst ? styles.active : ""}`} onClick={() => handleToggleFirst(false)}>
                                You
                            </button>
                        </div>
                    </div>

                    <button className={styles.resetButton} onClick={startGame}>
                        {showStartButton ? "Start Game" : "New Game"}
                    </button>
                </div>

                <div className={styles.boardArea}>
                    <div className={styles.board}>
                        {board.map((cell, index) => (
                            <button
                                key={index}
                                className={`${styles.cell} ${cell === "X" ? styles.x : cell === "O" ? styles.o : ""}`}
                                onClick={() => handleCellClick(index)}
                                disabled={!!cell || isComputerTurn || gameStatus !== "playing"}
                                aria-label={`Cell ${index + 1}, ${cell ?? "empty"}`}
                            >
                                {cell}
                            </button>
                        ))}
                    </div>
                    <div className={styles.status}>{getStatusMessage()}</div>
                </div>
            </div>
        </div>
    );
}
