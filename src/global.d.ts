interface Game {
    name: string,
    x: number,
    y: number,
    new: boolean,
    top: boolean
    image: string
}

type filter = 'all' | 'top' | 'new'

interface State {
    games: Array<Game>
    filter: filter
    search: string | null
}
