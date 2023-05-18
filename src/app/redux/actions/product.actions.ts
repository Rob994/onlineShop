import { Action } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';

export enum ProductActionsTypes {
    setProducts = '[Products] set',
}

export class SetProducts implements Action {
    readonly type = ProductActionsTypes.setProducts;

    constructor(public readonly products: Product[]) { }
}

export type ProductActions = SetProducts;
