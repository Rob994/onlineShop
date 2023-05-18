import { CartProduct, Product } from '../../models/product.model';

export function addToCart(cart: CartProduct[], product: Product): CartProduct[] {
    let index = cart.findIndex((el) => el.id === product.id);
    if (index === -1) {
        return [...cart, { ...product, count: 0 }];
    } else {
        return incrementOrDecrementCount(cart, product.id, true);
    }
}

export function deleteCart(cart: CartProduct[], id: number): CartProduct[] {
    return cart.filter((el) => el.id !== id);
}

export function incrementOrDecrementCount(cart: CartProduct[], id: number, isIncrement: boolean): CartProduct[] {
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
