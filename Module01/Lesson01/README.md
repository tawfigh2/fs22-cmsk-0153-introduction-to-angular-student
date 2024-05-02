# Module 1: Lesson 1
 
## SETTING UP AN ANGULAR CLI ENVIRONMENT
Have you encountered issues during the installation of the CLI or setup of a new Angular project?
A lot of problems are solved by making sure you're using the latest version of NodeJS, npm, and the CLI itself.
 
 
## Table of Contents
- [Installation](#installation)
- [All Usages](#all-usages)
- [Generating an Angular Project](#generating-an-angular-project)
- [Serving the Project](#serving-the-project)
- [Generating Components, Services, Interface, Directives, and Pipes](#generating-components-services-interface-directives-and-pipes)
- [Debugging with VS Code](#debugging-with-vs-code)
- [Angular CLI Documentation](#angular-cli-documentation)
- [License](#license)
 
 
## Installation
 
**BEFORE YOU INSTALL:**
Both the CLI and generated project have dependencies that require the latest versions of Node and NPM.
 
### Install Globally
```bash
npm install -g @angular/cli
```

### Install Locally
```bash
npm install @angular/cli
```
 
## All Usages
 
```bash
ng help
```
 
## Generating an Angular Project
```bash
ng new PROJECT-NAME
```
 
## Serving the Project
```bash
ng serve --watch
```
Now you can open the browser and navigate to `http://localhost:4200/`.
 
 
## Generating Components, Services, Interface, Directives, and Pipes
 
You can use the `ng generate` (or just `ng g`) command to generate Angular components.
 
You can find all possible blueprints in the below table:
 
| Scaffold                                               | Usage                             |
| ------------------------------------------------------ | --------------------------------- |
| [Component](https://angular.io/cli/generate#component) | `ng g component my-new-component` |
| [Directive](https://angular.io/cli/generate#directive) | `ng g directive my-new-directive` |
| [Pipe](https://angular.io/cli/generate#pipe)           | `ng g pipe my-new-pipe`           |
| [Service](https://angular.io/cli/generate#service)     | `ng g service my-new-service`     |
| [Class](https://angular.io/cli/generate#class)         | `ng g class my-new-class`         |
| [Guard](https://angular.io/cli/generate#guard)         | `ng g guard my-new-guard`         |
| [Interface](https://angular.io/cli/generate#interface) | `ng g interface my-new-interface` |
| [Enum](https://angular.io/cli/generate#enum)           | `ng g enum my-new-enum`           |
| [Module](https://angular.io/cli/generate#module)       | `ng g module my-module`           |
 
 
## Debugging with VS Code
For more informations about Node.js debugging in VS Code, see the related [VS Code Documentation](https://code.visualstudio.com/docs/nodejs/nodejs-debugging).
 
 
## Angular CLI Documentation
The documentation for the Angular CLI is located on our [documentation website](https://angular.io/cli).
 
 
## License
[MIT](https://github.com/angular/angular-cli/blob/master/LICENSE)
 
 
 

