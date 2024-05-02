# Module 2: Lesson 4
 
## ANGULAR ROUTING
 
## Table of Contents
 
- [Routing in Angular](#routing-in-angular)
- [Single Page Applications (SPAs)](#single-page-applications-spas)
- [Adding Your First Route](#adding-your-first-route)
- [Adding a Navigation Bar](#adding-a-navigation-bar)
- [Installation of Module 2 Lesson 4](#installation-of-module-2-lesson-4)
 
## Routing in Angular
 
On a traditional website, before the advent of single-page apps, each page was separate and distinct from others and every page was served independently from the server. When you went to ***index.html***, the browser would ask the server for the ***index.html*** file, which the server would then return to the browser and then display. And, if you went to _foo.html_, it would ask the server for that file, the file would be returned and then displayed, and the entire page would be replaced even if 60% of the page was the same as the prior page.
 
## Single Page Applications (SPAs)
 
Modern web applications, however, load an app into memory by loading just a single page - typically _index.html_ and then all other pages are loaded via JavaScript. But, they're not full pages. Your initial ***index.html*** is the only full-page load and then only portions of that page are replaced as you navigate from page to page around the site. To the user, it seems like new pages are being loaded. Users see the URL changing in their browser, and the back and forward buttons, work even though only one ***index.html*** page has ever actually been loaded from the server.
 
There's a lot that goes into making this work, but frameworks like Angular have abstracted a lot of that away and made it very simple.
 
So, let's look at how we can make this happen in our app.
 
## Adding Your First Route
 
Let's run the following:
```Bash
C:\Repos\cmsk153\Module02\Lesson04> ng generate module app-routing --flat --module=app
CREATE src/app/app-routing.module.ts (196 bytes)
UPDATE src/app/app.module.ts (649 bytes)
```
 
This command generated **AppRoutingModule** and registered it in the **AppModule**.
 
In the ***app.component.html*** file, we add a <router-outlet> element in there:
 
```Html
<router-outlet>
```
 
So, how do we tell Angular that, when a user requests a particular URL, to display its corresponding component here – in place of the <router-outlet> element?
 
This is how the generated ***app-routing.module.ts*** file would look:
 
```TypeScript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule {
 
}
```
 
Now, how do we tell Angular that, when a user requests a particular URL, to display its corresponding component here – in place of the <router-outlet> element? We do that by defining routes. Let's modify the ***app-routing.module.ts*** file at the root of our app where we can define those:
 
```TypeScript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonListComponent } from './persons/person-list.component';
import { RouterModule, Routes } from '@angular/router';
 
const routes: Routes = [];
 
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
```
 
The routes that we define for an application are going to, essentially, be an array of route objects that will look something like that shown below. Right now, we need three routes – one for _Courses_, _Students_, and _Reviews_. First, let's create one one for our _Courses_ page:
 
```TypeScript
const routes: Routes = [
  { path: 'persons', component: PersonListComponent }
]
```
This, esentially, says if the URL matches _/persons_, then to show this _PersonListComponent_ wherever our _<route-routlet>_ component is.
 
One, last thing we need to do is register the **RouterModule** in the **AppRoutingModule**.
 
 
## Adding a Navigation Bar
 
Now we need a navigation bar that navigates to path ```TypeScript '/persons' ```  
 
Let's run the following:
 
```Bash
C:\Repos\cmsk153\Module02\Lesson04> cd .\src\app\
C:\Repos\cmsk153\Module02\Lesson04\src\app> ng generate component NavBar
CREATE src/app/nav-bar/nav-bar.component.html (22 bytes)
CREATE src/app/nav-bar/nav-bar.component.spec.ts (627 bytes)
CREATE src/app/nav-bar/nav-bar.component.ts (278 bytes)
CREATE src/app/nav-bar/nav-bar.component.css (0 bytes)
UPDATE src/app/app.module.ts (799 bytes)
C:\Repos\cmsk153\Module02\Lesson04\src\app>
```
 
The navigation bar is just another component we are going to add to the ***app.component.html*** template to like this:
 
```Html
<app-nav-bar></app-nav-bar>
<hr>
<router-outlet></router-outlet>
```
Again, this is not a Bootstrap, so here is the code for the ***nav-bar.component.html***:
 
```Html
<a href="/persons" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Persons</a>
```
 
## Installation of Module 2 Lesson 4
 
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
 
 
 
 

