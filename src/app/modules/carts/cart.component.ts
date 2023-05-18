import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { State } from '../../redux/state';
import { select, Store } from '@ngrx/store';
import { CartProduct } from '../../models/product.model';
import { selectCart } from '../../redux/seletors/cart.selector';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
    products$!: Observable<CartProduct[]>;

    constructor(private store: Store<State>) {
        this.products$! = this.store.pipe(select(selectCart));
    }
}
