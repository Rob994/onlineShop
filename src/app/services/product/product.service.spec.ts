import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './product.service';
import { mockProducts } from '../../../../mocks/data/mock-data';
import { HttpClientServiceMock } from '../../../../mocks/services/http-client-service-mock';

describe('ProductService', () => {
    let service: ProductService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: HttpClient, useClass: HttpClientServiceMock }],
        });
        service = TestBed.inject(ProductService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('get product', () => {
        service.getProducts().subscribe((products) => {
            expect(products).toEqual(mockProducts);
        });
    });
});
