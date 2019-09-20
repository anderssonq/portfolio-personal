import {
    LANG,
} from '../actions/types';

export const changeLang = lang => {
    return {
        type: LANG,
        get: lang
    }
}

