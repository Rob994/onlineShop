import { Component, Input } from '@angular/core';
import { CartProduct } from '../../../../models/product.model';
import { Store } from '@ngrx/store';
import { State } from '../../../../redux/state';
import { AddToCart, DecrementInCart, DeleteFromCart, IncrementInCart } from '../../../../redux/actions/cart.actions';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
    @Input() product?: CartProduct;
    constructor(private store: Store<State>) {}

    deleteFromCart() {
        if (this.product) {
            this.store.dispatch(new DeleteFromCart(this.product.id));
        }
    }

    decreaseCount() {
        if (this.product) {
            this.store.dispatch(new DecrementInCart(this.product.id));
        }
    }

    increaseCount() {
        if (this.product) {
            this.store.dispatch(new IncrementInCart(this.product.id));
        }
    }
}
