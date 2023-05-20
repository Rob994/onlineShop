import { BehaviorSubject } from 'rxjs';
import { mockProducts } from '../data/mock-data';

export class HttpClientServiceMock {
    get() {
        return new BehaviorSubject(mockProducts);
    }
}
