import { Subscription } from 'rxjs';
import { State } from '../../redux/state';
import { select, Store } from '@ngrx/store';
import { Component, OnDestroy } from '@angular/core';
import { selectCart } from '../../redux/seletors/cart.selector';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnDestroy {
    cartItemsTotalCount = 0;
    cartItemsTotalPrice = 0;

    private _subscriptions = new Subscription();

    constructor(private store: Store<State>) {
        this._setPriceAndCount();
    }

    ngOnDestroy() {
        this._subscriptions.unsubscribe();
    }

    private _setPriceAndCount() {
        this._subscriptions.add(
            this.store.pipe(select(selectCart)).subscribe((products) => {
                this.cartItemsTotalCount = 0;
                this.cartItemsTotalPrice = 0;
                products.length &&
                    products.forEach((product) => {
                        this.cartItemsTotalCount += product.count;
                        this.cartItemsTotalPrice += product.count * product.price;
                    });
            })
        );
    }
}
