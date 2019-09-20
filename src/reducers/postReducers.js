import {
    LANG,
} from '../actions/types'

const initialState={
    lang:'es',
}

export default function(state = initialState,action){
    switch(action.type){

        case LANG:
        return{
            ...state,
            lang: action.get

        }
        default:
        return state;

    }
}