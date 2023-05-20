import { Subject } from 'rxjs';

export class StoreServiceMock {
    pipe() {
        return new Subject();
    }
    dispatch() {}
}
