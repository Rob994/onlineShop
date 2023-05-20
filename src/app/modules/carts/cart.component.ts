import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { State } from '../../redux/state';
import { CartProduct } from '../../models';
import { select, Store } from '@ngrx/store';
import { selectCart } from '../../redux/seletors/cart.selector';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
    products$!: Observable<CartProduct[]>;

    constructor(private _store: Store<State>) {
        this.products$! = this._store.pipe(select(selectCart));
    }
}
