import { Action } from '@ngrx/store';
import { CartProduct } from 'src/app/models/product.model';

export enum CartActionsTypes {
    addToCart = '[Cart] add',
    increment = '[Cart] increment',
    decrement = '[Cart] decrement',
    deleteFromCart = '[Cart] delete',
}

export class AddToCart implements Action {
    readonly type = CartActionsTypes.addToCart;

    constructor(public readonly product: CartProduct) {}
}

export class DeleteFromCart implements Action {
    readonly type = CartActionsTypes.deleteFromCart;

    constructor(public readonly id: number) {}
}

export class IncrementInCart implements Action {
    readonly type = CartActionsTypes.increment;

    constructor(public readonly id: number) {}
}

export class DecrementInCart implements Action {
    readonly type = CartActionsTypes.decrement;

    constructor(public readonly id: number) {}
}

export type CartActions = AddToCart | DeleteFromCart | IncrementInCart | DecrementInCart;
