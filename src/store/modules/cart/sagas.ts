// Saga Effects
import { all, call, select, takeLatest } from "redux-saga/effects"

// Actions
import { addProductToCartRequest } from "./actions"

// API
import api from "../../../services/api";

// Types
import { IStoreState } from './../../index';
import { AxiosResponse } from "axios";

type checkProductStockRequest = ReturnType<typeof addProductToCartRequest>

interface IStockResponse {
    id: number;
    quantity: number;
}

function* checkProductStock ({ payload }: checkProductStockRequest) {
    
    const { product } = payload

    const currentQuantity: number = yield select((state: IStoreState) => {
        return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0;
    })

    const availableStockResponse: AxiosResponse<IStockResponse> = yield call(api.get, `stock/${product.id}`)
  
}

export default all([
    takeLatest('ADD_PRODUCT_TO_CART_REQUEST', checkProductStock)
])