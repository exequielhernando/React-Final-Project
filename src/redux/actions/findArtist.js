import {FIND_ARTIST} from '../constants/actions-types'

const findArtist = text => {
    return {
        type :FIND_ARTIST,
        payload: text,
    }
};

export default findArtist;