import { mockCartProducts, mockProducts } from '../../../../mocks/data/mock-data';
import { addToCart, deleteCart, incrementOrDecrementCount } from './cart-reducer.helper';

describe('addToCard', () => {
    it('should add to cart a new item', () => {
        const result = addToCart(mockCartProducts, mockProducts[2]);
        expect(result.length).toBe(mockCartProducts.length + 1);
    });

    it('should increment count of existing item', () => {
        const result = addToCart(mockCartProducts, mockProducts[0]);
        expect(result[0].count).toBe(mockCartProducts[0].count + 1);
    });
});

describe('deleteCart', () => {
    it('should delete from cart', () => {
        const result = deleteCart(mockCartProducts, mockProducts[1].id);
        expect(result.length).toBe(mockCartProducts.length - 1);
    });
});

describe('incrementOrDecrementCount', () => {
    it('should delete from cart', () => {
        const result = incrementOrDecrementCount(mockCartProducts, mockProducts[0].id, false);
        expect(result[0].count).toBe(mockCartProducts[0].count - 1);
    });
});
