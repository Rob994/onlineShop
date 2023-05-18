import { Store } from '@ngrx/store';
import { State } from '../../redux/state';
import { Component, Input } from '@angular/core';
import { CartProduct, Product } from '../../models';
import { AddToCart } from '../../redux/actions/cart.actions';

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
    @Input() product?: Product;

    constructor(private store: Store<State>) {}

    addToCart() {
        if (this.product) {
            const productCart: CartProduct = { ...this.product, count: 1 };
            this.store.dispatch(new AddToCart(productCart));
        }
    }
}
