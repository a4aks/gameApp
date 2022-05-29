
import { combineReducers } from "redux";
import {balloonreducer} from "./balloon/reducer";

export default combineReducers({
    // todos: todosReducer,
    // auth:authReducer,
    // register: registerReducer
    balloon: balloonreducer
})