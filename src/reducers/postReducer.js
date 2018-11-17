import {
    ACCESS, SUBNAVBARVIEW, SESIONUSER
} from '../actions/types'

const initialState={
    authy:false,
    navBarView:true,
    sesion:null
}

export default function(state = initialState,action){
    switch(action.type){

        case ACCESS:
        return{
            ...state,
            authy: action.get
        }

        case SUBNAVBARVIEW:
        return{
            ...state,
            navBarView:action.get
        }

        case SESIONUSER:
        return{
            ...state,
            sesion:action.get
        }

        default:
        return state;

    }
}