import { combineReducers } from "redux";

// reducer
import { authReducer } from "./authReducer";
import { songReducer } from "./songReducer";
import { playListReducer } from "./playListReducer";


export const rootReducer = combineReducers({
    auth: authReducer,
    song: songReducer,
    playList: playListReducer
})