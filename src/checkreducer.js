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