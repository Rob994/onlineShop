import { ProductActions, ProductActionsTypes } from '../actions/product.actions';
import { AppState } from '../state';

export const productNode = 'products';


export const productReducer = (state = AppState, action: ProductActions) => {
    switch (action.type) {
        case ProductActionsTypes.setProducts:
            const { products } = action
            
            return { ...state, products };
        default:
            return state
    }
};
