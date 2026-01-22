// let x = 10
// let y = 5;
// console.log(x+y)


// console.log("hello")

// callback functions -->  functions that are passed into another function as an argument are known as callback function 

// HOF (higher order function ) --> functions that take another functions as an argument are known as HOF

// function xyz(x, y){  // x and y are parameters
//     console.log("hello")
//     console.log(x)
//     console.log(y)
// }

// xyz(10, "hii")  // data passed in function calling known as agruments
// console.log(xyz)


// function A(){
//     console.log("i am frist function ")
// }


// function B(e,f){
//     console.log(e)
//     f()
// }

// B(10, A)

// 
// console.log("one")
// console.log("two")
// console.log("three")

// console.log("one")

// setTimeout(()=>{
//     console.log("two")
// }, 4000)

// console.log("three")


// market jana hai --> 5s
// coldrink khareedi --> 3s
// ghar waps aa jana  --> 2s
// coldrink pee lena hai --> 1s

// setTimeout(()=>{
//     console.log("market jana hai")
// }, 5000)

// setTimeout(()=>{
//     console.log("coldrink khareedi")
// }, 3000)

// setTimeout(()=>{
//     console.log("ghar waps aa jana")
// }, 2000)

// setTimeout(()=>{
//     console.log("coldrink pee lena hai")
// }, 1000)


// function A(b, c, d){
//     setTimeout(()=>{
//     console.log("market jana hai")
//     b(c,d)
// }, 5000)
// }

// function B(c,d){
//     setTimeout(()=>{
//     console.log("coldrink khareedi")
//     c(d)
// }, 3000)
// }


// function C(d){
//     setTimeout(()=>{
//     console.log("ghar waps aa jana")
//     d()
// }, 2000)
// }

// function D(){
//    setTimeout(()=>{
//     console.log("coldrink pee lena hai")
// }, 1000) 
// }



// A(B,C,D)



// setTimeOut ( CB function , time )

// function xyz(){
//     console.log("hello")
// }
// setTimeout(xyz, 3000)


// setTimeout(function(){
//     console.log("hello")
// } , 3000)



// Promises -->> promises are used to handle asynchronous task in javascript. it takes a callback function with two arguments  resolve or reject. if promise is resolved your can get your answer in .then part if promise is rejected you can get your answer in .catch part


// setTimeout(()=>{
//     console.log("one")
// },3000)

// console.log("two")

// let z = new Promise((resolve, reject) => {
//     reject("hii i am resolved")
//     // reject("hii i am rejected")
// })
// .then((ans)=>console.log(ans))
// .catch((ans)=>console.log(ans))


// find the sum of array if the length of array if 3 or more than three using promises other wise reject the promise

// let arr = [10, 20 ,40 ,5];

// let z = new Promise((resolve, reject) => {
//     let length = arr.length;  //2
//     if(length >= 3){
//         let sum = 0;
//         for(let i=0; i<arr.length;i++){
//             sum = sum+arr[i]
//         }
//         resolve(sum)
//     }
//     else{
//         reject("array length is less than three")
//     }
// })
// .then((ans)=>console.log(ans))  //
// .catch((ans)=>console.log(ans))

// https://github.com/shubhamkumar123456/TG-409-A9.git



// setTimeout(()=>{
//     console.log("one")
// },3000)

// console.log("two")

// let ans = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//     resolve("one")
// },3000)
// })
// .then((ans)=>console.log(ans))
// .then(()=>console.log("two"))


// https://dummyjson.com/products

let res = fetch('https://dummyjson.com/products') //return promise
.then((ans)=>ans.json()).then((ans)=>console.log(ans))
.catch((ans)=>console.log(ans))







