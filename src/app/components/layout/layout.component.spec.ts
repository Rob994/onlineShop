import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mockCartProducts } from '../../../../mocks/data/mock-data';
import { StoreServiceMock } from '../../../../mocks/services/store-service-mock';

describe('LayoutComponent', () => {
    let component: LayoutComponent;
    let fixture: ComponentFixture<LayoutComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LayoutComponent],
            providers: [{ provide: Store, useClass: StoreServiceMock }],
            schemas: [NO_ERRORS_SCHEMA],
        });
        fixture = TestBed.createComponent(LayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('', () => {
        spyOn(component['_store'], 'pipe').and.returnValue({ subscribe: (fn: Function) => fn(mockCartProducts) } as Subject<any>);

        component.ngOnInit();

        expect(component.cartItemsTotalCount).toBe(3);
        expect(component.cartItemsTotalPrice).toBe(26);
    });
});
