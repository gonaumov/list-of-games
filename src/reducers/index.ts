import  * as actionTypes  from '../constants/ActionTypes'
import { initialState } from '../initialState'
import { Action } from 'redux'

interface GamesAction extends Action {
   filter: filter
}

export const reducer =  (state: State = initialState, action: GamesAction): State => {
    switch (action.type) {
        case actionTypes.SET_FILTER: {
            const { filter } = action
            return {
                ...state,
                filter
            }
        }
        default:
            return state
    }
}
