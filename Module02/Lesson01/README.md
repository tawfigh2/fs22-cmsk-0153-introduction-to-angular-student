# Module 2: Lesson 1
 
## ANGULAR COMPONENT COMMUNICATION
 
## Table of Contents
 
- [Why Learn Component Communication?](#why-learn-component-communication)
- [Installation of Module 2 Lesson 1](#installation-of-module-2-lesson-1)
 
## Why Learn Component Communication?
 
Let's take this step by step.
 
A component can contain zero or many other components within itself. In the previous lessons, we created a component and added this component into the **AppModule**. In this lesson, we will add a new component that will be a container for a list of child components. Specifically, we will have a _PersonListComponent_ that will contain a list of _person_ components.
 
***Do you recall how to create a workspace?***
```bash
ng new PROJECT-NAME
cd PROJECT-NAME
ng serve
```
### Creating the PersonListComponent
PersonListComponent

In the last lesson, we created an _app/persons_ folder and created a _Person_ component. We can use the same folder to hold our _
PersonListComponent_. This time, we will take advantage of CLI to create our component. Every time we use the CLI, it creates a new folder. When we include the –flat option, the CLI will create the component in the current folder.
 
First, we need to navigate to the _persons_ folder within our application before running the CLI command. Also, it’s often a good idea to use the ***–dry-run*** option to get an idea of what the CLI will do when you execute the command. Once you are satisfied, remove the –dry-run option and run the command again.
 
```bash
C:\Repos\cmsk153\Module02\Lesson01>cd src\app\persons
 
C:\Repos\cmsk153\Module02\Lesson01\src\app\persons>ng generate component PersonList --flat --dry-run
CREATE src/app/persons/person-list.component.html (26 bytes)
CREATE src/app/persons/person-list.component.spec.ts (655 bytes)
CREATE src/app/persons/person-list.component.ts (294 bytes)
CREATE src/app/persons/person-list.component.css (0 bytes)
 
NOTE: The "dryRun" flag means no changes were made.
 
C:\Repos\cmsk153\Module02\Lesson01\src\app\persons>
```
 
### Parent-Child Component Relationship
 
First, the component will demonstrate the parent–child component relationship; for now, there isn’t much to this component:
 
```TypeScript
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
 
  constructor() { }
 
  ngOnInit(): void {
  }
 
}
```
 
The trick here is to use the ***app-person*** selector defined in the _PersonComponent_ in the _person_ list HTML markup. When Angular renders the **PersonListComponent** it will come across this _<app-person>_ tag and then render that component as a child component. Let’s take a look at the _PersonListComponent_ markup:
 
```Html
<h1>Person List</h1>
<hr>
<app-person></app-person>
```
 
Next, we have to tell the Angular module where these components live, that we have a new _PersonListComponent_, and that we want this component to be rendered in the module markup - _app.component.html_. When using the CLI, the module will automatically be updated. Let’s take a look at the changes it made for us:
 
```TypeScript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppComponent } from './app.component';
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
```
 
And, in the ***app.component.html*** file, we will use the _<app-person-list>_ tag telling Angular to render the ***PersonListComponent*** like this:
 
```Html
<h1>Person List</h1>
<hr>
<app-person></app-person>
```
 
Then, let's make sure ***person.component.html*** looks like **Assignment #1**:
 
```Html
<h2>Person</h2>
 
<div class="card mb-3 bg-light">
    <div class="card-body">
        {{person.firstName}} {{person.lastName}} <br>
        {{person.address}} <br>
        {{person.city}}, {{person.province}} <br>
        {{person.phone}} <br>
        <br>
    </div>
    <div class="card-footer">
        <small class="text-muted">
            {{person.lastUpdated}}
        </small>
    </div>
</div>
```
 
Then, let's make sure **person.component.html** looks like **Assignment #1**:
 
```TypeScript
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
 
  person = {
    id: 1,
    firstName: 'Allan',
    lastName: 'Levsen',
    address: '123 Jasper Avenue',
    city: 'Calgary',
    province: 'Alberta',
    phone: '7801231234',
    lastUpdated: new Date('December 12, 2021 10:13:11')
  };
 
  constructor() { }
 
}
 
```
 
There isn’t much to this and, when we view our application, we see the header along with our one component. But, this obviously introduces some questions. How do we load a bunch of people in the_ PersonListComponent_ – the parent component - and display them in the _PersonComponent_ – the child component? To accomplish this, we will need to pass a person from the parent list component to the child component to render. We will learn, in the next lesson, that we can just add that decorator – the ***@Input()*** - to our event property like this:
 
```TypeScript
import { Component, Input } from '@angular/core';
 
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
 
  @Input() person: any;
 
  constructor() { }
 
}
```
 
This input decorator tells Angular that this event will be passed in from another component. Let's go see how we pass this event to our component.
 
Now, let's go to **PersonListComponent** template ***person-list.component*** and, change the _< app-person >_ to match the selector that we added to our _PersonComponent _component. Again, this is still just displaying a single event; we'll update this later to show multiple events. Also, we still aren't passing the event data into this component. To do that, all we have to do is add an attribute to our _< app-person >_ like this:
 
```Html
<h1>Person List</h1>
<hr>
<app-person [person]='person'></app-person>
```
 
 
**[person]** is the name of the variable in the child component that will hold the object being pass from the parent component; the variable we decorated with the **@Input()** decorator
 
***'person'*** is the object being passed from the parent component. We haven’t created the person object in our parent component yet. 
 
So, back to **PersonListComponent** to declare the person object there:
 
```TypeScript
export class PersonListComponent implements OnInit {
 
  person = {
    id: 1,
    firstName: 'Allan',
    lastName: 'Levsen',
    address: '123 Jasper Avenue',
    city: 'Calgary',
    province: 'Alberta',
    phone: '7801231234',
    lastUpdated: new Date('December 12, 2021 10:13:11')
  };
 
  constructor() { }
 
  ngOnInit(): void {
  }
 
}
```
 
## Installation of Module 2 Lesson 1
 
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
 

