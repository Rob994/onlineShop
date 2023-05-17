import { CartActions, CartActionsTypes } from '../actions/cart.actions';
import { AppState, State } from '../state';

export const cartNode = 'cart';

export const cartReducer = (state = AppState, action: CartActions): State => {
    switch (action.type) {
        case CartActionsTypes.addToCart:
            let existedItem = state.cart.find((el) => el.id === action.product.id);
            if (existedItem) {
                return { ...state, cart: [...state.cart, { ...action.product, count: ++existedItem.count }] };
            } else {
                return { ...state, cart: [...state.cart, { ...action.product, count: 0 }] };
            }
        case CartActionsTypes.deleteFromCart:
            return { ...state, cart: [...state.cart.filter((el) => el.id !== action.id)] };
        case CartActionsTypes.increment:
            const item = state.cart.find((el) => el.id === action.id)!;
            item.count++;
            return { ...state, cart: [...state.cart] };
        case CartActionsTypes.decrement:
            const item1 = state.cart.find((el) => el.id === action.id)!;
            item1.count--;
            return { ...state, cart: [...state.cart] };
        default:
            return { ...state };
    }
};
