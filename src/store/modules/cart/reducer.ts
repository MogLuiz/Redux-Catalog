// Types
import { ICartState } from './types';
import { Reducer } from "redux"

const INITIAL_STATE: ICartState = {
    items: []
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case "ADD_PRODUCT_TO_CART": {

            const { product } = action.payload;

            state.items.push({
                product,
                quantity: 1
            })

            break;
        }
        default: {
            return state
        }
    }

    return INITIAL_STATE;
}

export default cart