import { combineReducers } from "redux";
import artist from "./artist";
import currentArtist from "./currentArtist";
import suggestion from "./suggestion";

const rootReducer = combineReducers({
    artist,
    currentArtist, 
    suggestion,
});
export default rootReducer;