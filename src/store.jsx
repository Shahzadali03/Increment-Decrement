import {thunk} from "redux-thunk";
import counterReducer from "./reducer"
import { applyMiddleware, combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
    counter : counterReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store