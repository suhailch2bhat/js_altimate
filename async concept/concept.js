// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished
// function myFirst(mySecond) {
//   console.log("Hello");
//   mySecond()
// }

// function mySecond() {
//    console.log("Goodbye");
// }

// Functions running in parallel with other functions are called asynchronous
// myFirst(mySecond);

// setTimeout(myFunction, 3000);

// function myFunction() {
//  console.log( "I love You !!");
// }
// function mySecond() {
//    console.log("Goodbye");
// }
//  mySecond()
// In JavaScript, a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.

// A promise may have one of three states.

// Pending
// Fulfilled
// Rejected

//  const p =new Promise((res,rej)=>{
//    console.log("It is done.");
//   let a=prompt()
//   let b=prompt()
//   if(a===b){
//     res()
//   }
//   else{
//     rej()
//   }
// })
// p.then(()=>{console.log("SUCCESS")})
// p.catch(()=>{console.log("FAILURE")})
// async and await make promises easier to write"
// async makes a function return a Promise
// await makes a function wait for a Promise
// function resolveAfter2Seconds() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('resolved');
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   console.log('calling');
//   const result = await resolveAfter2Seconds();
//   console.log(result);
//   // expected output: "resolved"
// }

// asyncCall();
// function data(){
//     let result=["asd","sdfg","dfgh","dfgh"]
//   return(result) 
// }

// async function asyncCall() {
//   console.log('calling');
//   const result = await data();
//   console.log(result);
//   // expected output: "resolved"
// }

// asyncCall();
// A Map holds key-value pairs where the keys can be any datatype.

// A Map remembers the original insertion order of the keys.

// A Map has a property that represents the size of the map.
// Create a Map
// const fruits = new Map();

// // Set Map Values
// fruits.set("apples", 500);
// fruits.set("bananass", 300);
// fruits.set("os", 200);
// let k=fruits.get("apples");
// console.log(k)
// let m=fruits.size;
// console.log(m)
// let r=fruits.delete("apples");
// console.log(r)
// let d=fruits.delete("apples");
// k=fruits.get("os");
// console.log(k)