import { CartProduct, Product } from '../models';

export interface State {
    products: Product[];
    cart: CartProduct[];
}

export const AppState: State = {
    cart: [],
    products: [],
};
