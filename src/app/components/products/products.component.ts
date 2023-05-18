import { Filter } from '../../models';
import { map, Observable } from 'rxjs';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from 'src/app/redux/state';
import { ProductService } from '../../services';
import { Product } from 'src/app/models/product.model';
import { RangeValues } from 'src/app/models/filter.model';
import { FilterTypesEnum } from '../../enums/filter-types.enum';
import { SetProducts } from 'src/app/redux/actions/product.actions';
import { selectProduct } from 'src/app/redux/seletors/product.selector';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
    filter?: Filter;
    products$!: Observable<Product[]>;

    constructor(private productService: ProductService, private store: Store<State>) {
        this.products$ = this.store.pipe(
            select(selectProduct),
            map((res) =>
                res.filter((item: Product) => {
                    if (!this.filter) return true;

                    if (this.filter?.type === FilterTypesEnum.text) {
                        return this._filterProductText(item);
                    }

                    if (this.filter?.type === FilterTypesEnum.range) {
                        return this._filterProductRange(item);
                    }

                    return false;
                })
            )
        );
        this._getProducts();
    }

    setFilters(event: Filter) {
        this.filter = event;
        this._getProducts();
    }

    private _filterProductRange(item: Product): boolean {
        if (!this.filter) return true;
        const key = this.filter.key as keyof Product;
        const { maxValue, minValue } = this.filter.values as RangeValues;
        const numericValue = item[key] as number; // price or rate

        if (minValue && maxValue) {
            return minValue <= numericValue && numericValue <= maxValue;
        }

        if (minValue && !maxValue) {
            return minValue <= numericValue;
        }

        if (!minValue && maxValue) {
            return numericValue <= maxValue;
        }

        return true;
    }

    private _filterProductText(item: Product): boolean {
        if (!this.filter) return true;
        const key = this.filter.key as keyof Product;
        const val = this.filter.values as string;
        return (item[key] as string).toUpperCase()?.includes(val?.toUpperCase());
    }

    private _getProducts() {
        this.productService.getProducts().subscribe((res: Product[]) => {
            this.store.dispatch(new SetProducts(res));
        });
    }
}
