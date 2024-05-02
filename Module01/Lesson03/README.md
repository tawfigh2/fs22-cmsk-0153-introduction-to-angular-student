# Module 1: Lesson 3

## COMPONENTS

## Table of Contents

- [Components in the Angular World](#components-in-the-angular-world)
- [Installation of Module 1 Lesson 3](#installation-of-module-1-lesson-3)

## Components in the Angular World
_Components_ are TypeScript classes with a special Angular Decorator that tells Angular that the class is a component. The decoration @Component() is a decorator that marks a class as an Angular component and provides configuration metadata that determines how the component should be processed, instantiated, and used at runtime. Components are the most basic UI building block of an Angular app. An Angular app contains a tree of Angular components.


Angular components are a subset of directives, always associated with a template. Unlike other directives, **only one component can be instantiated per an element in a template**.


The naming convention when naming components is the name of the component followed by the word ‘Component’: **<ComponentName>Component**. The filename follows a similar pattern except it uses a dash separating multiple word component names and a period between the name of the component and ‘component’, as shown here:
* person.component.ts
* person-list.component.ts


### Example
For this example, we will create a component that holds and displays information about a person. First, we start with our class:

```TypeScript
export class PersonComponent {

  firstName: string;
  lastName: string;

  constructor() { }

}
```

As you can see, a component is just a TypeScript class.

Next, we need to tell Angular that this class is a component – and we do this by adding a **@Component()** decorator at the top of the class:

```TypeScript
@Component()
export class PersonComponent {

  firstName: string;
  lastName: string;

  constructor() { }

}

```

And, as we can see, we have an error. Just adding the **@Component()** is not enough. We now need to add a JavaScript object that contains at least three of the configuration pieces available inside the component decorator, like this:

```TypeScript
import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  firstName: string;
  lastName: string;

  constructor() { }

}

```

One of the import configuration items is the **selector**. The selector tells Angular where this component will be injected into the HTML file. We have to specify what HTML tag this component will be placed into – the parent component template. ***Make sure that the selector name, the tag, is unique***.

Next, we define the HTML template of the component. And, currently, we don’t have a HTML template file so we need to create one. In this component, the HTML file name also follows a naming convention – **person.component.html**. In our template, we will just display a simple header, as follows:

```html
<h2>Person</h2>
<p>person works!</p>
<hr>
```

That is the basic requirements of a component. It’s ready to go!

Now, with this completed, our component won’t be displayed until we make a couple more changes to our application. One change is to add our new component into the Module that contains this component – and, in our example, this is the **app.module.ts** file. ***Why?*** A component must belong to an NgModule decorated class in order for it to be available to another component or our application. 

To make it a member of an NgModule, we will add it to the declarations field of the **@NgModule** metadata. Components are one the building blocks that make up your application.

```TypeScript
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

As shown above, we’ve added the import for our component and then added the name of our component into the array of components (see the declarations section).
  
One last change: Remember, in our component decorator, we said that this component is to be injected into the **<app-person>** tag? Well, in the parent component template, in our example the **app.component.html** file, we need to add this HTML tag where we want our _Person_ component to be rendered. 

Now, our application should work! Assuming that we have `ng serve` already running in a Command window, we can view our browser ( localhost:4200 ) and see our new component.

## Installation of Module 1 Lesson 3

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
