// CreateStore
import { createStore } from "redux"

// CombineReducers
import rootReducer from "./modules/rootReducer"

// ReduxDevTools
import { composeWithDevTools } from "redux-devtools-extension"

// Types
import { ICartState } from "./modules/cart/types"
export interface IStoreState {
    cart: ICartState;
}

const store = createStore(rootReducer, composeWithDevTools())

export default store