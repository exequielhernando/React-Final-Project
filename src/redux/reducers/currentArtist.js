import {FIND_CURRENT_ARTIST} from '../constants/actions-types'
const defaultState = 0;

function currentArtist(state = defaultState, action) {
    switch (action.type) {
        case FIND_CURRENT_ARTIST:{
           
        }      
        default:
        {
           return state
          }
    }   
}
export default currentArtist;