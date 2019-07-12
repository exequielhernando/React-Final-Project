import {FIND_CURRENT_ARTIST} from '../constants/actions-types'

const findCurrentArtist = id => {
    return {
        type :FIND_CURRENT_ARTIST,
        payload: id,
    }
};

export default findCurrentArtist;