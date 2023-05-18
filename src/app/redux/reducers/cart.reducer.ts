import { AppState, State } from '../state';
import { CartProduct } from '../../models/product.model';
import { CartActions, CartActionsTypes } from '../actions/cart.actions';

export const cartNode = 'cart';

export const cartReducer = (state = AppState, action: CartActions): State => {
    switch (action.type) {
        case CartActionsTypes.addToCart: {
            let index = state.cart.findIndex((el) => el.id === action.product.id);
            if (index === -1) {
                return { ...state, cart: [...state.cart, { ...action.product }] };
            } else {
                return { ...state, cart: incrementOrDecrementCount(state.cart, action.product.id, true) };
            }
        }
        case CartActionsTypes.deleteFromCart: {
            const cart = deleteCart(state.cart, action.id)
            return { ...state, cart };
        }
        case CartActionsTypes.increment: {
            return { ...state, cart: incrementOrDecrementCount(state.cart, action.id, true) };
        }
        case CartActionsTypes.decrement: {
            return { ...state, cart: incrementOrDecrementCount(state.cart, action.id, false) };
        }
        default:
            return state
    }
};

function deleteCart(cart: CartProduct[], id: number): CartProduct[] {
    return cart.filter((el) => el.id !== id);
}

function incrementOrDecrementCount(cart: CartProduct[], id: number, isIncrement: boolean): CartProduct[] {
    return cart.map((el) => {
        if (el.id === id) {
            let count;
            if (isIncrement) {
                count = el.count + 1;
            } else {
                count = el.count - 1 < 0 ? 0 : el.count - 1;
            }
            return { ...el, count };
        } else {
            return el;
        }
    });
}
