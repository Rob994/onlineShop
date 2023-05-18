import { AppState, State } from '../state';
import { CartActions, CartActionsTypes } from '../actions/cart.actions';
import { addToCart, deleteCart, incrementOrDecrementCount } from '../helpers/cart-reducer.helper';

export const cartNode = 'cart';

export const cartReducer = (state = AppState, action: CartActions): State => {
    switch (action.type) {
        case CartActionsTypes.addToCart: {
            const cart = addToCart(state.cart, action.product);
            return { ...state, cart };
        }
        case CartActionsTypes.deleteFromCart: {
            const cart = deleteCart(state.cart, action.id);
            return { ...state, cart };
        }
        case CartActionsTypes.increment: {
            const cart = incrementOrDecrementCount(state.cart, action.id, true);
            return { ...state, cart };
        }
        case CartActionsTypes.decrement: {
            const cart = incrementOrDecrementCount(state.cart, action.id, false);
            return { ...state, cart };
        }
        default:
            return state;
    }
};
