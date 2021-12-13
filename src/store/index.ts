// CreateStore
import { createStore } from "redux"

// Reducers
import cart from "./modules/cart/reducer"

const store = createStore(() => ({
    cart,
}))

export default store