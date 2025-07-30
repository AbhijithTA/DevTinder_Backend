// const promise = new Promise((resolve, reject) =>{
//     // do something asynchronous
//     if (success){
//         resolve("Operation was successful");
//     } else {
//         reject("Operation failed");
//     }
// })


//settimeout
setTimeout(() =>{
    console.log("This is executed after 2 seconds");
},1000);

setImmediate(() =>{
    console.log("This is executed immediately after the current event loop cycle");
})