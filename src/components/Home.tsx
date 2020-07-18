import React from 'react'
import {getGames} from "../selectors/getGames";
import { connect } from 'react-redux'
import classnames from 'classnames'

interface Props {
    games: Array<Game>
}

const Home: React.FC<Props> = ({games}) => {
    return (
        <main className='games'>
            <ul className="games__list">
            {games.map((g, index) => {
                return (<li key={'games-list-' + index} className={classnames('box', {
                    'double-box': g.x === 2 && g.y === 2
                })}>
                    <figure>
                        <img alt={g.image} src={'./images/' + g.image}/>
                    </figure>
                </li>);
            })}
            </ul>
        </main>
    )
}

const mapStateToProps = (state: State): Props => {
    return {
        games: getGames(state),
    }
}

export default connect(mapStateToProps)(Home)
