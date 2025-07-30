// function debounce(fn, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => fn.apply(this, args), delay);
//   };
// }


function debounce(fn,delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    }
}



const debouncedSerarch = debounce(()=>{
    console.log("Search executed");
},2000);

debouncedSerarch();
debouncedSerarch();