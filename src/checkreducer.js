//Redux Ducks Implementation
/*A module…
1. MUST export default a function called reducer()
2. MUST export its action creators as functions
3. MUST have action types in the form npm-module-or-app/reducer/ACTION_TYPE
4. MAY export its action types as UPPER_SNAKE_CASE, if an external reducer needs to listen for them, or if it is a published reusable library
*/

import {combineReducers} from 'redux';
const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';

export function setSearchField(text){
    return{
        type: CHANGE_SEARCH_FIELD,
        payload: text    
    }
}

const initialState = {
    searchField: ''
}

export function searchRobots(state= initialState, action){
 switch(action.type){
    case CHANGE_SEARCH_FIELD:
        return Object.assign({}, state, {searchField: action.payload});
    default:
        return state;
    }
}

const checkreducer = combineReducers({searchRobots});   
export default checkreducer.js;