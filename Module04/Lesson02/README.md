# Module 4: Lesson 2

## REACTIVE FORMS
 
## Table of Contents
- [Reactive Forms](#reactive-forms)
- [Installation of Module 4 Lesson 2](#installation-of-module-4-lesson-2)
 
 
## Reactive Forms
Reactive forms provide direct, explicit access to the underlying forms object model. Compared to template-driven forms, they are more robust: they're more scalable, reusable, and testable. If forms are a key part of your application, or you're already using reactive patterns for building your application, use reactive forms (Angular, n.d.; https://angular.io/guide/reactive-forms#reactive-forms)

Let's create a form to search a **Order** by Id.

We need to run the following:
```Bash
PS C:\Repos\cmsk153\Module04\Lesson01> cd .\src\app\orders\
PS C:\Repos\cmsk153\Module04\Lesson01\src\app\orders> ng generate component OrderSearch --flat
CREATE src/app/orders/order-search.component.html (27 bytes)
CREATE src/app/orders/order-search.component.spec.ts (662 bytes)
CREATE src/app/orders/order-search.component.ts (298 bytes)
CREATE src/app/orders/order-search.component.css (0 bytes)
UPDATE src/app/app.module.ts (1504 bytes)
PS C:\Repos\cmsk153\Module04\Lesson01\src\app\orders>
```

This will generate the **OrderSearchComponent** and update the **AppMoudule**. We will get back to this in a bit. For now, let's go to the **OrderService**. In this service,  create method named ***getOrderById()***. This method calls (https://northwind.netcore.io/query/orders.json?Id=222&include=Total) and returns an array of **GetOrdersByIdResponse**s.

We need to a ***GetOrdersByIdResponse*** model to ***order.model.ts*** as follows:
```TypeScript
export interface GetOrdersByIdResponse {
  offset: number;
  total: number;
  results: Order[];
}
```
***Note*** the URL above takes a parameter Id which will pass in ***getOrderById(private id: number)***

Now, let's call the Web API in method ***getOrderById(private id: number)*** of **OrderService** as follows:

```TypeScript
getOrdersById(id: number): Observable<GetOrdersByIdResponse> {
    const url = 'https://northwind.netcore.io/query/orders.json?Id=' + id + '&include=Total';

    return this.httpClient.get<GetOrdersByIdResponse>(url);
  };
```

Then, we need to inject the **OrderService** into the **OrderSearchComponent** like this:

```TypeScript
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../core/services/order.service';

@Component({
  selector: 'app-order-search',
  templateUrl: './order-search.component.html',
  styleUrls: ['./order-search.component.css']
})
export class OrderSearchComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }

}
```

Now, let's register one, single **FormControl** to capture the order ***id***:

```TypeScript
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OrderService } from '../core/services/order.service';

@Component({
  selector: 'app-order-search',
  templateUrl: './order-search.component.html',
  styleUrls: ['./order-search.component.css']
})
export class OrderSearchComponent implements OnInit {

  id = new FormControl('');
  
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }

}
```

Next, we need to add the ***id*** form control to the ***order-search.component.html*** template which should end up looking like this:

```Html
<p>Orders Search</p>
<label for="id">Id: </label>
<input id="id" type="text" [formControl]="id">
<button (click)="SearchOrders()">Search</button>
```

***Notice*** that we added the search button as well.

The button calls method ***SearchOrders***, which is going to search the orders using the injected **OrderService** like this:
```TypeScript
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GetOrdersByIdResponse, OrderResponse } from '../core/models/order.model';
import { OrderService } from '../core/services/order.service';

@Component({
  selector: 'app-order-search',
  templateUrl: './order-search.component.html',
  styleUrls: ['./order-search.component.css']
})
export class OrderSearchComponent implements OnInit {

  id = new FormControl('');

  orders: Order[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {

  }

  searchOrders(): void {
    this.orderService.getOrdersById(this.id.value)
    .subscribe(
      (data: GetOrdersByIdResponse) => this.orders = data.results );
  }
   
}
```
Now, let's change ***order-search.component.html*** to display the search results:

```Html
<p>Order Search Form</p>
<label for="id">Id: </label>
<input id="id" type="text" [formControl]="id">
<button (click)="searchOrders()">Search</button>
<hr>
<p>Order Search Results</p>
<div class="col-md-4" *ngFor="let order of orders">
    <app-order [order]="order"></app-order>
</div>
```

Almost there! Let's register the **ReactiveFormsModule** in the **AppModule** (and don't forget the **NavBar** changes).

 
## Installation of Module 4 Lesson 2
 
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
 
 
