// This code was written in support of this article I wrote (https://medium.com/p/276724bb825b).

// Uncomment one of these examples and run this file from the terminal using node.

// ***************************
// THE CALL METHOD
// ***************************

// let obj = {things: 3};
// let addThings = function(a, b, c){
//  return this.things + a + b + c;
// };

// console.log( addThings.call(obj, 1,4,6) );



// ***************************
// THE APPLY METHOD
// ***************************

// let obj = {things: 3};
// let addThings = function(a, b, c){
//  return this.things + a + b + c;
// };
// let arr = [1,4,6];
// console.log( addThings.apply(obj, arr) );




// ***************************
// THE BIND METHOD
// ***************************

// let obj = {things: 3};
// let addThings = function(a, b, c){
//  return this.things + a + b + c;
// };
// console.log( addThings.bind(obj)(1,4,6) );

// // you can all also pass the arguments like this: 

// console.log( addThings.bind(obj, 1,4,6)() );