import { ProductActions, ProductActionsTypes } from '../actions/product.actions';
import { AppState } from '../state';

export const productNode = 'products';


export const productReducer = (state = AppState, action: ProductActions) => {
    switch (action.type) {
        case ProductActionsTypes.setProducts:
            return {
                ...state,
                products: action.products
            };
        default:
            return { ...state };
    }
};
