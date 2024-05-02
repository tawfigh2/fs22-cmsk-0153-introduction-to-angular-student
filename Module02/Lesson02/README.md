# Module 2: Lesson 2
 
## ANGULAR SERVICES
 
## Table of Contents
 
- [Angular Services](#angluar-services)
- [Installation of Module 2 Lesson 2](#installation-of-module-2-lesson-2)
 
## Angular Services
 
Services are reusable classes that allow you to define business logic in separate classes and then inject whatever service is needed, whenever it is needed.
 
Since services are simply classes, services are typically decorated with **@Injectable()** but this is not required if (and only if) the services’ constructor doesn’t have any services injected into it.
 
Sound confusing? To be safe, simply decorate any services you create with **@Injectable()**. Of course, we will need to import **Injectable** from @angular/core.
 
### Creating a PersonService
 
In our **PersonService**, we will create a method named **getPersons()** which simply returns the constant array of _people_, as shown below:
 
```TypeScript
import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class PersonService {
 
  getPerson() {
    return PERSON;
  }
}
```
 
Place the **PERSON** constant at the bottom of the **PersonService**. Of Note: This isn’t the best solution and in a later lesson we will read this from a database using a HTTP service:
 
```TypeScript
const PERSON = [{
  id: 1,
  firstName: 'Allan',
  lastName: 'Levsen',
  address: '123 Jasper Avenue',
  city: 'Calgary',
  province: 'Alberta',
  phone: '7801231234',
  lastUpdated: new Date('December 12, 2021 10:13:11')
},
{
  id: 2,
  firstName: 'Hammad',
  lastName: 'Tawfig',
  address: '123 Jasper Avenue',
  city: 'Edmonton',
  province: 'Alberta',
  phone: '7804445555',
  lastUpdated: new Date('December 15, 2021 13:13:11')
}];
```
 
### Using the PersonService in a PersonListComponent
 
The point here is that we now have a service that can be injected into any component that requires the _person_ list; either all of them or one of them. Now, let's go back a **PersonListComponent** that we created in the previous lesson to use this service. It should look like the below after removing the ***person*** declaration:
 
```TypeScript
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
 
  persons: any;
 
  constructor() { }
 
  ngOnInit(): void {
  }
 
}
 
```
 
***What is OnInit?***
 
Let's start using the **PersonService** in the ***constructor()***:
 
```TypeScript
import { Component } from '@angular/core';
import { PersonService } from '../core/services/person.service';
 
@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {
 
  persons: any;
 
  constructor() {
    const personService = new PersonService();
    this.persons = personService.getPerson();
   }
 
}
```
 
Now, let's go back to the **PersonListComponent** template and make sure we are using the ***persons*** list, like this:
 
```Html
<h1>Person List</h1>
<hr>
<app-person [person]="persons[0]"></app-person>
```
 
This works - but what if, elsewhere in our application, we need the _persons_ list? Are we going to create another instance of the service object again? This goes against everything we know about dependency injection – one of the key components in the SOLID principles of programming.
 
 ***What is dependency injection?***
 
We'd like to be able to pass in the instance of the **PersonService** to use, that way the _PersonListComponent_ isn't mandating where they come from. This is dependency injection and it looks more like this:
 
```TypeScript
export class PersonListComponent implements OnInit {
 
  persons: any;
 
  constructor(private personService: PersonService) {
    this.persons = personService.getPerson();
  }
 
  ngOnInit(): void {
  }
 
}
 
```
 
Notice, here, that we're injecting the **PersonsService** as a ***personsService*** parameter into the _PersonListComponent_ constructor and then calling **getPersons()** – a function within the service class – with the object that is passed in. This code, however, is a little over-simplified. We really shouldn't be doing a potentially long-running call like _getPersons_ from a component constructor, but this gives you the general idea.
 
### Registering PersonService as a Provider
 
So, now we just need to let our app know that this service exists. We do that by registering it in our app module. To do this, we need to make a change in our app module; we'll import it and then we'll add it as a provider in the provider's list as follows:
 
```TypeScript
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
 
```
 
Now that it's registered as a provider, Angular's injector is aware of it. Whenever we request it in another component or service, Angular will know where to go to get this service.
 
That's all there is to injecting a service once it's registered. Angular will look at the constructor for this component and see that we want a _personService_ and it will go out and construct it or grab it from the injector and inject it.
 
### Back to PersonListComponent
 
Remember that we explored how it's not a good idea to using the **PersonService** in our constructor?
 
It's not a good idea to put things in a constructor that are potentially long-running and/or will be a HTTP service call (resulting in a time delay). We really shouldn't do it in our constructor, and yet, we need to have this happen when our component first loads.
 
Where can we do this, if not in the constructor? Well, components have lifecycle hooks that you can hook into. One of these lifecycle hooks is the _ngOnInit_ method. In this, the lifecycle event is called when the component is being loaded. Let's look at using **ngOnInit** method by moving the ***persons*** property instantiation from the ***constructor()***() into the **ngOnInit** method as follows:
 
```TypeScript
export class PersonListComponent implements OnInit {
 
  persons: any;
 
  constructor(private personService: PersonService) {
   
  }
 
  ngOnInit(): void {
    this.persons = this.personService.getPerson();
  }
}
```
 
We still need our constructor even though it's not doing anything in the body. This is because that's where our service gets injected and then we can access the service elsewhere in our class - like we are here in _ngOnInit_. Now, we have a functioning _PersonService_.
 
## Installation of Module 2 Lesson 2
 
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
 
 

