import React, { useCallback, useEffect } from "react";
import styles from "./Board.module.css";
import Logic from "../logic/Logic";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { boardActions } from "../store";

const Board = (props) => {
    const dispatch = useDispatch();
    const board = useSelector((state) => state.board.boardInitial);
    const PlayerIsX = useSelector((state) => state.board.PlayerIsX);
    const count = useSelector((state) => state.board.count);
    const clearBoard = useCallback((time) => {
        setTimeout(() => {
            dispatch(boardActions.reset());
            dispatch(boardActions.updateCount(0));
        }, time);
    }, [dispatch])
    const clickHanlder = (index) => {
        let BoardCopy = [...board];
        if (BoardCopy[index] !== null) {
            return;
        }
        BoardCopy[index] = PlayerIsX ? "X" : "O";
        dispatch(boardActions.updateBoard(BoardCopy));
        dispatch(boardActions.changePlayer());
        dispatch(boardActions.updateCount(count + 1));
    };

    useEffect(() => {
        let winner;
        if (count > 3) {
            winner = Logic(board);
            let player = !PlayerIsX ? "X" : "O";
            if (winner) {

                dispatch(boardActions.setWinner(player))
                dispatch(boardActions.hideBoard())
                clearBoard(0);

            }
        }
        if (count === 9 && !winner) {
            dispatch(boardActions.setWinner(""))
            dispatch(boardActions.hideBoard())
            clearBoard(1000);
        }
    }, [count, props, board, clearBoard, PlayerIsX, dispatch]);

    const playerXclass = PlayerIsX ? `${styles.player}` : "";
    const playerOclass = !PlayerIsX ? `${styles.player}` : "";
    return (
        <>
            <div className={styles["playerLabel"]}>
                <h3 className={playerXclass}>X</h3>
                <h3 className={playerOclass}>O</h3>
            </div>
            <section className={styles.board}>
                <div className={styles.row}>
                    <div
                        className={styles.column}
                        onClick={() => {
                            clickHanlder(0);
                        }}
                    >
                        {board[0]}
                    </div>
                    <div
                        className={styles.column}
                        onClick={() => {
                            clickHanlder(1);
                        }}
                    >
                        {board[1]}
                    </div>
                    <div
                        className={styles.column}
                        onClick={() => {
                            clickHanlder(2);
                        }}
                    >
                        {board[2]}
                    </div>
                </div>
                <div className={styles.row}>
                    <div
                        className={styles.column}
                        onClick={() => {
                            clickHanlder(3);
                        }}
                    >
                        {board[3]}
                    </div>
                    <div
                        className={styles.column}
                        onClick={() => {
                            clickHanlder(4);
                        }}
                    >
                        {board[4]}
                    </div>
                    <div
                        className={styles.column}
                        onClick={() => {
                            clickHanlder(5);
                        }}
                    >
                        {board[5]}
                    </div>
                </div>
                <div className={styles.row}>
                    <div
                        className={styles.column}
                        onClick={() => {
                            clickHanlder(6);
                        }}
                    >
                        {board[6]}
                    </div>
                    <div
                        className={styles.column}
                        onClick={() => {
                            clickHanlder(7);
                        }}
                    >
                        {board[7]}
                    </div>
                    <div
                        className={styles.column}
                        onClick={() => {
                            clickHanlder(8);
                        }}
                    >
                        {board[8]}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Board;
