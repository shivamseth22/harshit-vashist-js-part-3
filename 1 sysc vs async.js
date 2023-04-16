//synchronous vs asynchronous programming

//java script is a synchronous and single threaded programing language

//synchronous

// console.group("shivam jiiiii");

// for(let i = 0 ; i< 1000; i++){
//     console.log("i am in loop");
// }

// console.log("scripttttt");

//set timeout function   ----> takes a function as a input and return ID

console.log("script start");

const id= setTimeout(()=>{
    console.log("inside setTimeout");
},1000);

console.log("the id of settimeout is ", id);
clearTimeout(id);
console.log("script end");