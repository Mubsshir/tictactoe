import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    boardInitial: [null, null, null, null, null, null, null, null, null],
    PlayerIsX: true,
    count: 0,
    winner: null,
    boardIsShown: true,
    result: false

}
const boardSlice = createSlice({
    name: "board",
    initialState: initialState,
    reducers: {
        updateBoard(state, action) {
            state.boardInitial = action.payload;
        },
        reset(state) {
            state.boardInitial = [null, null, null, null, null, null, null, null, null]
        },
        changePlayer(state) {
            state.PlayerIsX = !state.PlayerIsX
        },
        updateCount(state, action) {
            state.count = action.payload;
        },
        setWinner(state, action) {
            console.log(action.payload)
            state.winner = action.payload
        },
        showBoard(state) {
            state.boardIsShown = true
            state.result = false
        },
        hideBoard(state) {
            state.boardIsShown = false
            state.result = true
        }

    }
})
const store = configureStore({
    reducer: { board: boardSlice.reducer }
})
export const boardActions = boardSlice.actions;
export default store;