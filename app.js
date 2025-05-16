

// //simple debounce program 
// function debounce(fn,delay){
//     let timer;

//     return function(arg){
//         clearTimeout(timer);
//         timer=setTimeout(() => {
//             fn(arg);
//         }, delay);
//     };
// }

// const search=(query)=>{
//     console.log('searching for',query);
// };

// const searchwithdebounce=debounce(search,500);


// searchwithdebounce('hello');
// searchwithdebounce('Hii');


//actual working code:
function debounce(fn, delay) {
    let timer;
    return function(arg) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(arg), delay);
    };
}

const search = (query) => {
    console.log("Searching for:", query);
};

const searchwithdebounce = debounce(search, 500);

document.getElementById("searchBox").addEventListener("input", (e) => {
    searchwithdebounce(e.target.value);
});