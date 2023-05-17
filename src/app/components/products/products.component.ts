import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/redux/state';
import { Product } from 'src/app/models/product.model';
import { SetProducts } from 'src/app/redux/actions/product.actions';
import { ProductService } from '../../services/product/product.service';
import { selectProduct } from 'src/app/redux/seletors/product.selector';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
    products$!: Observable<Product[]>;

    constructor(private productService: ProductService, private store: Store<State>) {
        this.products$! = this.store.pipe(select(selectProduct));
        this.getProducts();
    }

    getProducts() {
        this.productService.getProducts().subscribe((res: Product[]) => {
            this.store.dispatch(new SetProducts(res));
        });
    }
}
