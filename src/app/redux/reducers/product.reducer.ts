import { AppState } from '../state';
import { ProductActions, ProductActionsTypes } from '../actions/product.actions';

export const productNode = 'products';

export const productReducer = (state = AppState, action: ProductActions) => {
    switch (action.type) {
        case ProductActionsTypes.setProducts:
            const { products } = action;

            return { ...state, products };
        default:
            return state;
    }
};
