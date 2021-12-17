// CreateStore
import { createStore, applyMiddleware } from "redux"

// CombineReducers
import rootReducer from "./modules/rootReducer"

// ReduxDevTools
import { composeWithDevTools } from "redux-devtools-extension"

// Middlewars
import createSagaMiddleware from "redux-saga"

// Types
import { ICartState } from "./modules/cart/types"
export interface IStoreState {
    cart: ICartState;
}

const sagaMiddleware = createSagaMiddleware()

const middlewars = [sagaMiddleware]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewars)),)

// sagaMiddleware.run()

export default store