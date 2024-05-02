import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent } from './persons/person-list.component';
import { CustomerListComponent } from './customers/customer-list.component';
import { OrderListComponent } from './orders/order-list.component';

const routes: Routes = [
  { path: 'persons', component: PersonListComponent },
  { path: 'customers', component: CustomerListComponent },
  { path: 'orders', component: OrderListComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}

