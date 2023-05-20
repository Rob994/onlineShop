import { AppState } from '../state';
import { cartReducer } from './cart.reducer';
import { productReducer } from './product.reducer';
import { SetProducts } from '../actions/product.actions';
import { mockCartProducts, mockProducts } from '../../../../mocks/data/mock-data';
import { AddToCart, DecrementInCart, DeleteFromCart, IncrementInCart } from '../actions/cart.actions';

describe('cartReducer', () => {
    it('call cartReducer from action type to have been equal addToCart', () => {
        const result = cartReducer(AppState, new AddToCart({ ...mockProducts[2], count: 1 }));
        expect(result.cart.length).toBe(1);
    });

    it('call cartReducer from action type to have been equal deleteFromCart', () => {
        cartReducer(AppState, new AddToCart({ ...mockProducts[2], count: 1 }));
        const result = cartReducer(AppState, new DeleteFromCart(mockProducts[2].id));
        expect(result.cart.length).toBe(0);
    });

    it('call cartReducer from action type to have been equal increment', () => {
        const state = { cart: mockCartProducts, products: mockProducts };
        const result = cartReducer(state, new IncrementInCart(mockProducts[0].id));
        expect(result.cart[0].count).toBe(state.cart[0].count + 1);
    });

    it('call cartReducer from action type to have been equal decrement', () => {
        const state = { cart: mockCartProducts, products: mockProducts };
        const result = cartReducer(state, new DecrementInCart(mockProducts[0].id));
        expect(result.cart[0].count).toBe(state.cart[0].count - 1);
    });
});

describe('productReducer', () => {
    it('call productReducer from action type to have been equal etProducts', () => {
        const result = productReducer(AppState, new SetProducts(mockProducts));
        expect(result.products.length).toBe(mockProducts.length);
    });
});
