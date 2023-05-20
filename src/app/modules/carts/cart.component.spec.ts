import { Store } from '@ngrx/store';
import { CartComponent } from './cart.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreServiceMock } from '../../../../mocks/services/store-service-mock';

describe('CartComponent', () => {
    let component: CartComponent;
    let fixture: ComponentFixture<CartComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CartComponent],
            providers: [{ provide: Store, useClass: StoreServiceMock }],
        });
        fixture = TestBed.createComponent(CartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
