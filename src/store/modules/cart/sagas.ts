// Saga Effects
import { all, takeLatest } from "redux-saga/effects"
import { addProductToCart } from "./actions"

type checkProductStockRequest = ReturnType<typeof addProductToCart>

const checkProductStock = (action: checkProductStockRequest) => {
    console.log("Adicionou ao carrinho")
  
}

export default all([
    takeLatest('ADD_PRODUCT_TO_CART', checkProductStock)
])