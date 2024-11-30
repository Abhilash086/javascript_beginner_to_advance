// Fibonacci Series Code

// let n = 10;
// let n1 = 0, n2 = 1, nextTerm

// for (let i = 0; i < n; i++) {
//     console.log(n1)
//     nextTerm = n1+ n2
//     n1 = n2
//     n2 = nextTerm
// }

// Prime Numbers

// let num=15
// let isPrime = true
// for(let i=2;i<num/2;i++){
//   if(num%i === 0){
//    isPrime = false
//  }
// }

// if(isPrime){
//     console.log("Prime")
// }else{
//     console.log("Not Prime")
// }

// Password Generator

// let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// str = str + str.toLowerCase() + "0123456789"
// n = str.length
// result = ""
// for(let i=0;i<8;i++){
//  result = result+ str.charAt(Math.floor(Math.random() * n))
// }

// Print all prime number in Range

// for(let i=2;i<=100;i++){
//     let isPrime = true
//     for(let j=2;j<i;j++){
//         if(i%j === 0){
//             isPrime = false
//             break
//         }
//     }
//     if(isPrime){
//         console.log(i)
//     }
// }

// Factorial of a number

// let num = 5
// let factorial = 1
// for(let i=1;i<=num;i++){
//  factorial *= i
// }
// console.log(factorial)

// Add 2 numbers

// function addTwoNumbers(a, b){
//     return a+b
// }

// let result = addTwoNumbers(addTwoNumbers(6,4),addTwoNumbers(12,8))

// console.log(result)

// function calculateArea(shape, dimensions){
//     if(shape === "rectangle" && dimensions.length === 2){
//         return dimensions[0]*dimensions[1]
//     }else if(shape === "circle" && dimensions.length === 1){
//         return Math.round((Math.PI * dimensions[0] * dimensions[0]) * 100)/100
//     }else if(shape === "right-triangle" && dimensions.length === 2){
//         return 1/2*dimensions[0]*dimensions[1]
//     }else{
//         return "Invalid Inputs"
//     }
// }

// function calculateCaloriesBurned(activities){
//     let result = 0
//     for(let i=0;i<activities.length;i++){
//       result += activities[i]
//     }
//    return result
// }

// function outer() {
//   let num = 10;

//   function inner() {
//     console.log(num);
//   }

//   inner();
// }

// let num = 5;

// function outerFunc() {
//   let num = 10;

//   setTimeout(function () {
//     console.log(num);
//   }, 1000);
// }

// outerFunc();

// Usage of "For of" loop, It cannot be used to iterate through Object

// const fruits = "Apple banana peach"
// let rev = ""
// for(let fruit of fruits){
//     rev = fruit+rev
// }
// console.log(rev)

// Usage of For in Loop, It is used to iterate through Objects but it will only give keys if we want values of that keys then we have to use bracket notation [key] and pass the key in it

// const user = {
//   username: "Abhi",
//   password: "******",
//   age: 28,
//   goal: "Job",
// };

// for (let key in user) {
//   console.log(key, user[key]);
// }

// const student = {
//   name: "John Doe",
//   age: 20,
//   grade: "A",
// };

// let properties = "";

// for(let key in student){
//     properties += student[key] + ", "
// }

// console.log(properties)

// Write a program to print all the keys and values of the below object.
//  i. Using for...of loop along with Object.entries()
// ii. Using for...in loop

// const student = {
//   name: "John Doe",
//   age: 20,
//   grade: "A",
// };

// const studentEntries = Object.entries(student)

// for(let key of studentEntries){
//     console.log(key[0], key[1])
// }


// for(let key in student){
//     console.log(key, student[key])
// }

// const fruits = ["apple", "banana", "cherry","Dragon fruit","Grapes"]

// fruits.forEach((item)=>{
//     console.log(item)
// })

// map(), filter() and reduce()
/* map() is used to modify each elements in the array and return a new array, It doesnt alter the original array.
   filter() is used to filter the elements based on certain condition and returns a new array.
   reduce() is used to perform some operations on elements in arrays and return a Single value*/

// // Example for map()
// const months = ["January","February","March","April","May"]

// const mapMonths = months.map((item)=>{
//     return item.toUpperCase()
// })

// console.log(mapMonths)

// // Example for filter()
// const filterMonths = months.filter((item)=>{
//     return item.length > 5
// })
// console.log(filterMonths)

// Example for reduce()
// const nums = [1,2,3,4,5]

// const sum = nums.reduce((accumulator, num)=>{
//     return accumulator += num
// },0)
// console.log(sum)

// Counter App

// let counter = 0
// const increment = document.getElementById('increment')
// const decrement = document.getElementById('decrement')
// const count = document.querySelector('.value')
// const selection = document.querySelector('#changeBy')
// const reset = document.getElementById('reset')

// increment.addEventListener("click",()=>{
//     if(parseInt(selection.value) > 1){
//         counter = counter + parseInt(selection.value)
//         count.innerHTML = counter
//     }else{
//         counter++
//         count.innerHTML = counter
//     }
// })
// decrement.addEventListener('click',()=>{
//     if(parseInt(selection.value) > 1){
//         counter = counter - parseInt(selection.value)
//         count.innerHTML = counter
//     }else{
//         counter--
//         count.innerHTML = counter
//     }
// })

// reset.addEventListener('click',()=>{
//     counter = 0
//     count.innerHTML = counter
//     selection.value = 1
// })

// const card = document.querySelector(".card")
// const container = document.querySelector(".container")
// for (let i = 2; i <= 100; i++) {
//     container.appendChild(card.cloneNode()).textContent = i
// }


const p = new Promise((resolve, reject)=>{
    reject("Promise rejected")
})

p.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})
