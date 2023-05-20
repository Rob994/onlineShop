import { BehaviorSubject } from 'rxjs';
import { mockProducts } from '../data/mock-data';

export class ProductServiceMock {
    getProducts() {
        return new BehaviorSubject(mockProducts);
    }
}
