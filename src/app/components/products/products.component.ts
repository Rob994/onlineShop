import { Filter } from '../../models';
import { map, Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { State } from 'src/app/redux/state';
import { ProductService } from '../../services';
import { Component, OnInit } from '@angular/core';
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
export class ProductsComponent implements OnInit {
    filter?: Filter;
    products$!: Observable<Product[]>;

    constructor(private _productService: ProductService, private _store: Store<State>) {}

    ngOnInit() {
        this._setProducts();
        this._getProducts();
    }

    setFilters(event: Filter) {
        this.filter = event;
        this._getProducts();
    }

    private _setProducts() {
        this.products$ = this._store.pipe(
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
    }

    private _filterProductRange(item: Product): boolean {
        if (!this.filter) return true;
        const key = this.filter.key as keyof Product;
        const { maxValue, minValue } = this.filter.values as RangeValues;
        const priceOrRate = item[key] as number;
        if (minValue && maxValue) {
            return minValue <= priceOrRate && priceOrRate <= maxValue;
        }

        if (minValue && !maxValue) {
            return minValue <= priceOrRate;
        }

        if (!minValue && maxValue) {
            return priceOrRate <= maxValue;
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
        this._productService.getProducts().subscribe((res: Product[]) => {
            this._store.dispatch(new SetProducts(res));
        });
    }
}
