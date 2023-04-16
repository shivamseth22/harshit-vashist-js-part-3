//setinterval ---> same as setTimeout

// console.log("script sctart");

// // setInterval(()=>{
// //     console.log(Math.random());  
// // },1000);


// console.log("script end");
const button = document.querySelector("button");
const body = document.body;
const intervalId =setInterval(()=>{
    const red = Math.floor(Math.random()*126);
    const green = Math.floor(Math.random()*126);
    const blue = Math.floor(Math.random()*126);
    const rgb =`rgb(${red},${green},${blue})`;
    body.style.background=rgb ;
    
},1000);

button.addEventListener("click",()=>{
    clearInterval(intervalId);
    button.textContent =body.style.background;
})

