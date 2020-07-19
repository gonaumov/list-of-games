import {FilterAction, SearchAction} from "../reducers";
import {SET_FILTER, SET_SEARCH} from "../constants/ActionTypes";

export const searchAction = (search: string | null): SearchAction => {
    return {
        type: SET_SEARCH,
        search
    }
}

export const filterAction = (filter: filter): FilterAction => {
    return {
        type: SET_FILTER,
        filter
    }
}
