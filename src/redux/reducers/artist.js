import {FIND_ARTIST} from '../constants/actions-types';
import items from '../../data/items';

const defaultState = [0];

function artist(state = defaultState, action) {
    switch (action.type) {

        case FIND_ARTIST: {
            const regex = new RegExp(`^${action}`, 'i');
  
            return items.filter(n => regex.test(n.title));
          }  
        default:
        {
            return state
        }
    }   
}
export default artist;