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

### Closures  
If we return the inner function at the end of outer function, The inner function will still have the access to outer functions variables because of lexical scoping.  

## Higher Order Function and Callback Function  
A higher-order function in JavaScript is a function that uses another function as an argument or returns a function as value.  
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.  

Ex:  
![image of code](https://github.com/Abhilash086/javascript_beginner_to_advance/blob/main/Screenshot%202024-11-14%20131808.png?raw=true)


## setTimeout() and setInterval()  

The above 2 methods are an example of Higher order function.  

In setTimeout() it executes the function/code after the specified time delay. We have another method related to it which is **clearTimeout()**, This function returns an **ID** we can use that ID to stop the execution.  

Ex:  
setTimeout(function(){  
&emsp; console.log("Hello")  
}, 1000)  
The above code executes after 1 second.  

Similarly we have **setInterval()** it executes the function/code infinitely at the specified time interval. To stop this execution we have another function called **clearInterval()**, This function takes ID to stop the execution.  

Ex:  
setInterval(function(){  
&emsp; console.log("Hello")  
}, 1000)  
The anonymous function will execute after every 1 second for infinite times.  

## Eventloop and Callback Queue  

Whenever we run the code if there are any function calls available it will move the function to call stack where the function is executed but if there is an asynchronous function is called like **setTimeout()** It will be moved to webApis instead of call stack where the time delay will happen and after time elapsed, The function is then moved to Callback Queue, The Event loop will check if there are any functions available in callback queue if yes then it will check if the call stack is empty, if yes then that function will be moved to call stack to execute hence these async functions will execute after the synchronous code even though the delay is zero.  

## for of loop and for in loop  
for of loop is used to iterate over all the iterables like arrays, string etc..  
const fruits = ["Apple", "banana", "peach"]  

for(let fruit of fruits){
&emsp; console.log(fruit)
}  

for in is used to iterate over objects but it uses heavy resources so not used much.  
const user = {
&emsp; username: "Abhi",
&emsp;password: "******",
&emsp;age: 28,
&emsp;goal: "Job",
};

for (let key in user) {
&emsp;console.log(key, user[key]);
}  

## forEach()
**forEach()** is an array method used to iterate over the arrays which takes a callback function and runs that callback function for array length times.  
Ex:  
const fruits = ["apple", "banana", "cherry","Dragon fruit","Grapes"]  

fruits.forEach((item)=>{  
&emsp;console.log(item)  
})  

## map(), filter() and reduce()  
**map()** is used to modify each elements in the array and return a new array, It doesnt alter the original array.  
**filter()** is used to filter the elements based on certain condition and returns a new array.  
**reduce()** is used to perform some operations on elements in arrays and return a Single value.  

![](https://github.com/Abhilash086/javascript_beginner_to_advance/blob/main/map_reduce_filter.png?raw=true)

## Event Bubbling and Event Capturing  

Event bubbling is a concept in JavaScript (and other event-driven environments) that describes the way events propagate in the DOM (Document Object Model) when an event is triggered on an element. Specifically, event bubbling refers to the behavior where an event starts from the innermost target element and "bubbles up" to the outer elements in the DOM hierarchy.  

For Example if we add a 'click' event on a div element  event triggers when clicked on div but it also clicked on the "body" which is its parent, "document" which is its grandparent and "window" its his ancestor so it starts from target element and propogates to window. So to avoid this we have :  
**e.stopPropagation()**  

### How Event Bubbling Works:
1. Event Triggered: When a user interacts with a DOM element, such as clicking a button or typing in an input field, an event is fired.  

2. Event Propagation: The event does not just stay at the target element. Instead, it moves (or bubbles) up from the target element to its parent element, then to the parent of that element, and continues upwards until it reaches the root of the document (document).  

3. Handling Events at Different Levels: During this propagation process, event handlers attached to the target element, and any of its ancestor elements (parents, grandparents, etc.), will be triggered in the order the event propagates (from the target element to the root).

## Event Delegation  

Adding an addEventListener() to each child element individually can negatively impact performance. Instead, a more efficient approach is to attach the event listener to the parent element. Then, we can use event delegation, where the event listener on the parent checks the target of the event to apply the logic only to the relevant child elements. By using an if condition inside the event listener attached to the parent element, we can restrict the handling of events to only the child elements that meet certain criteria. This allows the parent element to handle events for its children without needing separate event listeners for each individual child, improving performance while still selectively applying the event logic based on conditions.
