// CreateStore
import { createStore } from "redux"

// CombineReducers
import combineReducers from "./modules/combineReducers"

const store = createStore(combineReducers)

export default store