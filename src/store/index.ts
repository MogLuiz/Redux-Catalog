// CreateStore
import { createStore } from "redux"

// CombineReducers
import combineReducers from "./modules/rootReducer"

// Types
import { ICartState } from "./modules/cart/types"
export interface IStoreState {
    cart: ICartState;
}

const store = createStore(combineReducers)

export default store