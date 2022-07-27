
const Logic = (boardState) => {
    let winner = false
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    winningConditions.forEach(condition => {
        const [a, b, c] = condition;
        if (boardState[a] && (boardState[a] === boardState[b] && boardState[a] === boardState[c])) {
            console.log("ehll")
            winner = true
            console.log(winner)
        }
    })

    return winner;

}
export default Logic;