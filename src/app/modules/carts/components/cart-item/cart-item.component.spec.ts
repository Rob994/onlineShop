import { Store } from '@ngrx/store';
import { CartItemComponent } from './cart-item.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mockCartProducts } from '../../../../../../mocks/data/mock-data';
import { StoreServiceMock } from '../../../../../../mocks/services/store-service-mock';

describe('CartItemComponent', () => {
    let component: CartItemComponent;
    let fixture: ComponentFixture<CartItemComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CartItemComponent],
            providers: [{ provide: Store, useClass: StoreServiceMock }],
        });
        fixture = TestBed.createComponent(CartItemComponent);
        component = fixture.componentInstance;
        component.product = mockCartProducts[0];
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('on call deleteFromCart function should called dispatch function from store', () => {
        const dispatch = spyOn(component['_store'], 'dispatch');
        component.deleteFromCart();
        expect(dispatch).toHaveBeenCalled();
    });

    it('on call decreaseCount function should called dispatch function from store', () => {
        const dispatch = spyOn(component['_store'], 'dispatch');
        component.decreaseCount();
        expect(dispatch).toHaveBeenCalled();
    });

    it('on call increaseCount function should called dispatch function from store', () => {
        const dispatch = spyOn(component['_store'], 'dispatch');
        component.increaseCount();
        expect(dispatch).toHaveBeenCalled();
    });
});
