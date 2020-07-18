export const getGames = (state: State) => {
    if (state.filter === "all") {
        return [...state.games]
    } else if (state.filter === 'new') {
        return state.games.filter((game) => game.new).slice()
    }

    return state.games.filter((game) => game.top).slice()
}
