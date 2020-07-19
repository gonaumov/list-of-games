import React from 'react'
import {getGames} from "../selectors/getGames";
import {connect, MapDispatchToProps} from 'react-redux'
import classnames from 'classnames'
import {filterAction, searchAction} from "../actions";
import {Action, Dispatch} from "redux";

interface Props {
    games: Array<Game>
}

interface DispatchProps {
    search: typeof searchAction,
    filter: typeof filterAction
}

const Home: React.FC<Props & DispatchProps> = ({games, filter, search}) => {
    return (<>
        <header>
            <h1>Slots</h1>
            <span className='all' onClick={() => filter('all')}>ALL</span>
        <span className='new' onClick={() => filter('new')}>NEW</span>
        <span  className='top' onClick={() => filter('top')}>TOP</span>
        <input className='search' type='text' onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) =>
            event.currentTarget.value.length > 0 ? search(event.currentTarget.value) : search(null)}/>
        </header>
        <main className='games'>
            <ul className="games__list">
            {games.map((g, index) => {
                return (<li key={'games-list-' + index} className={classnames('box', {
                    'double-box': g.x === 2 && g.y === 2
                })}>
                    <figure>
                        <img title={g.name} alt={g.image} src={'./images/' + g.image}/>
                    </figure>
                </li>);
            })}
            </ul>
        </main>
    </>)
}

const mapStateToProps = (state: State): Props => {
    return {
        games: getGames(state),
    }
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (dispatch: Dispatch<Action>) => {
    return {
        search: (search) => (
            dispatch(searchAction(search))
        ),
        filter: (filter) => (
            dispatch(filterAction(filter))
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
