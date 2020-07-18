import React from 'react'
import {getGames} from "../selectors/getGames";
import { connect } from 'react-redux'

interface Props {
    games: Array<Game>
}

const Home: React.FC<Props> = ({games}) => {
    return (
        <div>
            {games.map((g, index) => {
               return (<span key={'games' + index}>{g.name}
               <img alt={g.image} src={'./images/' + g.image}/>
               </span>)
            })}
        </div>
    )
}

const mapStateToProps = (state: State): Props => {
    return {
        games: getGames(state),
    }
}

export default connect(mapStateToProps)(Home)
