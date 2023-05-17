import { Component } from '@angular/core';
import { State } from '../../redux/state';
import { select, Store } from '@ngrx/store';
import { selectProduct } from '../../redux/seletors/product.selector';
import { Observable } from 'rxjs';
import { Product } from '../../models';
import { selectCart } from '../../redux/seletors/cart.selector';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
    products$!: Observable<Product[]>;

    constructor(private store: Store<State>) {
        this.products$! = this.store.pipe(select(selectCart));
    }
}
