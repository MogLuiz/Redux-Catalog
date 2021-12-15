// CreateStore
import { createStore } from "redux"

// CombineReducers
import combineReducers from "./modules/rootReducer"

const store = createStore(combineReducers)

export default store