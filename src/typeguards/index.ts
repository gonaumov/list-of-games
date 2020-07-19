import {Action} from "redux";
import {FilterAction, SearchAction} from "../reducers";

export const isFilterAction = (action: Action | FilterAction): action is FilterAction => {
  return 'filter' in action && ['all', 'top', 'new'].includes(action.filter)
}

export const isSearchAction = (action: Action | SearchAction): action is SearchAction => {
  return 'search' in action && (typeof action.search === 'string' || action.search === null)
}
