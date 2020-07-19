export const getGames = (state: State) => {
    const searchHelper = (state: State) => (g: Game): boolean => {
        if (state.search === null) {
            return true
        }

        return g.name.toLocaleLowerCase().startsWith(state.search.toLocaleLowerCase())
    }

    if (state.filter === 'all') {
        return [...state.games].filter(searchHelper(state)).slice()
    } else if (state.filter === 'new') {
        return state.games.filter((game) => game.new).filter(searchHelper(state)).slice()
    }

    return state.games.filter((game) => game.top).filter(searchHelper(state)).slice()
}
