# Module 3: Lesson 1
 
## DATA BINDING IN ANGULAR
 
## Table of Contents
 
- [Let's Data Bind](#lets-data-bind)
- [Creating the Model](#creating-the-model)
- [Calling the Web API](#calling-the-web-api)
- [Iterating Through Orders](#iterating-through-results)
- [Installation of Module 3 Lesson 1](#installation-of-module-3-lesson-1)
 
 
## Let's Data Bind
In this lesson, we will learn how to call a HTTP service to reach out to a web service and list out the objects to the screen. In our case, this will be a list of courses. To demonstrate this, we will call into a Web API for Microsoft's fictional database **Northwind** (https://northwind.netcore.io/orders.json).
 
The complete API can be viewed by browsing to (https://northwind.netcore.io/). This web service is one that was created by **ServiceStack** (https://github.com/NetCoreApps/Northwind).
 
To get the list of orders, we can browse to (https://northwind.netcore.io/orders.json), which will return the following JSON formatted objects:
 
```json
{"results":[{"order":{"id":11074,"customerId":"SIMOB","employeeId":7,"orderDate":"\/Date(894412800000-0000)\/","requiredDate":"\/Date(896832000000-0000)\/","shipVia":2,"freight":18.44,"shipName":"Simons bistro","shipAddress":"Vinbæltet 34","shipCity":"Kobenhavn","shipPostalCode":"1734","shipCountry":"Denmark"},"orderDetails":[{"orderId":11074,"productId":16,"unitPrice":17.45,"quantity":14,"discount":0.05}]},{"order":{"id":11075,"customerId":"RICSU","employeeId":8,"orderDate":"\/Date(894412800000-0000)\/","requiredDate":"\/Date(896832000000-0000)\/","shipVia":2,"freight":6.19,"shipName":"Richter Supermarkt","shipAddress":"Starenweg 5","shipCity":"Genève","shipPostalCode":"1204","shipCountry":"Switzerland"},"orderDetails":[{"orderId":11075,"productId":2,"unitPrice":19,"quantity":10,"discount":0.15}]}]}
```

## Creating the Model
We need a model, typically an interface, that will represent the shape of the data:
 
```TypeScript
export interface Order {
  id: number;
  customerId: string;
  employeeId: number;
  orderDate: string;
  requiredDate: string;
  shipVia: number;
  freight: number;
  shipName: string;
  shipAddress: string;
  shipCity: string;
  shipPostalCode: string;
  shipCountry: string;
}
 
export interface OrderResponse {
  order: Order;
}
export interface GetOrdersResponse {
  results: OrderResponse[];
}
 
 
```
 
Models will be created in a folder named _models_ in the core folder of our application. There isn’t any set rule where this folder and its files must live. However, we will need this model in more than just the component folder, so let's place it in the _models_ folder.
 
## Calling the Web API
 
Now we need to create an HTTP service that will reach out to the Web API (https://northwind.netcore.io/orders.json) and place the results into an array of objects defined in our model. This service is a reusable piece of code that we inject into any class that will consume a course or a list of courses.
 
Let's create an **OrderService** to inject into our OrderListComponent. In this service, we will create a static array ***ORDERS*** of **OrderModel**s and a method named _getOrders()_. This method simply returns the const ***ORDERS*** array of _OrderModel_ as an "Observable." Let’s take a look at the code:
 
```TypeScript
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from '../models/order.model';
 
@Injectable({
  providedIn: 'root'
})
export class OrderService {
    getCourses(): Observable<Order[]> {
      return of(ORDERS);
    }
}
 
const ORDERS: Order[] = [];
 
```
Now that the groundwork is in place, we need to add a new method that will reach out and connect to our Web API and return the list of orders from a HTTP request. In order to make a HTTP request, we will need to inject an already-written piece of code that performs this request – **HttpClient** located in the framework, specifically, ***@angular/common/http***. As always, we inject services in the constructor of the class, like this:
 
```TypeScript
constructor(private httpClient: HttpClient) {
 
};
```
 
_HttpClient_ service gives us the functionality to make HTTP request calls like _GET_ and _POST_, and is all we need to begin making HTTP requests to connect our Angular application to Web APIs. Now, in the **OrderService**, let's write the method to read the orders data:
 
```TypeScript
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
 
```
 
Now, with the new service method defined, we need to ensure the service has been added into the **AppModule** ‘providers’ section. While you are there, make sure to register **** as well:
 
```TypeScript
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerListComponent,
    OrderComponent,
    OrderListComponent,
    PersonComponent,
    PersonListComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [CustomerService, OrderService, PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
 
## Iterating Through Results
 
Returning to our **OrderListComponent**, let’s modify the ***ngOnInit*** method to call our new method we added into the **OrdersService** – replacing the static array data it used to retrieve. We simply need to change the method name from _getOrders()_:
 
```TypeScript
export class OrderListComponent implements OnInit {
 
  orders: OrderResponse[] = [];
 
  constructor(private orderService: OrderService) {
   
  }
 
  ngOnInit(): void {
    this.orderService.getOrders()
    .subscribe(
      (data: GetOrdersResponse) => this.orders = data.results );
  }
}
```
 
## Installation of Module 3 Lesson 1
 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.
 
### Development Server
 
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
 
### Code Scaffolding
 
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
 
### Build
 
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
 
### Running Unit Tests
 
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
 
### Running End-to-End Tests
 
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
 
### Further Help
 
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
 
 
 
 
 
 

