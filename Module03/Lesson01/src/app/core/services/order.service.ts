import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetOrdersResponse } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) {

  };

  getOrders(): Observable<GetOrdersResponse> {
    const url = 'https://northwind.netcore.io/orders.json';

    return this.httpClient.get<GetOrdersResponse>(url);
  };

}
