import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonService } from './core/services/person.service';
import { PersonListComponent } from './persons/person-list.component';
import { PersonComponent } from './persons/person.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
