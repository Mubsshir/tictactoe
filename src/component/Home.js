import React from 'react'
import styles from './Home.module.css'
import Board from './Board'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { boardActions } from '../store'
import { useSelector } from 'react-redux'
import Result from './Result'
const Home = () => {
    const dispatch = useDispatch();
    const boardIsShown = useSelector(state => state.board.boardIsShown)
    const result = useSelector(state => state.board.result);
    const winner = useSelector(state => state.board.winner);
    const newGameStart = () => {
        dispatch(boardActions.reset())
        dispatch(boardActions.showBoard())
    }
    let message;
    switch (winner) {
        case "X":
            message = "X Win"
            break
        case "O":
            message = "O Win"
            break
        default:
            message = "Draw"

    }
    return (
        <div className={styles.Home}>
            <section className={styles.Banner}>
                <h3 className={styles.topText}>Tic</h3>
                <h3>Tac Toe</h3>
                <button onClick={newGameStart}>
                    Start New Game
                </button>
            </section>
            <section className={styles.Board}>
                {boardIsShown && <Board />}
                {result && <Result message={message} />}
            </section>
        </div>
    )
}

export default Home