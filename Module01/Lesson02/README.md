# Module 1: Lesson 2

## TYPESCRIPT

## Table of Contents

- [What is TypeScript?](#what-is-typescript)
- [Types](#types)
- [Classes](#classes)
- [Interfaces](#interfaces)
- [Installation of Module 1 Lesson 2](#installation-of-module-1-lesson-2)

## What is TypeScript?
TypeScript is a superset to JavaScript. This means that, as an end result, it compiles into pure JavaScript. 

### Why Use TypeScript
There are two main reasons to use TypeScript:

First, it provides ‘strong typing’ - that’s where the name _TypeScript_ comes from. We can, and should, assign types to our variables and class members. These types won’t compile to JavaScript (JS), as JS does not know types. However, we will get compilation errors if we assign wrong types or make any other type-related errors. This is a HUGE help in the daily development work and should not be underestimated!

Second, TypeScript introduces some great featues that JS does not have out of the box (at least in the ES5 specification). These features include classes (‘class’ keyword), interfaces, generics, and modules. Being able to use these constructs makes for cleaner, easier to read code. Cleaner code assists in the avoidance of errors and the ability to track down errors quickly.

### Mixing TypeScript and JavaScript
Yes, TypeScript and JavaScript can be mixed. There is no rule that requires setting types, using ‘var’ instead of ‘let’, or using pure JavaScript libraries.

Browsers, however, don’t understand Typescript and therefore are compiled to Javascript when you save the source file. Typescript is a huge part of Angular and, although technically it would be possible to develop an Angular application using only Javascript, applications using the Angular framework would develop the application using 
Typescript.

This lesson will focus on the basics of Typescript, as most of what we do in Angular requires a preliminary understanding of Typescript.

## Types
Often, our applications will require variables, classes, and interfaces. Let’s take a look at a few examples.

Below, we define a variable 'myString' as a string and we can assign it a string value:

```TypeScript
let myString: string;
myString = 'Hammad';
```

But, when we try to assign the numerical value of _4_ to the variable (as below), we get an error:

```TypeScript
let myString: string;
myString = 4;
```

This is because, in this scope, the variable 'myString' is defined as a string and can only contain a string value. If a variable is not defined using a type, then the variable is inferred when it is first assigned - as follows:

```TypeScript
let myString;
myString = 4;
```

In the above example, 'myString' is defined as the type _any_ – which can be assigned any. If, for instance, you later try to assign it a string value, it behaves similar to JavaScript and the variable will now contain a string. Defining variables as _any_ is not suggested as this can lead to logical errors in your code if you’re not careful.

Other simple types are:

```TypeScript
let aString: string;
let aNumber: number;
let aBoolean: boolean;
let aArray: Array<string>;
```


## Classes
Classes allow us to create our own complex types (Note: ECMAScript also allows developers to create classes, so this isn’t unique to TypeScript). Using classes in Typescript cleans up the code and brings object-orientated principals to our development cycle. A class can have a constructor, methods, properties, and fields. A lot of how Angular defines components, services, and modules make use of the class type provided by TypeScript.

### Defining a Class 
The basic syntax for defining a class is simply the keyword 'class', followed by the name of the class, and then an open/close curly brace.

A more in-depth example is as follows:

```TypeScript
class Person {
    private fullName: string;

    constructor(firstName: string, lastName: string) {
        this.fullName = '{firstName} {lastName}';
    }

    getFullName(): string {
        return this.fullName;
    }
}
```
 
The class 'Person' has multiple components:


* It defines a private variable named _fullName_ and is defined as a string
* It has a constructor - which is like a method but is called every time a new instance of this type is created
* It has a public method named _getFullName_ that returns a string

Note: The variable _fullName_ is defined as private, which means that the variable is only accessible inside the class. In other words, when you create a new instance of this class – when you create a _Person_ object - the _fullName_ variable will not be accessible from that object.

By default, Typescript declares variables as public unless you specify that the variable is private. This OOP principle, encapsulation, is another advantage of using Typescript over Javascript.



### Using Classes

When we define a class, we are defining a new type. To use a class, we have to create an instance of a class which gives us an object – in our case, a _Person_ object.

```TypeScript
let person = new Person('John', 'Smith');
let fullName = person.getFullName();
```

First, we create a new instance of the _Person_ type and assigning the object to the variable named _Person_. Then, we can assign the string return value from the method _getFullName()_, accessible from the person object. Notice that when we create the _Person_ object, we are passing two string values – these are required because the constructor in the _Person_ type requires two string parameters - _firstName_ and _lastName_ – otherwise, we get an error.

```TypeScript
let person = new Person();
```

### Static Methods in a Class

Sometimes, you may require a method or methods in a class that are static. Static Methods methods that are available from the type and not from an instance of a type. Take a look at the following _Box_ class:

```TypeScript
class Box {
    name: string;
    color: string;

    static Area(width: number, height: number): number {
        return width * height;
    }

    static Perimeter(width: number, height: number): number {
        return 2 * (width + height);
    }
}
```
```TypeScript
let boxArea = Box.Area(4, 6);
```


Notice that we do not have to create an _box_ object to access the static methods; rather, we simply use the _box_ type to access the _area_ method. That said, when you try to access the _color_ variable of the type, you get an error:

```TypeScript
let boxColor = Box.color
```

Accessing non-static members of the type can only be accomplished once you have an instance of the type.

## Interfaces
One of TypeScript’s core principles is that type-checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping." In TypeScript, interfaces fill the role of naming these types and are a powerful way of defining contracts within the code as well as contracts with code outside of the project. We’ll see this in action when we call into HTTP services.

### Defining an Interface

Similar to a class, the basic syntax of an interface starts with the keyword _interface_, followed by the name of the interface, and then open/closing curly braces. Any variables, properties, and methods defined by the interface are placed in the body – between the curly braces. The easiest way to see how interfaces work is to start with a simple example:

```TypeScript
interface AuditProperties {
    createdBy: string;
    createdOn: Date;
}
```

With an interface, this allows for the definition of a common method of communicating between different types of data. That is, we can view objects that implement this contract knowing that certain properties and/or methods will be guaranteed by the interface. Let’s view some examples of this. 

Let’s first create a new class _Person_ that implements _AuditProperties_:

```TypeScript
class Person implements AuditProperties {
    name: string;
    createdBy: string;
    updatedBy: string;
}
```


Then, we will create a new object and assign it a value:

```TypeScript
let person: Person;

person = {createdBy: 'Allan', updatedBy: 'Bob', name: 'Peter'};
```


Now, we have a variable of the type _Person_ that has been assigned an object which contains all of the same properties as a _Person_. Duck Typing occurred here. In fact, because none of the members defined in the _Person_ type are optional, the object assigned must contain all of the properties – no less and no more.


## Installation of Module 1 Lesson 2

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
