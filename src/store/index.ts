// CreateStore
import { createStore } from "redux"

// CombineReducers
import rootReducers from "./modules/rootReducers"

const store = createStore(rootReducers)

export default store