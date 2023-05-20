import { Store } from '@ngrx/store';
import { ProductItemComponent } from './product-item.component';
import { mockProducts } from '../../../../mocks/data/mock-data';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreServiceMock } from '../../../../mocks/services/store-service-mock';

describe('ProductItemComponent', () => {
    let component: ProductItemComponent;
    let fixture: ComponentFixture<ProductItemComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ProductItemComponent],
            providers: [{ provide: Store, useClass: StoreServiceMock }],
        });
        fixture = TestBed.createComponent(ProductItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('on call addToCart function should called dispatch function from store', () => {
        component.product = mockProducts[0];
        const dispatch = spyOn(component['_store'], 'dispatch');
        component.addToCart();
        expect(dispatch).toHaveBeenCalled();
    });
});
