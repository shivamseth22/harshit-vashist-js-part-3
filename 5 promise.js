//promise


//promise produce
const bucket =['coffee','chips','vegetables','salt','rice'];  

const friedRicePromise =new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables")&&bucket.includes("salt")&&bucket.includes("rice")){
        resolve("Fried Rice");

    }else{
        reject("couldn't do it")
    }
})
console.log(friedRicePromise);

//promise consume

friedRicePromise.then(
    //jab promise resolve hoga
    (myFriedRice)=>{
    console.log("let us eat",myFriedRice)
}).catch(
    //jab promise reject hoga
(error)=>{
    console.log(error)
})

