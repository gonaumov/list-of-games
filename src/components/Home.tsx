import React from 'react'
import {getGames} from "../selectors/getGames";
import { connect } from 'react-redux'
import classnames from 'classnames'

interface Props {
    games: Array<Game>
}

const Home: React.FC<Props> = ({games}) => {
    return (
        <div className='games-wrapper'>
            {games.map((g, index) => {
               return (<div className={classnames({
                'double-box': g.x === 2 && g.y === 2
               })} key={'games' + index}>
               <img alt={g.image} src={'./images/' + g.image}/>
               </div>)
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
