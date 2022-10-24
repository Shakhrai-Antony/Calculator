import {combineReducers, createStore} from "redux";
import Calculator from "../reducer/Calculator";

const rootReducer = combineReducers({
    mainReducer: Calculator
});
let store = createStore(rootReducer)

export default store;