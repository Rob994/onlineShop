import { map, Observable } from 'rxjs';
import { Filter } from '../../models';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from 'src/app/redux/state';
import { Product } from 'src/app/models/product.model';
import { SetProducts } from 'src/app/redux/actions/product.actions';
import { ProductService } from '../../services/product/product.service';
import { selectProduct } from 'src/app/redux/seletors/product.selector';
import { FilterTypesEnum } from '../../enums/filter-types.enum';
import { RangeValues } from 'src/app/models/filter.model';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
    filter?: Filter;
    products$!: Observable<Product[]>;

    constructor(private productService: ProductService, private store: Store<State>) {
        this.products$ = this.store
            .pipe(
                select(selectProduct),
                map((res) =>
                    res.filter((item: Product) => {
                        if (!this.filter) return true

                        if (this.filter?.type === FilterTypesEnum.text) {
                            const key = this.filter.key as keyof Product
                            const val = this.filter.values as string
                            return (item[key] as string).toUpperCase()?.includes(val?.toUpperCase());
                        }

                        if (this.filter?.type === FilterTypesEnum.range) {
                            const key = (this.filter.key as keyof Product)
                            const { maxValue, minValue } = this.filter.values as RangeValues;
                            const numericValue = (item[key] as number) // price or rate 

                            if (minValue && maxValue) {
                                return minValue <= numericValue && numericValue <= maxValue
                            }

                            if (minValue && !maxValue) {
                                return minValue <= numericValue
                            }

                            if (!minValue && maxValue) {
                                return numericValue <= maxValue
                            }

                            return true

                        }


                        return false
                    })
                )
            );
        this.getProducts();
    }

    getProducts() {
        this.productService.getProducts().subscribe((res: Product[]) => {
            this.store.dispatch(new SetProducts(res));
        });
    }

    setFilters(event: Filter) {
        this.filter = event;
        this.getProducts();
    }
}
