import {FIND_SUGGESTION} from '../constants/actions-types'

const findSuggestion = text => {
    return {
        type :FIND_SUGGESTION,
        payload: text,
    }
};

export default findSuggestion;