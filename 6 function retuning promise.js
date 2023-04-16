//function returning promise

function ricePromise(){
    const bucket =['coffee','chips','vegetables','salt','rice'];
    return new Promise((resolve,reject)=>{
        if(bucket.includes("vegetables")&&bucket.includes("salt")&&bucket.includes("rice")){
            resolve("Fried Rice");
    
        }else{
            reject("couldn't do it")
        }
    })
}

//promise consume
ricePromise().then(
    //jab promise resolve hoga
    (myFriedRice)=>{
    console.log("let us eat",myFriedRice)
}).catch(
    //jab promise reject hoga
(error)=>{
    console.log(error)
})