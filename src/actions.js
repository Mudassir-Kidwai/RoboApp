import {CHANGE_SEARCH_FIELD} from './constants';
//every action will be declared here

export function setSearchField(text){
    return {
        type:CHANGE_SEARCH_FIELD,
        payload: text
    }
}

