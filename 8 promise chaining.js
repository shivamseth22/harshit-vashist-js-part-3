//promise.resolve
// it will reaturn a promise which will be resolve
//promise chaining

// const myPromise= Promise.resolve(5);
// myPromise.then(value=>{
//     console.log(value);
// })

//then() always return promise

function myPromise(){
    return new Promise((resolve,reject)=>{
        resolve("foo");
    })
}
myPromise()
    .then((value)=>{
     console.log(value);
    value += "bar";
    return value;
})
.then((value)=>{
    console.log(value);
})


