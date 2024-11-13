# Javascript_Beginner_to_Advance

Brandon Eich created this first version of Javascript language in 1995 within 10 days. :zipper_mouth_face: surprising right. At first this language is called "Mocha" later it was changed to "Livescript" at the end it was changed to Javascript.

## Datatypes in JavaScript

### There are 2 types of data types in Javascript

1. Primitive
2. Non Primitive

### We classify primitives data types in 7 categories

- number
- boolean
- string
- bigint
- undefined
- null
- symbol

### typeof NaN ==> number   :open_mouth:
### typeof null ==> object   :open_mouth:

### Non Primitives are of 2 types

- Object
- Array

## Variables in JavaScript

Javascript variables is just a name of the storage location of the values.

We can declare variables in 3 ways.
1. Using **let** keyword
2. Using **const** keyword
3. Using **var** keyword

## Code execution in Javascript

1. Memory creation phase
2. Code execution phase

Ref : [Code Execution in Javascript](https://youtu.be/iLWTnMzWtj4?si=Se7z5ggNP6GmGTTm)

## Dialogue boxes in JavaScript.

- alert("Your message here") --> returns undefined
- confirm("Your message here") --> return true or false.
- prompt("Your message here") --> Asks user to input something and returns users text.

## String Methods and Properties

Before starting string methods and properties we need know that strings are indexed. So basically we can access any single character of a string by doing something like this.

Expression: 'Hello World'[1]

Result: 'e'

### There is only one property that exists.
- length

## Methods (Without Argument)
- toUpperCase()
- toLowerCase()
- trim()
- trimStart()
- trimEnd()

## Methods (With Argument)
- includes()
- indexOf()
- replace()
- replaceAll()
- concat()
- padStart()
- padEnd()
- charAt()
- charCodeAt()
- split()

## Objects

We can create objects using curly braces {}.
Ex: const user = {}   --> creates an empty object

Object.seal(user) --> prevents user object from adding and deleting properties but can modify existing properties.

Object.freeze(user)  -->  prevents user object from adding, deleting and modifying the properties.

## Basic Array Methods

- pop()
- push()
- shift()
- unshift()
- concat()
- indexOf()
- includes()
- reverse()
- sort()
- slice()
- splice()

## Shallow copy vs Deep copy

### Shallow Copy

In Shallow copy nested Objects and Arrays are still referred to the Original Object, So the changes made in nested object of copied object will take change in original object as well.  

The below methods are used for shallow copy
1. Spread operator ...
2. Object.assign()

Spread operator -->  Three dots ...  
Ex: user1 = {name: "Carty", age: 23}  
    user2 = {...user1}  --> Copies user1 properties inside user2  
    
Before spread Operator we were using Object.assign() method to copy.  
Ex: const user2 = {}  
     Object.assign(user2, user1) ---> Copies user1 properties in user2  

Spread operator was implemented after ES6.

### Deep copy

In Deep copy nested objects and nested arrays copied from original object are independently created which means change made in nested object of copied object doesnt change in original object.  

The common method used for deep copy is **JSON.parse()** and **JSON.stringify()**.  

Ex: user1 = {name: "Carty", age: 23}
  const user2 = JSON.parse(JSON.stringify(user1)); --> Creates deepCopy  

## Functions

### Function declaration  
Here hoisting will happen and you can use the below function before defining, Since it is already created in the memory during memory creation phase  

Ex: function greetings() {  
        console.log("Hello")  
    }

### Function Expression  
Here we assign the function to a variable so hoisting will not happen here and if we try to use it before declaration it will throw error.  

Ex: const sayHi = function() {  
        console.log("Hello")  
    }

### NOTE: Both are called function definition

## Lexical scope and Closures  

  Inner function having access of variables declared in outer fuction is known as lexical scope.

Ex:  
![Lexical Scope Image](https://github.com/Abhilash086/javascript_beginner_to_advance/blob/c2172ede5865042d24dc2f8d9f2cb5f4f2475be2/lexical%20scope.png)
