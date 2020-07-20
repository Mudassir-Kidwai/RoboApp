import {CHANGE_SEARCH_FIELD} from './constants';

const initialState = {
    searchField: ''
}

// First Reducer - Pure Function
//export function searchRobots(state= initialState , action){
 export const searchRobots = (state=initialState, action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
//            return {...state, searchField: action.payload};
            return Object.assign({}, state, {searchField: action.payload});
        default: 
            return state;
    }
}