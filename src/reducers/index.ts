import * as actionTypes from '../constants/ActionTypes'
import {initialState} from '../initialState'
import {Action} from 'redux'
import {isFilterAction, isSearchAction} from "../typeguards";

export interface FilterAction extends Action {
    filter: filter
}

export interface SearchAction extends Action {
    search: string | null
}

export const reducer = (state: State = initialState, action: FilterAction | SearchAction): State => {
    switch (action.type) {
        case actionTypes.SET_FILTER: {
            if (isFilterAction(action)) {
                const {filter} = action
                return {
                    ...state,
                    filter
                }
            }

            return {
                ...state
            }
        }

        case actionTypes.SET_SEARCH: {
            if (isSearchAction(action)) {
                const {search} = action
                return {
                    ...state,
                    search
                }
            }

            return {
                ...state
            }
        }

        default:
            return state
    }
}
