import {
    ACCESS, SUBNAVBARVIEW, SESIONUSER
} from '../actions/types';

export const loginAccess = key => {
    return {
        type: ACCESS,
        get: key
    }
}

export const turnOnNavBar = key =>{
    return{
        type: SUBNAVBARVIEW,
        get:key
    }
}

export const openSession = person =>{
    return{
        type: SESIONUSER,
        get:person
    }
}


