// Saga Effects
import { all } from "redux-saga/effects"

// Sagas
import cart from "./cart/reducer"

export default function* rootSaga(): Generator<unknown>{
    return yield all([
        cart,
    ]) 
}