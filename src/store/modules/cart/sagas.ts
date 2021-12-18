import { IStoreState } from './../../index';
// Saga Effects
import { all, select, takeLatest } from "redux-saga/effects"
import { addProductToCart } from "./actions"

type checkProductStockRequest = ReturnType<typeof addProductToCart>

function* checkProductStock ({ payload }: checkProductStockRequest) {
    
    const { product } = payload

    const currentQuantity: number = yield select((state: IStoreState) => {
        return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0;
    })
  
}

export default all([
    takeLatest('ADD_PRODUCT_TO_CART', checkProductStock)
])