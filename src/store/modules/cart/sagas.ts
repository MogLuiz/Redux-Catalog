import { IStoreState } from './../../index';
// Saga Effects
import { all, select, takeLatest } from "redux-saga/effects"
import { addProductToCartRequest } from "./actions"

type checkProductStockRequest = ReturnType<typeof addProductToCartRequest>

function* checkProductStock ({ payload }: checkProductStockRequest) {
    
    const { product } = payload

    const currentQuantity: number = yield select((state: IStoreState) => {
        return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0;
    })

    console.log(currentQuantity)
  
}

export default all([
    takeLatest('ADD_PRODUCT_TO_CART_REQUEST', checkProductStock)
])