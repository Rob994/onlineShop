import { Store } from '@ngrx/store';
import { ProductService } from '../../services';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FilterConfig } from '../filter/filter-config';
import { ProductsComponent } from './products.component';
import { mockProducts } from '../../../../mocks/data/mock-data';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreServiceMock } from '../../../../mocks/services/store-service-mock';
import { ProductServiceMock } from '../../../../mocks/services/product-service-mock';

describe('ProductsComponent', () => {
    let component: ProductsComponent;
    let fixture: ComponentFixture<ProductsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ProductsComponent],
            providers: [
                { provide: Store, useClass: StoreServiceMock },
                { provide: ProductService, useClass: ProductServiceMock },
            ],
            schemas: [NO_ERRORS_SCHEMA],
        });
        fixture = TestBed.createComponent(ProductsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('after call setFilters function should called _getProducts', () => {
        // @ts-ignore
        const getProducts = spyOn(component, '_getProducts');
        component.setFilters({ key: FilterConfig[0].key, type: FilterConfig[0].type, values: 'test' });
        expect(getProducts).toHaveBeenCalled();
    });

    describe('_filterProductRange', () => {
        it('call _filterProductRange when filter does not exists', () => {
            const result = component['_filterProductRange'](mockProducts[0]);
            expect(result).toBeTrue();
        });

        it('call _filterProductRange when filter exist. Filter have minValue and maxValue', () => {
            component.filter = { key: FilterConfig[2].key, type: FilterConfig[2].type, values: { minValue: 10, maxValue: 120 } };
            const result = component['_filterProductRange'](mockProducts[0]);
            expect(result).toBeTrue();
        });

        it('call _filterProductRange when filter exist. Filter does not have minValue ', () => {
            component.filter = { key: FilterConfig[2].key, type: FilterConfig[2].type, values: { maxValue: 120 } };
            const result = component['_filterProductRange'](mockProducts[0]);
            expect(result).toBeTrue();
        });

        it('call _filterProductRange when filter exist. Filter does not have maxValue ', () => {
            component.filter = { key: FilterConfig[2].key, type: FilterConfig[2].type, values: { minValue: 10 } };
            const result = component['_filterProductRange'](mockProducts[0]);
            expect(result).toBeTrue();
        });
    });

    describe('_filterProductText', () => {
        it('call _filterProductText when filter does not exists', () => {
            const result = component['_filterProductText'](mockProducts[1]);
            expect(result).toBeTrue();
        });

        it('call _filterProductText when description include filter value ', () => {
            component.filter = { key: FilterConfig[4].key, type: FilterConfig[4].type, values: 'test' };
            const result = component['_filterProductText'](mockProducts[0]);
            expect(result).toBeTrue();
        });

        it('call _filterProductText when description does not include filter value ', () => {
            component.filter = { key: FilterConfig[4].key, type: FilterConfig[4].type, values: 'a' };
            const result = component['_filterProductText'](mockProducts[0]);
            expect(result).toBeFalse();
        });
    });
});
