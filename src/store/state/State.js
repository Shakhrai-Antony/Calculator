import {combineReducers, createStore} from "redux";
import CalculatorReducer from "../reducer/CalculatorReducer";

const rootReducer = combineReducers({
    mainReducer: CalculatorReducer
});
let store = createStore(rootReducer)

export default store;