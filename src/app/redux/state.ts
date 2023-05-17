import { CartProduct, Product } from "../models/product.model"

export interface State {
    products: Product[];
    cart: CartProduct[];
}

export const AppState: State = {
    products: [],
    cart: []
}
