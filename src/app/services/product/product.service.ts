import { Observable } from 'rxjs';
import { Product } from '../../models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private _httpClient: HttpClient) {}

    getProducts(): Observable<Product[]> {
        return this._httpClient.get<Product[]>(`${environment.url}products`);
    }
}
