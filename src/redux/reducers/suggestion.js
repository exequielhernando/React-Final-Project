import {FIND_SUGGESTION} from '../constants/actions-types';
import items from '../../data/items';

const defaultState = [];

function suggestion(state = defaultState, action) {
    switch (action.type) {
        case FIND_SUGGESTION:
          const regex = new RegExp(`^${action.payload}`, 'i');

          return items.filter(n => regex.test(n.title));
        default:
           return state
            
    }   
}
export default suggestion;