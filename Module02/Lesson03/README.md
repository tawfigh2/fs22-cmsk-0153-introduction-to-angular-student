# Module 2: Lesson 3
 
## REPEATING DATA
 
## Table of Contents
 
- [Why Repeat Data](#why-repeat-data)
- [Repeating Data with ngFor](#repeating-data-with-ngfor)
- [Installation of Module 2 Lesson 3](#installation-of-module-2-lesson-3)
 
## Why Repeat Data
 
Every application will, at some point repeat data; it will iterate through a list of items and output them to the screen. So far, our application is only outputting data from either a static object or from a static list of objects.

Generally, applications obtain an array of objects from a database; from a controller or directly in the code managing the display. However, in Angular, this data is managed with a service. And, this service is injected into the component.
 
## Repeating Data with ngFor
 
The Angular application that we've been writing has been desperately waiting for us to demonstrate **ngFor**! So far, the _persons_ list page has been listing only a single person. Let's update our application so that it can display multiple people.
 
Let's modify the template file ***person-list.component.html*** from displaying just one **PersonComponent** into a list of them. To repeatedly render each person in the array of people returned from _GetPersons_, we will use the structural directive – **ngFor**. The finished version is shown below (followed by an explanation):
 
```Html
<h1>Person List</h1>
<hr>
<div class="col-md-4" *ngFor="let person of persons">
    <app-person [person]="person"></app-person>
</div>
```
 
The idea behind the **ngFor** directive is that the element in which **ngFor** is located is the element that gets repeated. In our example, **ngFor** is on a div with a class of 'col-md-4' and this is what is repeated for each person in the array of people.
 
**ngFor** is a structural directive and therefore the HTML markup that is rendered gets inserted into the final markup.
 
Inside each of these columns, we are rendering an _< app-person >_ component. The current person that we iterate through will be passed along to the _app-person_ component – same as before when we included the one _app-person_ element – but now we are iterating through a list of them.
 
So, that's our ```TypeScript person``` element. We'll come back and dissect this statement in a minute, but for now let's go over and look at our web page. If we were to refresh the web page, we would see that we are now displaying multiple people.
 
Let's now take a closer look at this **ngFor** statement. The first thing that stands out is the asterisk ( * ) character. The asterisk indicates that this **ngFor** directive is a structural directive.
 
## Installation of Module 2 Lesson 3
 
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
 
 
 
 
 

