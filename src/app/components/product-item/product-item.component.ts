import { Store } from '@ngrx/store';
import { Product } from '../../models';
import { State } from '../../redux/state';
import { Component, Input } from '@angular/core';
import { CartProduct } from '../../models/product.model';
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
            const productCart: CartProduct = { ...this.product, count: 0 };
            this.store.dispatch(new AddToCart(productCart));
        }
    }
}
